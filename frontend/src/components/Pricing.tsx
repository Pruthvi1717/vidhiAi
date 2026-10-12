const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    perks: [
      "10 questions per day",
      "Stories and mythology",
      "Festival dates",
      "English and Hindi",
    ],
    cta: "Start Free",
    pro: false,
  },
  {
    name: "Pro",
    price: "₹149",
    period: "/ month",
    perks: [
      "Unlimited questions",
      "Detailed puja vidhi with samagri lists",
      "City-based muhurat and festival reminders",
      "Hindi, Marathi and English",
      "Save your favourite answers",
    ],
    cta: "Get Pro",
    pro: true,
  },
];

function Pricing() {
  return (
    <section id="pro" className="section">
      <h2 className="section-title">Choose Your Plan</h2>
      <div className="divider">❖</div>
      <div className="plans">
        {plans.map((p) => (
          <div className={p.pro ? "plan plan-pro" : "plan"} key={p.name}>
            {p.pro && <span className="plan-badge">Most Popular</span>}
            <h3>{p.name}</h3>
            <div className="plan-price">
              {p.price} <span>{p.period}</span>
            </div>
            <ul>
              {p.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <a href="#" className={p.pro ? "btn" : "btn btn-outline"}>
              {p.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;