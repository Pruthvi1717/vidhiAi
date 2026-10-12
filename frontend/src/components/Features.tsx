const features = [
  {
    icon: "🪔",
    title: "Festival Dates",
    text: "Know when Ganesh Chaturthi, Diwali, Navratri and more are celebrated, with tithi and muhurat.",
  },
  {
    icon: "📖",
    title: "Stories & Mythology",
    text: "Read the stories from the Ramayana, Mahabharata, and Puranas, with sources.",
  },
  {
    icon: "🙏",
    title: "Puja Vidhi",
    text: "Step-by-step rituals and samagri lists for every puja and vrat.",
  },
  {
    icon: "🕉️",
    title: "Verified Mantras",
    text: "Mantras in Sanskrit with transliteration and meaning.",
  },
];

function Features() {
  return (
    <section id="features" className="section">
      <h2 className="section-title">What You Can Ask</h2>
      <div className="divider">❖</div>
      <div className="cards">
        {features.map((f) => (
          <div className="card" key={f.title}>
            <div className="card-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;