import React,{useEffect} from "react";
import "./App.css";
const ExperienceSection = () => {
  useEffect(() => {
    defaultCall();
  }, []);
  const defaultCall=()=> {
    // Get all the sections and navigation links
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  // Add a scroll event listener to the window object
  window.addEventListener("scroll", () => {
    // Get the current vertical scroll position
    const currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;

    // Check which section is in the viewport
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        currentScrollPos >= sectionTop &&
        currentScrollPos < sectionTop + sectionHeight
      ) {
        // Remove the "active" class from all nav links
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        // Get the corresponding nav link and add the "active" class
        const navLink = document.querySelector(`.nav a[href="#${section.id}"]`);
        navLink.classList.add("active");
      }
    });
  });
  }
  return (
    <div className="full-section">
      <nav className="nav">
        <a href="#section1">Section 1</a>
        <a href="#section2">Section 2</a>
        <a href="#section3">Section 3</a>
      </nav>
      <div className="full-sec">
        <section id="section1">
          <h2>Section 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            convallis nulla eu sapien consequat, vel commodo augue pulvinar.
            Nullam hendrerit tellus non tellus commodo efficitur.
          </p>
        </section>

        <section id="section2">
          <h2>Section 2</h2>
          <p>
            Phasellus commodo, velit quis dignissim euismod, ex arcu interdum
            nunc, sed lacinia sapien nisi ac lorem. Vivamus quis mi et urna
            dignissim rutrum.
          </p>
        </section>

        <section id="section3">
          <h2>Section 3</h2>
          <p>
            Donec congue fringilla bibendum. Aenean porttitor blandit enim, eu
            tincidunt neque maximus nec. Duis vel neque in elit fringilla
            lobortis at non massa.
          </p>
        </section>
      </div>
    </div>
  );
};
export default ExperienceSection;
