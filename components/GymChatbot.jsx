"use client"; // ✅ Required in Next.js App Router — this component uses hooks & browser APIs

import { useState, useEffect, useRef } from "react";

const GYM_CONTACT = {
  phone: "+880 1712-345678",
  whatsapp: "+880 1712-345678",
  email: "hello@peakformgym.com",
  instagram: "@peakformgym",
  facebook: "facebook.com/peakformgym",
  address1: "Level 3, Bashundhara City Mall, Panthapath, Dhaka 1215",
  address2: "House 12, Road 5, Gulshan-2 Circle, Dhaka 1212",
  address3: "Plot 7, Sector-11, Uttara, Dhaka 1230",
};

const MEMBERSHIPS = [
  {
    name: "Starter",
    price: "৳1,500",
    period: "/month",
    tagline: "Perfect for beginners",
    gradientFrom: "#fb7185",
    gradientTo: "#f43f6e",
    icon: "🌱",
    features: ["Access Mon–Fri (5AM–9PM)", "Locker access", "2 Group classes/week", "Basic cardio & weight equipment", "Free fitness assessment on join"],
    details: {
      ideal: "Beginners or part-timers looking to build a habit without a heavy commitment.",
      included: [
        "Weekday gym access (5:00 AM – 9:00 PM)",
        "Standard locker with combination lock",
        "2 group fitness classes per week (Zumba, HIIT, Yoga)",
        "Access to treadmills, cycles & free weights",
        "1 complimentary fitness assessment on sign-up",
        "Access to changing rooms & showers",
      ],
      notIncluded: ["Weekend access", "Personal trainer sessions", "Nutrition consultation", "Guest passes"],
      contract: "Month-to-month · No lock-in",
      joinFee: "৳500 one-time joining fee",
      upgrade: "Upgrade to Standard anytime — fee credited.",
    },
  },
  {
    name: "Standard",
    price: "৳2,500",
    period: "/month",
    tagline: "Our most popular plan",
    gradientFrom: "#f43f6e",
    gradientTo: "#be123c",
    icon: "⭐",
    popular: true,
    features: ["7-day access (5AM–10PM)", "Locker + towel service", "Unlimited group classes", "All equipment zones", "1 PT session/month"],
    details: {
      ideal: "Active members who want full flexibility and guided support every month.",
      included: [
        "7-day gym access (5:00 AM – 10:00 PM)",
        "Locker + daily fresh towel included",
        "Unlimited group fitness classes (Zumba, HIIT, Pilates, Yoga, Boxing)",
        "Access to ALL equipment zones including cable machines, squat racks, Smith machines",
        "1 personal training session per month (45 min)",
        "Access to sauna & steam room",
        "Smoothie bar 10% member discount",
        "Monthly body composition scan",
      ],
      notIncluded: ["24/7 access", "Extra PT sessions (add-on available)", "Nutrition consult"],
      contract: "Month-to-month · No lock-in",
      joinFee: "৳0 joining fee (waived permanently)",
      upgrade: "Upgrade to Premium anytime — difference prorated.",
    },
  },
  {
    name: "Premium",
    price: "৳4,000",
    period: "/month",
    tagline: "The full PeakForm experience",
    gradientFrom: "#9f1239",
    gradientTo: "#be123c",
    icon: "👑",
    features: ["24/7 access (all branches)", "VIP locker room", "Unlimited classes + 4 PT/mo", "Monthly nutrition consult", "2 guest passes/month"],
    details: {
      ideal: "Serious athletes and professionals who want the complete premium experience.",
      included: [
        "24/7 gym access via key-card (all 3 branches)",
        "VIP locker room with private locker & toiletries",
        "Unlimited group fitness classes",
        "4 personal training sessions per month (60 min each)",
        "Monthly nutrition consultation with certified dietitian",
        "2 guest passes per month",
        "Priority class booking (24hr early access)",
        "Unlimited sauna & steam room",
        "Complimentary smoothie after every PT session",
        "Quarterly health & fitness report",
        "Free branded PeakForm gym bag on signup",
      ],
      notIncluded: ["Nothing — this is the full package! 🎉"],
      contract: "3-month minimum · then month-to-month",
      joinFee: "৳0 joining fee + free welcome kit",
      upgrade: "Already the top tier — enjoy every benefit!",
    },
  },
];

