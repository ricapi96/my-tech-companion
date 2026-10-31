
// My Tech Companion - Website JavaScript

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close menu after clicking a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Automatically update copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Appointment request form
const BUSINESS_EMAIL = "erica@getmytechcompanion.com";

const appointmentForm = document.getElementById("appointment-form");

if (appointmentForm) {
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!appointmentForm.reportValidity()) {
      return;
    }

    if (BUSINESS_EMAIL === "YOUR-BUSINESS-EMAIL@example.com") {
      alert("Business email needs to be configured.");
      return;
    }

    const formData = new FormData(appointmentForm);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone") || "Not provided";
    const service = formData.get("service");
    const message = formData.get("message") || "No additional details";

    const subject = `MTC Appointment Request - ${name}`;

    const body = `
Hello My Tech Companion!

I would like to request an appointment.

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}

Details:
${message}

Please contact me to discuss availability.

Thank you!
    `.trim();

    const mailtoLink =
      `mailto:${BUSINESS_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });
}

