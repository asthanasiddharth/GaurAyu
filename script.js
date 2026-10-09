const WEDDING = {
  couple: "Ayushi & Gaurav",
  // Replace this with the real wedding date/time: "2027-02-14T18:30:00+05:30"
  weddingDate: "2026-11-19T12:00:00+05:30",
  whatsapp: "919260903124", // Example: "919876543210"
  events: [
    // {
    //   name: "Mehendi",
    //   date: "Date to be announced",
    //   venue: "Venue to be announced",
    //   time: "Evening",
    //   image: "assets/couple-09.png",
    //   map: "https://www.google.com/maps"
    // },
    {
      name: "Haldi Ceremony",
      date: "19th November",
      venue: "Status Club",
      time: "12 noon onwards",
      image: "assets/couple-02.png",
      map: "https://www.google.com/maps/place/Status+Club/@27.4235785,80.1186076,17z/data=!3m1!4b1!4m9!3m8!1s0x399ef9000cf3ea03:0x30072453d2b19f5d!5m2!4m1!1i2!8m2!3d27.4235785!4d80.1211825!16s%2Fg%2F11lw32_5lh?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D"
    },
    // {
    //   name: "Cocktail Party",
    //   date: "19th November",
    //   venue: "Status Club",
    //   time: "8 PM onwards",
    //   image: "assets/couple-17.png",
    //   map: "https://www.google.com/maps/place/Status+Club/@27.4235785,80.1186076,17z/data=!3m1!4b1!4m9!3m8!1s0x399ef9000cf3ea03:0x30072453d2b19f5d!5m2!4m1!1i2!8m2!3d27.4235785!4d80.1211825!16s%2Fg%2F11lw32_5lh?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D"
    // },
    {
      name: "Wedding",
      date: "20th November",
      venue: "R.R. Marriage Lawn",
      time: "8 PM onwards",
      image: "assets/couple-18.png",
      map: "https://www.google.com/maps/place/R.R.+Inter+College,+Hardoi/@27.3948083,80.1332981,17z/data=!3m1!4b1!4m6!3m5!1s0x399ef40000000001:0x7cbe677d230c316d!8m2!3d27.3948083!4d80.135873!16s%2Fg%2F11c5rt4mj_?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D"
    }
  ]
};

const eventList = document.querySelector("#eventList");
const modal = document.querySelector("#routeModal");

eventList.innerHTML = WEDDING.events.map((event, index) => `
  <article class="event-board reveal">
    <div class="event-photo">
      <img src="${event.image}" alt="${event.name}" loading="lazy">
    </div>
    <div class="event-copy">
      <span class="event-tag">Chapter ${String(index + 1).padStart(2, "0")} · The Celebration</span>
      <h3>${event.name}</h3>
      <div class="event-date">${event.date}</div>
      <div class="event-venue">${event.venue}<br>${event.time}</div>
      <button class="route-btn" data-event="${index}">See the route →</button>
    </div>
  </article>
`).join("");

function openRoute(event) {
  document.querySelector("#routeTitle").textContent = event.venue;
  document.querySelector("#routeMeta").textContent = `${event.name} · ${event.date} · ${event.time}`;
  document.querySelector("#routeMapLink").href = event.map;
  document.querySelector("#routeEyebrow").textContent = `Your destination · ${event.name}`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeRoute() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-event]");
  if (button) openRoute(WEDDING.events[Number(button.dataset.event)]);
  if (e.target.matches("[data-close-route]")) closeRoute();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeRoute();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("mousemove", e => {
  const x = (e.clientX / innerWidth - .5) * 2;
  const y = (e.clientY / innerHeight - .5) * 2;
  document.querySelectorAll(".parallax").forEach(el => {
    el.style.transform = `translate3d(${x * -12}px, ${y * -8}px, 0)`;
  });
});

function petal() {
  const el = document.createElement("span");
  el.className = "petal";
  el.style.left = Math.random() * 100 + "vw";
  el.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
  el.style.animationDuration = (6 + Math.random() * 7) + "s";
  el.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.querySelector("#petals").appendChild(el);
  setTimeout(() => el.remove(), 14000);
}
setInterval(petal, 850);

function tick() {
  const end = new Date(WEDDING.weddingDate).getTime();
  const diff = Math.max(0, end - Date.now());
  const sec = Math.floor(diff / 1000);
  const d = Math.floor(sec / 86400);
  const h = Math.floor((sec % 86400) / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  document.querySelector("#days").textContent = String(d).padStart(2, "0");
  document.querySelector("#hours").textContent = String(h).padStart(2, "0");
  document.querySelector("#minutes").textContent = String(m).padStart(2, "0");
  document.querySelector("#seconds").textContent = String(s).padStart(2, "0");
}
tick(); setInterval(tick, 1000);

const rsvp = document.querySelector("#rsvpBtn");
if (WEDDING.whatsapp) {
  rsvp.href = `https://wa.me/${WEDDING.whatsapp}?text=${encodeURIComponent(`Hi! We'd love to RSVP for Ayushi & Gaurav's wedding.`)}`;
} else {
  rsvp.addEventListener("click", e => {
    e.preventDefault();
    alert("Add the WhatsApp number in script.js to activate RSVP.");
  });
}

const weddingMusic = document.querySelector("#weddingMusic");
const musicBtn = document.querySelector("#musicBtn");

let musicStarted = false;

function startWeddingMusic() {
  if (musicStarted) return;

  weddingMusic.volume = 0.45;

  weddingMusic.play()
    .then(() => {
      musicStarted = true;
      musicBtn.textContent = "♫";
      musicBtn.classList.add("playing");
    })
    .catch(() => {
      // Browser blocked autoplay; wait for another interaction.
    });
}

window.addEventListener("load", () => {
  startWeddingMusic();
});

["click", "touchstart", "scroll", "keydown"].forEach(event => {
  document.addEventListener(event, startWeddingMusic, {
    once: true,
    passive: true
  });
});