const OFFERS = [
  { id: "eid", emoji: "🌙", title: "Eid Special Sale", badge: "LIMITED", badgeColor: "#059669", desc: "Celebrate Eid with a new you! Get 30% OFF on all 3-month and 6-month plans. Offer valid for new sign-ups only.", expiry: "Valid until 15 Apr 2026", cta: "Claim Eid Offer" },
  { id: "fastgain", emoji: "⚡", title: "Fast Gain Package", badge: "HOT", badgeColor: "#dc2626", desc: "Bulk up fast with our 8-week intensive program. Includes 3 PT sessions/week, personalised meal plan, and weekly progress tracking.", expiry: "Rolling enrolment · starts any Monday", cta: "Join Fast Gain" },
  { id: "weightloss", emoji: "🔥", title: "Weight Loss Masterclass", badge: "NEW", badgeColor: "#7c3aed", desc: "12-week science-backed fat loss program. Group coaching, weekly check-ins, macros guide, and unlimited HIIT classes included.", expiry: "Next cohort: 1 April 2026", cta: "Reserve My Spot" },
  { id: "couple", emoji: "💑", title: "Couple Package", badge: "SAVE 24%", badgeColor: "#db2777", desc: "Train together, grow together. Both partners get Standard membership for just ৳3,800/month combined. Save ৳1,200 every month!", expiry: "Ongoing offer", cta: "Get Couple Plan" },
  { id: "student", emoji: "🎓", title: "Student Discount", badge: "15% OFF", badgeColor: "#0284c7", desc: "Show a valid student ID and get 15% off any monthly membership plan. Because staying fit shouldn't break your budget.", expiry: "Year-round · valid student ID required", cta: "Claim Student Deal" },
  { id: "refer", emoji: "🤝", title: "Refer a Friend", badge: "FREE MONTH", badgeColor: "#d97706", desc: "Refer a friend who signs up for any plan and you BOTH get 1 month completely free. No limit on referrals — keep earning!", expiry: "Ongoing offer", cta: "Start Referring" },
];

const GYM_INFO = {
  timings: "Weekdays: 5:00 AM – 11:00 PM\nWeekends: 6:00 AM – 10:00 PM\nPublic Holidays: 8:00 AM – 6:00 PM",
  gentsLadies: "🧑 Gents Zone: 5:00 AM – 9:00 PM\n👩 Ladies Zone: 7:00 AM – 9:00 PM\n🤝 Mixed Hours: 9:00 AM – 1:00 PM (Ground Floor only)",
};

const QUICK_ACTIONS = [
  { label: "🕐 Timings", value: "gym timings" },
  { label: "📍 Location", value: "contact details" },
  { label: "📞 Contact Us", value: "contact details" },
  { label: "👥 Gents/Ladies", value: "gents and ladies hours" },
  { label: "💰 Monthly Fees", value: "show membership plans" },
  { label: "🎁 Offers", value: "current offers" },
  { label: "🏋️ Memberships", value: "show membership plans" },
  { label: "🆘 I Have an Issue", value: "I have an issue" },
];

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 5, padding: "11px 15px", background: "white", borderRadius: "16px 16px 16px 4px", boxShadow: "0 1px 5px rgba(0,0,0,0.08)", width: "fit-content" }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: "#f43f6e", animation: `dotBounce 1.2s ${i * 0.2}s infinite` }} />
      ))}
    </div>
  );
}

