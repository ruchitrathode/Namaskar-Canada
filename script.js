function scrollToNewsletter() {
  document.getElementById("newsletter").scrollIntoView({ behavior: "smooth" });
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = this.querySelector("input");
  const email = emailInput.value.trim();

  if (email) {
    // Clear previous messages if any
    let msg = document.getElementById("subscribe-message");
    if (!msg) {
      msg = document.createElement("p");
      msg.id = "subscribe-message";
      msg.style.marginTop = "1rem";
      msg.style.color = "#0077b6";
      msg.style.fontWeight = "600";
      this.appendChild(msg);
    }
    msg.textContent = `🎉 Thanks for being a member, ${email}! Welcome to Namaskar Canada community.`;

    // Reset the form input
    this.reset();
  }
});



const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("primary-navigation");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navMenu.classList.toggle("show");
});

//  ============================
//  Stay Updated + Social Media 
//  ============================

document.getElementById('stay-updated-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = this.querySelector('input[type="email"]');
  const email = input.value.trim();
  if (email) {
    let msg = this.querySelector('.thank-you-message');
    if (!msg) {
      msg = document.createElement('p');
      msg.className = 'thank-you-message';
      msg.style.color = '#0a2540';
      msg.style.marginTop = '1rem';
      msg.style.fontWeight = '600';
      this.appendChild(msg);
    }
    msg.textContent = `🎉 Thanks for subscribing, ${email}!`;
    this.reset();
  }
});
