import profileImage from "../assets/profile.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <img
          src={profileImage}
          alt="Mansi Gole"
          className="profile-img"
        />

        <h1>Mansi Gole</h1>
        <h2>Engineering Student & Frontend Developer</h2>

        <p>
          Electronics and Computer Science Engineering student passionate about
          Web Development, Web3, and emerging technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