function PlanDetail({ plan, onClose, onSignUp }) {
  const d = plan.details;
  const isFullPkg = d.notIncluded[0] === "Nothing — this is the full package! 🎉";
  return (
    <div style={{ background: "white", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
      <div style={{ background: `linear-gradient(135deg, ${plan.gradientFrom}, ${plan.gradientTo})`, padding: "14px 16px", color: "white" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 22 }}>{plan.icon}</div>
            <div style={{ fontWeight: 900, fontSize: 17, marginTop: 2 }}>{plan.name} Plan</div>
            <div style={{ fontSize: 11, opacity: 0.85, marginTop: 1 }}>{plan.tagline}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 22, fontWeight: 900 }}>{plan.price}</div>
            <div style={{ fontSize: 11, opacity: 0.8 }}>{plan.period}</div>
          </div>
        </div>
      </div>
      <div style={{ padding: "12px 14px", fontSize: 12 }}>
        <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "7px 10px", marginBottom: 10, color: "#166534", fontSize: 11.5 }}>
          💡 <strong>Ideal for:</strong> {d.ideal}
        </div>
        <div style={{ fontWeight: 800, fontSize: 12, color: "#111", marginBottom: 5 }}>✅ What's included</div>
        <ul style={{ margin: "0 0 10px", padding: "0 0 0 14px", lineHeight: 2, color: "#333" }}>
          {d.included.map(f => <li key={f}>{f}</li>)}
        </ul>
        {!isFullPkg && (
          <>
            <div style={{ fontWeight: 800, fontSize: 12, color: "#111", marginBottom: 5 }}>❌ Not included</div>
            <ul style={{ margin: "0 0 10px", padding: "0 0 0 14px", lineHeight: 2, color: "#999" }}>
              {d.notIncluded.map(f => <li key={f}>{f}</li>)}
            </ul>
          </>
        )}
        {isFullPkg && (
          <div style={{ background: "#fef3c7", borderRadius: 8, padding: "6px 10px", marginBottom: 10, fontSize: 11.5, color: "#92400e" }}>🎉 Nothing excluded — this is the full package!</div>
        )}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
          <span style={{ background: "#f0f9ff", color: "#0369a1", padding: "3px 9px", borderRadius: 20, fontSize: 10.5, fontWeight: 700 }}>📋 {d.contract}</span>
          <span style={{ background: "#fdf4ff", color: "#7e22ce", padding: "3px 9px", borderRadius: 20, fontSize: 10.5, fontWeight: 700 }}>💳 {d.joinFee}</span>
        </div>
        <div style={{ fontSize: 11, color: "#999", marginBottom: 12, fontStyle: "italic" }}>🔄 {d.upgrade}</div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => onSignUp(plan.name)} style={{ flex: 1, padding: "9px", background: `linear-gradient(135deg, ${plan.gradientFrom}, ${plan.gradientTo})`, color: "white", border: "none", borderRadius: 9, fontWeight: 800, fontSize: 12.5, cursor: "pointer" }}>
            Sign Up for {plan.name} →
          </button>
          <button onClick={onClose} style={{ padding: "9px 12px", background: "#f1f5f9", color: "#555", border: "none", borderRadius: 9, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

function MembershipCards({ onEnquire }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
      <div style={{ fontWeight: 800, fontSize: 13, color: "#1a1a2e", marginBottom: 2 }}>🏋️ Choose your membership</div>
      {MEMBERSHIPS.map(m => (
        <div key={m.name} style={{
          background: m.popular ? `linear-gradient(135deg, ${m.gradientFrom}, ${m.gradientTo})` : "white",
          color: m.popular ? "white" : "#1a1a2e",
          borderRadius: 13, padding: "13px 14px",
          border: m.popular ? "none" : "1.5px solid #fce4ec",
          position: "relative", boxShadow: m.popular ? "0 4px 18px rgba(244,63,110,0.28)" : "0 1px 5px rgba(0,0,0,0.06)"
        }}>
          {m.popular && <div style={{ position: "absolute", top: -10, right: 12, background: "#fbbf24", color: "#7c2d12", fontSize: 10, fontWeight: 800, padding: "2px 10px", borderRadius: 20 }}>⭐ POPULAR</div>}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontWeight: 800, fontSize: 14 }}>{m.icon} {m.name}</span>
            <span style={{ fontWeight: 900, fontSize: 17 }}>{m.price}<span style={{ fontSize: 11, fontWeight: 500 }}>{m.period}</span></span>
          </div>
          <ul style={{ margin: 0, padding: "0 0 0 14px", fontSize: 11.5, lineHeight: 1.75, opacity: m.popular ? 1 : 0.7 }}>
            {m.features.map(f => <li key={f}>{f}</li>)}
          </ul>
          <button onClick={() => onEnquire(m.name)} style={{
            marginTop: 9, width: "100%", padding: "8px", borderRadius: 8,
            border: m.popular ? "1.5px solid rgba(255,255,255,0.5)" : "1.5px solid #f43f6e",
            background: m.popular ? "rgba(255,255,255,0.18)" : "#f43f6e",
            color: "white", fontWeight: 800, fontSize: 12, cursor: "pointer"
          }}>
            View Full Details & Enquire →
          </button>
        </div>
      ))}
    </div>
  );
}

