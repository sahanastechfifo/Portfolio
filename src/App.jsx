
import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">Sahanas.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="welcome">HELLO, I'M</p>

          <h1>Sahanas S</h1>

          <h2>Full Stack Developer</h2>

          <p className="description">
            I build modern web applications using Python, Django,
            React, JavaScript and SQL databases.
            I enjoy creating useful solutions through technology.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">SS</div>
          <h3>Sahanas S</h3>
          <p>Python | Django | React</p>

          <div className="tech-list">
            <span>Python</span>
            <span>Django</span>
            <span>React</span>
            <span>SQL</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About Me</h2>

        <p className="section-text">
          I am a Full Stack Developer interested in building
          functional and user-friendly web applications.
          My technical skills include Python, Django REST Framework,
          React, JavaScript, HTML, CSS and SQL databases.
          I enjoy learning new technologies and solving problems.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <p className="section-label">MY TECHNICAL EXPERTISE</p>
        <h2>My Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React, Bootstrap</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Python, Django, Django REST Framework</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>SQL, MySQL, PostgreSQL</p>
          </div>

          <div className="skill-card">
            <h3>Tools & Practices</h3>
            <p>REST APIs, JWT Authentication, API Integration</p>
          </div>
        </div>
      </section>

      {/* Projects Section
      <section id="projects" className="section">
        <p className="section-label">WHAT I HAVE WORKED ON</p>
        <h2>My Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">🏨</div>
            <h3>Hotel Management System</h3>

            <p>
              A hotel management and booking application with
              room availability, reservations, GST invoices,
              online payments and an admin dashboard.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Django REST</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon">🧾</div>
            <h3>GST Billing Software</h3>

            <p>
              A billing application designed to manage invoices,
              calculate taxes and connect frontend components
              with backend REST APIs.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Django</span>
              <span>React</span>
            </div>
          </div>
        </div>
      </section> */}

      
      {/* Projects Section */}
      <section id="projects" className="section">
        <p className="section-label">MY WORK</p>
        <h2>Featured Projects</h2>

        <p className="section-text projects-intro">
          Explore my full-stack projects, featuring web application
          development, REST API integration, authentication,
          database management, and business workflows.
        </p>

        <div className="projects-grid">

          {/* Project 1: Hotel Management System */}
          <div className="project-card">
            <div className="project-icon">🏨</div>

            <p className="project-category">
              FULL-STACK WEB APPLICATION
            </p>

            <h3>Hotel Management and Booking System</h3>

            <p className="project-description">
              Developed a multi-branch hotel management and booking
              system using React and Django REST Framework, with
              separate admin and reception roles secured by JWT
              authentication.
            </p>

            <ul className="project-features">
              <li>
                Implemented date-based room availability with
                booking-overlap validation.
              </li>
              <li>
                Developed check-in/check-out workflows, GST billing,
                and printable invoice generation.
              </li>
              <li>
                Integrated Razorpay online payments with
                payment-signature verification.
              </li>
              <li>
                Built a React interface with protected routes,
                search, pagination, file-upload validation,
                and an admin revenue chart.
              </li>
            </ul>

            <div className="project-tags">
              <span>React</span>
              <span>Django REST Framework</span>
              <span>JWT</span>
              <span>SQL</span>
              <span>Razorpay</span>
            </div>
          </div>

          {/* Project 2: GST Billing Software */}
          <div className="project-card">
            <div className="project-icon">🧾</div>

            <p className="project-category">
              BUSINESS APPLICATION
            </p>

            <h3>GST Billing Software</h3>

            <p className="project-description">
              Contributed to the development of a full-stack GST
              billing application at TechFifo Innovations using
              Python, Django REST Framework, React, JavaScript,
              and SQL databases.
            </p>

            <ul className="project-features">
              <li>
                Developed REST APIs to support billing workflows
                and invoice generation.
              </li>
              <li>
                Implemented automated tax calculation for
                GST billing operations.
              </li>
              <li>
                Implemented JWT authentication to support
                authenticated application access.
              </li>
              <li>
                Integrated frontend components with backend
                services and supported database integration.
              </li>
            </ul>

            <div className="project-tags">
              <span>Python</span>
              <span>Django REST Framework</span>
              <span>React</span>
              <span>JavaScript</span>
              <span>SQL</span>
            </div>
          </div>

        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="section">
        <p className="section-label">MY JOURNEY</p>
        <h2>Experience & Education</h2>

        <div className="experience-card">
          <h3>Software Developer</h3>
          <p>TechFifo Innovations | July 2026 – Present</p>
          <p>
            Working with Python, Django REST Framework, React,
            REST APIs, authentication and database integration.
          </p>
        </div>

        <div className="experience-card">
          <h3>Bachelor of Commerce (Cooperation)</h3>
          <p>University of Calicut | 2023</p>
        </div>

        <div className="experience-card">
          <h3>Bachelor of Commerce (Finance)</h3>
          <p>University of Calicut | 2021</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <p className="section-label">LET'S CONNECT</p>
        <h2>Contact Me</h2>

        <p>
          Interested in working together or discussing an opportunity?
          Feel free to contact me.
        </p>

        <a
          className="btn primary-btn"
          href="mailto:saleemsahanas527@gmail.com"
        >
          Send Me an Email
        </a>

        <p className="contact-email">
          saleemsahanas527@gmail.com
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Sahanas S | Full Stack Developer</p>
      </footer>

    </div>
  )
}

export default App
