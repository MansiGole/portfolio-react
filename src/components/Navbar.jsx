function Navbar({ darkMode, toggleDarkMode, activeSection }) {
  function getLinkClass(section) {
    return activeSection === section ? "active" : "";
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">Mansi Gole</a>

        <ul className="nav-links">
          <li><a href="#home" className={getLinkClass("home")}>Home</a></li>
          <li><a href="#about" className={getLinkClass("about")}>About</a></li>
          <li><a href="#skills" className={getLinkClass("skills")}>Skills</a></li>
          <li><a href="#projects" className={getLinkClass("projects")}>Projects</a></li>
          <li><a href="#contact" className={getLinkClass("contact")}>Contact</a></li>
        </ul>

        <button
          onClick={toggleDarkMode}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
