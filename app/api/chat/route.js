import { NextResponse } from "next/server";

// 📌 Gemini model to use — gemini-1.5-flash is free tier and fast
const GEMINI_MODEL = "gemini-1.5-flash";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

export async function POST(request) {
  try {
    const body = await request.json();

    // body arrives in Anthropic format: { system, messages, max_tokens }
    // We convert it to Gemini format below

    const { system, messages } = body;

    // Build Gemini conversation history from Anthropic-style messages
    // Gemini uses "user" and "model" roles (not "assistant")
    const geminiHistory = messages.slice(0, -1).map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    // The last message is the current user prompt
    const lastMessage = messages[messages.length - 1];

    const geminiBody = {
      // Inject the system prompt as the first user turn (Gemini's way of handling system prompts)
      system_instruction: {
        parts: [{ text: system || "You are a helpful assistant." }],
      },
      contents: [
        ...geminiHistory,
        {
          role: "user",
          parts: [{ text: lastMessage.content }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 400,
        temperature: 0.7,
      },
    };

    const response = await fetch(
      `${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(geminiBody),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Gemini API error:", err);
      return NextResponse.json(
        { error: "Gemini API request failed", detail: err },
        { status: response.status }
      );
    }

    const geminiData = await response.json();

    // Extract reply text from Gemini response
    const replyText =
      geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response. Please try again!";

    // Return in Anthropic-compatible format so GymChatbot.jsx works unchanged
    return NextResponse.json({
      content: [{ type: "text", text: replyText }],
    });
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error", detail: error.message },
      { status: 500 }
    );
  }
}
