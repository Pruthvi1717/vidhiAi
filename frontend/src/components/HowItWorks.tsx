const steps = [
  { no: "१", title: "Ask", text: "Type your question in English, Hindi or Marathi." },
  { no: "२", title: "Search", text: "Vidhi AI looks through scriptures and ritual guides." },
  { no: "३", title: "Learn", text: "Get a clear answer with sources and a note on regional customs." },
];

function HowItWorks() {
  return (
    <section id="how" className="section section-dark">
      <h2 className="section-title">How It Works</h2>
      <div className="divider">❖</div>
      <div className="steps">
        {steps.map((s) => (
          <div className="step" key={s.no}>
            <div className="step-no">{s.no}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <a href="#" className="btn btn-light">Open Chat (coming soon)</a>
    </section>
  );
}

export default HowItWorks;