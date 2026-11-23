import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const positions = [
        window.innerHeight * 0.35,
        window.innerHeight * 0.5,
        window.innerHeight * 0.65,
      ];

      const sectionCounts = {};

      positions.forEach((y) => {
        const element = document.elementFromPoint(window.innerWidth / 2, y);

        const section = element?.closest("#home, #about, #projects, #contact");

        if (section) {
          sectionCounts[section.id] = (sectionCounts[section.id] || 0) + 1;
        }
      });

      const activeId = Object.entries(sectionCounts).sort(
        (a, b) => b[1] - a[1],
      )[0]?.[0];

      if (activeId) {
        setActiveSection((current) =>
          current === activeId ? current : activeId,
        );
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavigation = (event, id) => {
    event.preventDefault();

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "#home");
      setActiveSection("home");
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    const stackPage = target.closest(".stack-page");

    if (stackPage && stackPage.parentElement) {
      let targetPosition = 0;
      const allPages = Array.from(stackPage.parentElement.children);

      for (const page of allPages) {
        if (page === stackPage) break;
        targetPosition += page.offsetHeight;
      }

      // Tambah offset jika target berada di tengah stack-page (misal #tools di dalam stack-page-3)
      let child = stackPage.firstElementChild;
      while (child && child !== target) {
        targetPosition += child.offsetHeight;
        child = child.nextElementSibling;
      }

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    window.history.pushState(null, "", `#${id}`);
    setActiveSection(id);
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
      initial={false}
      animate={{
        y: 0,
        scale: isScrolled ? 1 : 1.02,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="nav-side nav-left">
        {navLinks.slice(0, 2).map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(event) => handleNavigation(event, link.id)}
            className={activeSection === link.id ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#home"
        className="logo"
        onClick={(event) => handleNavigation(event, "home")}
      >
        B.E <span>PROFILE.</span>
      </a>

      <div className="nav-side nav-right">
        {navLinks.slice(2).map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(event) => handleNavigation(event, link.id)}
            className={activeSection === link.id ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;
