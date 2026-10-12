import HeroScene from "./HeroScene";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <HeroScene />
      </div>

      <div className="hero-content">
        <div className="om">ॐ</div>
        <h1>Vidhi AI</h1>
        <p className="shloka">सर्वे भवन्तु सुखिनः</p>
        <p className="subtitle">
          Your companion for Hindu festivals, stories, rituals and mantras.
          Ask anything, and receive answers with respect to tradition.
        </p>
        <a href="#features" className="btn">Start Exploring</a>
      </div>
    </section>
  );
}

export default Hero;