function OffersCards({ onClaim }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
      <div style={{ fontWeight: 800, fontSize: 13, color: "#1a1a2e", marginBottom: 2 }}>🎁 Current Offers & Packages</div>
      {OFFERS.map(o => (
        <div key={o.id} style={{ background: "white", borderRadius: 13, padding: "12px 14px", border: "1.5px solid #fce4ec", boxShadow: "0 1px 5px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 5 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ fontSize: 18 }}>{o.emoji}</span>
              <span style={{ fontWeight: 800, fontSize: 13, color: "#1a1a2e" }}>{o.title}</span>
            </div>
            <span style={{ background: o.badgeColor, color: "white", fontSize: 9, fontWeight: 800, padding: "2px 8px", borderRadius: 20, flexShrink: 0, marginLeft: 6 }}>{o.badge}</span>
          </div>
          <p style={{ margin: "0 0 5px", fontSize: 11.5, color: "#555", lineHeight: 1.55 }}>{o.desc}</p>
          <div style={{ fontSize: 10.5, color: "#aaa", marginBottom: 8 }}>📅 {o.expiry}</div>
          <button onClick={() => onClaim(o.title)} style={{ width: "100%", padding: "7px", background: "linear-gradient(135deg, #f43f6e, #be123c)", color: "white", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 11.5, cursor: "pointer" }}>
            {o.cta} →
          </button>
        </div>
      ))}
    </div>
  );
}

function ContactCard({ onAction }) {
  return (
    <div style={{ background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}>
      <div style={{ background: "linear-gradient(135deg, #f43f6e, #be123c)", padding: "12px 14px", color: "white" }}>
        <div style={{ fontWeight: 900, fontSize: 14 }}>📬 Contact PeakForm Gym</div>
        <div style={{ fontSize: 11, opacity: 0.85, marginTop: 2 }}>We'd love to hear from you!</div>
      </div>
      <div style={{ padding: "10px 12px" }}>
        {[
          { icon: "📞", label: "Call / WhatsApp", value: GYM_CONTACT.phone, href: `tel:${GYM_CONTACT.phone}` },
          { icon: "✉️", label: "Email", value: GYM_CONTACT.email, href: `mailto:${GYM_CONTACT.email}` },
          { icon: "📸", label: "Instagram", value: GYM_CONTACT.instagram, href: "#" },
          { icon: "👍", label: "Facebook", value: GYM_CONTACT.facebook, href: "#" },
        ].map(it => (
          <a key={it.label} href={it.href} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderBottom: "1px solid #f8f8f8", textDecoration: "none" }}>
            <span style={{ fontSize: 17, width: 24, textAlign: "center", flexShrink: 0 }}>{it.icon}</span>
            <div>
              <div style={{ fontSize: 10, color: "#bbb", fontWeight: 600 }}>{it.label}</div>
              <div style={{ fontSize: 12.5, color: "#1a1a2e", fontWeight: 700 }}>{it.value}</div>
            </div>
          </a>
        ))}
        <div style={{ marginTop: 10, marginBottom: 4 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#be123c", marginBottom: 6 }}>📍 Our 3 Branches</div>
          {[GYM_CONTACT.address1, GYM_CONTACT.address2, GYM_CONTACT.address3].map((a, i) => (
            <div key={i} style={{ fontSize: 11, color: "#555", padding: "5px 0", borderBottom: "1px solid #f8f8f8", display: "flex", gap: 6, lineHeight: 1.4 }}>
              <span style={{ color: "#f43f6e", fontWeight: 900, flexShrink: 0 }}>#{i + 1}</span> {a}
            </div>
          ))}
        </div>
        <button onClick={() => onAction("I want to visit the gym")} style={{ marginTop: 10, width: "100%", padding: "8px", background: "#f43f6e", color: "white", border: "none", borderRadius: 9, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
          Plan My Visit →
        </button>
      </div>
    </div>
  );
}

function LeadForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone)) e.phone = "Valid phone required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    setErrors(e); return !Object.keys(e).length;
  };
  return (
    <div style={{ background: "white", borderRadius: 16, padding: 15, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
      <div style={{ fontWeight: 800, marginBottom: 11, fontSize: 13, color: "#1a1a2e" }}>📋 Quick — tell me who you are!</div>
      {[["name","Full Name","e.g. Riya Ahmed","text"],["phone","Phone Number","e.g. 01712345678","tel"],["email","Email Address","you@email.com","email"]].map(([k,l,p,t]) => (
        <div key={k} style={{ marginBottom: 9 }}>
          <label style={{ fontSize: 11.5, fontWeight: 700, color: "#555", display: "block", marginBottom: 3 }}>{l}</label>
          <input type={t} placeholder={p} value={form[k]}
            onChange={e => { setForm(x => ({...x,[k]:e.target.value})); setErrors(x => ({...x,[k]:""})); }}
            style={{ width: "100%", padding: "8px 12px", borderRadius: 9, border: `1.5px solid ${errors[k]?"#f43f6e":"#e2e8f0"}`, fontSize: 12.5, outline: "none", boxSizing: "border-box" }}
          />
          {errors[k] && <div style={{ color: "#f43f6e", fontSize: 10.5, marginTop: 2 }}>{errors[k]}</div>}
        </div>
      ))}
      <button onClick={() => { if(validate()) onSubmit(form); }} style={{ width: "100%", padding: "10px", background: "linear-gradient(135deg, #f43f6e, #be123c)", color: "white", border: "none", borderRadius: 10, fontWeight: 800, fontSize: 13, cursor: "pointer", marginTop: 2 }}>
        Submit & Continue →
      </button>
    </div>
  );
}

export default function GymChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [leadDone, setLeadDone] = useState(false);
  const [userName, setUserName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [firstSent, setFirstSent] = useState(false);
  const [leads, setLeads] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const historyRef = useRef([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    try { const s = localStorage.getItem("peakform_leads"); if (s) setLeads(JSON.parse(s)); } catch {}
  }, []);

  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => addBot("Hi there 👋 Welcome to **PeakForm Gym**!\nHow can I help you today? Tap a quick button or type below!"), 400);
    }
  }, [open]);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, typing, showForm]);

  const time = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const addBot = (text, extra = null) => {
    setMessages(p => [...p, { role: "bot", text, extra, time: time() }]);
    historyRef.current.push({ role: "assistant", content: text });
  };
  const addUser = (text) => {
    setMessages(p => [...p, { role: "user", text, time: time() }]);
    historyRef.current.push({ role: "user", content: text });
  };

  const saveLead = (form) => {
    const entry = { ...form, timestamp: new Date().toLocaleString() };
    const updated = [...leads, entry];
    setLeads(updated);
    try { localStorage.setItem("peakform_leads", JSON.stringify(updated)); } catch {}
    const first = form.name.split(" ")[0];
    setUserName(first); setLeadDone(true); setShowForm(false);
    addBot(`✅ Thanks, **${first}**! Your details are saved. Welcome to PeakForm! 🎉\n\nNow, how can I help you today? 💪`);
  };

  const handleEnquire = (planName) => {
    const plan = MEMBERSHIPS.find(m => m.name === planName);
    if (!plan) return;
    const txt = userName ? `Great choice, ${userName}! Here's everything about the **${planName}** plan:` : `Here's the full breakdown for the **${planName}** plan:`;
    setMessages(p => [...p, { role: "bot", text: txt, extra: { type: "planDetail", plan }, time: time() }]);
    historyRef.current.push({ role: "assistant", content: txt });
  };

  const closePlanDetail = (idx) => {
    setMessages(p => p.map((m, i) => i === idx ? { ...m, extra: null } : m));
    setMessages(p => [...p, { role: "bot", text: "No problem! Here are all our plans again 👇", extra: "memberships", time: time() }]);
  };

  const handleOfferClaim = (title) => send(`I'm interested in the "${title}" offer`);

  const send = async (text = input) => {
    const msg = (typeof text === "string" ? text : input).trim();
    if (!msg) return;
    setInput("");
    addUser(msg);

    if (!firstSent && !leadDone) {
      setFirstSent(true);
      setTyping(true);
      setTimeout(() => { setTyping(false); setShowForm(true); addBot("Before I help — could you share a few quick details? 😊 I'll personalise everything for you."); }, 800);
      return;
    }

    setTyping(true);
    const lower = msg.toLowerCase();

    if (lower.includes("membership") || lower.includes("plan") || lower.includes("fee") || lower.includes("price") || lower.includes("cost") || lower.includes("monthly")) {
      setTimeout(() => { setTyping(false); addBot(userName ? `Here are our plans, ${userName}! 💪` : "Here are our plans! 💪", "memberships"); }, 800); return;
    }
    if (lower.includes("offer") || lower.includes("discount") || lower.includes("promo") || lower.includes("sale") || lower.includes("eid") || lower.includes("package") || lower.includes("masterclass")) {
      setTimeout(() => { setTyping(false); addBot("Here are all our current deals and packages! 🎁", "offers"); }, 800); return;
    }
    if (lower.includes("contact") || lower.includes("phone") || lower.includes("call") || lower.includes("email") || lower.includes("whatsapp") || lower.includes("social") || lower.includes("address") || lower.includes("location") || lower.includes("where") || lower.includes("branch") || lower.includes("visit")) {
      setTimeout(() => { setTyping(false); addBot("Here's how to reach us or find us! 📬", "contact"); }, 700); return;
    }

    let local = null;
    if (lower.includes("timing") || lower.includes("hours") || lower.includes("open")) local = `🕐 **Gym Timings**\n${GYM_INFO.timings}`;
    else if (lower.includes("gents") || lower.includes("ladies") || lower.includes("women") || lower.includes("men")) local = `👥 **Gents & Ladies Schedule**\n${GYM_INFO.gentsLadies}`;

    if (local) {
      setTimeout(() => { setTyping(false); addBot(userName ? `${local}\n\nAnything else, ${userName}?` : `${local}\n\nAnything else?`); }, 700); return;
    }

    try {
      // ✅ Calls our own Next.js API route — your Anthropic key stays secret on the server
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 350,
          system: `You are a friendly helpful AI assistant for PeakForm Gym in Dhaka. User's name: ${userName || "valued member"}. Be warm and concise (under 120 words). Contact: phone ${GYM_CONTACT.phone}, email ${GYM_CONTACT.email}, Instagram ${GYM_CONTACT.instagram}. Branches: Bashundhara City Mall, Gulshan-2 Circle, Uttara Sector-11. Timings: ${GYM_INFO.timings}. Plans: Starter ৳1500/mo, Standard ৳2500/mo (popular), Premium ৳4000/mo. Offers: EID Sale 30% off, Fast Gain Package 8-week program, Weight Loss Masterclass 12-week, Couple Package ৳3800, Student 15% off, Refer a Friend free month. If complaint/issue, empathize and offer to collect their concern or connect with support. Always end with a helpful follow-up question.`,
          messages: historyRef.current.slice(-10),
        }),
      });
      const data = await res.json();
      setTyping(false);
      addBot(data.content?.[0]?.text || "I'm having trouble right now. Please try again or contact us directly!");
    } catch {
      setTyping(false);
      addBot(`Having trouble connecting! Reach us directly:\n📞 ${GYM_CONTACT.phone}\n✉️ ${GYM_CONTACT.email}`);
    }
  };

  const reset = () => {
    setMessages([]); setFirstSent(false); setShowForm(false); historyRef.current = [];
    setTimeout(() => addBot("Hi again! 👋 Welcome back to **PeakForm Gym**. How can I help?"), 300);
  };

  const exportCSV = () => {
    if (!leads.length) return;
    const csv = "Name,Phone,Email,Timestamp\n" + leads.map(l => `"${l.name}","${l.phone}","${l.email}","${l.timestamp}"`).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = "peakform_leads.csv"; a.click();
  };

  const fmt = t => t.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>");

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
        * { font-family: 'Nunito', sans-serif; box-sizing: border-box; }
        @keyframes dotBounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-7px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes popIn { from{opacity:0;transform:scale(0.9) translateY(20px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes pulseBtn { 0%,100%{box-shadow:0 0 0 0 rgba(244,63,110,0.55)} 70%{box-shadow:0 0 0 14px rgba(244,63,110,0)} }
        .msg { animation: fadeUp 0.28s ease forwards; }
        .chatwin { animation: popIn 0.32s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .qbtn { transition: all .15s; cursor: pointer; }
        .qbtn:hover { background: #f43f6e !important; color: white !important; transform: translateY(-2px); box-shadow: 0 3px 12px rgba(244,63,110,0.3); }
        .qbar { overflow-x: scroll; scrollbar-width: none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; }
        .qbar::-webkit-scrollbar { display: none; }
        .msgs::-webkit-scrollbar { width: 3px; }
        .msgs::-webkit-scrollbar-thumb { background: #fca5a5; border-radius: 3px; }
      `}</style>

      {/* Page background */}
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #fff5f7 0%, #fce4ec 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 44 }}>🏋️</div>
        <div style={{ fontWeight: 900, fontSize: 26, color: "#be123c" }}>PeakForm Gym</div>
        <div style={{ fontSize: 14, color: "#aaa" }}>Your fitness journey starts here</div>
        <div style={{ marginTop: 8, fontSize: 12, color: "#ccc" }}>← Click 💪 at the bottom-right to open the AI assistant</div>
      </div>

      {/* Floating chat launcher */}
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 9999 }}>
        {!open && (
          <button onClick={() => setOpen(true)} style={{
            width: 58, height: 58, borderRadius: "50%",
            background: "linear-gradient(135deg, #f43f6e, #be123c)",
            border: "none", cursor: "pointer", fontSize: 24, color: "white",
            display: "flex", alignItems: "center", justifyContent: "center",
            animation: "pulseBtn 2.2s infinite", boxShadow: "0 4px 20px rgba(244,63,110,0.45)"
          }}>💪</button>
        )}

        {open && (
          <div className="chatwin" style={{
            width: 368, maxHeight: "90vh", display: "flex", flexDirection: "column",
            borderRadius: 22, overflow: "hidden", boxShadow: "0 24px 70px rgba(0,0,0,0.18)",
            position: "absolute", bottom: 0, right: 0,
          }}>

            {/* Header */}
            <div style={{ background: "linear-gradient(135deg, #f43f6e, #be123c)", padding: "13px 14px", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>🏋️</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: "white", fontWeight: 900, fontSize: 14 }}>PeakForm AI Assistant</div>
                <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 10.5, display: "flex", alignItems: "center", gap: 4, marginTop: 1 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} /> Online · replies instantly
                </div>
              </div>
              <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
                <button onClick={() => setShowAdmin(p => !p)} title="View leads" style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "white", borderRadius: 7, padding: "4px 8px", cursor: "pointer", fontSize: 12 }}>📊</button>
                <button onClick={reset} title="New chat" style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "white", borderRadius: 7, padding: "4px 8px", cursor: "pointer", fontSize: 12 }}>🔄</button>
                <button onClick={() => setOpen(false)} style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "white", borderRadius: 7, padding: "4px 9px", cursor: "pointer", fontSize: 16, lineHeight: 1 }}>×</button>
              </div>
            </div>

            {/* Admin panel */}
            {showAdmin && (
              <div style={{ background: "#fff8f8", borderBottom: "1px solid #fce4ec", padding: "10px 12px", maxHeight: 140, overflowY: "auto", flexShrink: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontWeight: 800, fontSize: 12, color: "#be123c" }}>Leads ({leads.length})</span>
                  <button onClick={exportCSV} style={{ background: "#f43f6e", color: "white", border: "none", borderRadius: 5, padding: "2px 9px", fontSize: 10.5, cursor: "pointer", fontWeight: 700 }}>⬇ Export CSV</button>
                </div>
                {!leads.length ? <div style={{ fontSize: 11, color: "#aaa" }}>No leads yet.</div> :
                  leads.map((l, i) => (
                    <div key={i} style={{ fontSize: 10.5, color: "#555", padding: "3px 0", borderBottom: "1px solid #fce4ec" }}>
                      <b>{l.name}</b> · {l.phone} · {l.email} <span style={{ color: "#ddd" }}>· {l.timestamp}</span>
                    </div>
                  ))}
              </div>
            )}

            {/* Messages */}
            <div className="msgs" style={{ flex: 1, overflowY: "auto", background: "linear-gradient(180deg, #fff5f7, #fff0f4)", padding: "14px 12px", display: "flex", flexDirection: "column", gap: 10, minHeight: 0 }}>
              {messages.map((m, i) => (
                <div key={i} className="msg" style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", alignItems: "flex-end", gap: 6 }}>
                  {m.role === "bot" && (
                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg,#f43f6e,#be123c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>🤖</div>
                  )}
                  <div style={{ maxWidth: "80%" }}>
                    <div style={{
                      padding: "9px 13px", fontSize: 12.5, lineHeight: 1.65,
                      borderRadius: m.role === "user" ? "14px 14px 3px 14px" : "14px 14px 14px 3px",
                      background: m.role === "user" ? "linear-gradient(135deg,#f43f6e,#be123c)" : "white",
                      color: m.role === "user" ? "white" : "#1a1a2e",
                      boxShadow: m.role === "user" ? "0 2px 10px rgba(244,63,110,0.28)" : "0 1px 5px rgba(0,0,0,0.07)"
                    }} dangerouslySetInnerHTML={{ __html: fmt(m.text) }} />
                    {m.extra === "memberships" && <div style={{ marginTop: 8 }}><MembershipCards onEnquire={handleEnquire} /></div>}
                    {m.extra === "offers" && <div style={{ marginTop: 8 }}><OffersCards onClaim={handleOfferClaim} /></div>}
                    {m.extra === "contact" && <div style={{ marginTop: 8 }}><ContactCard onAction={send} /></div>}
                    {m.extra?.type === "planDetail" && (
                      <div style={{ marginTop: 8 }}>
                        <PlanDetail plan={m.extra.plan} onClose={() => closePlanDetail(i)} onSignUp={name => send(`I want to sign up for the ${name} plan`)} />
                      </div>
                    )}
                    <div style={{ fontSize: 9.5, color: "#bbb", marginTop: 2, textAlign: m.role === "user" ? "right" : "left" }}>{m.time}</div>
                  </div>
                </div>
              ))}
              {showForm && <div className="msg"><LeadForm onSubmit={saveLead} /></div>}
              {typing && (
                <div className="msg" style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
                  <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg,#f43f6e,#be123c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>🤖</div>
                  <TypingDots />
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* ── Quick action bar — properly scrollable on all screen sizes ── */}
            <div style={{ background: "white", borderTop: "1px solid #fce4ec", paddingTop: 7, paddingBottom: 5, flexShrink: 0 }}>
              <div
                className="qbar"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  gap: 6,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 2,
                  overflowX: "scroll",
                  width: "100%",
                }}
              >
                {QUICK_ACTIONS.map(a => (
                  <button key={a.label} className="qbtn" onClick={() => send(a.value)} style={{
                    display: "inline-block",
                    flexShrink: 0,
                    padding: "5px 11px",
                    borderRadius: 20,
                    border: "1.5px solid #f43f6e",
                    background: "white",
                    color: "#f43f6e",
                    fontSize: 11,
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                  }}>{a.label}</button>
                ))}
              </div>
            </div>

            {/* Input bar */}
            <div style={{ background: "white", padding: "8px 10px 13px", display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
              <input
                value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()}
                placeholder="Write your message..."
                style={{ flex: 1, minWidth: 0, padding: "9px 13px", borderRadius: 22, border: "1.5px solid #fce4ec", fontSize: 12.5, outline: "none", background: "#fff5f7", color: "#1a1a2e" }}
              />
              <button onClick={() => send()} style={{
                width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#f43f6e,#be123c)",
                border: "none", color: "white", fontSize: 15, cursor: "pointer", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(244,63,110,0.4)"
              }}>↑</button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
