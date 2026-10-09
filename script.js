/* =========================================================
   AYUSHI & GAURAV
   WEDDING CONFIGURATION
   ========================================================= */

   const WEDDING = {
    couple: "Ayushi & Gaurav",
  
    weddingDate: "2026-11-19T12:00:00+05:30",
  
    whatsapp: "919260903124",
  
    events: [
  
      // =====================================================
      // MEHENDI - CURRENTLY DISABLED
      // =====================================================
  
      /*
      {
        name: "Mehendi",
        date: "Date to be announced",
        venue: "Venue to be announced",
        time: "Evening",
        image: "assets/couple-09.png",
        map: "https://www.google.com/maps"
      },
      */
  
      // =====================================================
      // HALDI
      // =====================================================
  
      {
        name: "Haldi Ceremony",
  
        date: "19th November",
  
        venue: "Status Club",
  
        time: "12 noon onwards",
  
        image: "assets/couple-02.png",
  
        map:
          "https://www.google.com/maps/place/Status+Club/@27.4235785,80.1186076,17z/data=!3m1!4b1!4m9!3m8!1s0x399ef9000cf3ea03:0x30072453d2b19f5d!5m2!4m1!1i2!8m2!3d27.4235785!4d80.1211825!16s%2Fg%2F11lw32_5lh?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D"
      },
  
  
      // =====================================================
      // COCKTAIL - CURRENTLY DISABLED
      // =====================================================
  
      /*
      {
        name: "Cocktail Party",
  
        date: "19th November",
  
        venue: "Status Club",
  
        time: "8 PM onwards",
  
        image: "assets/couple-17.png",
  
        map:
          "https://www.google.com/maps/place/Status+Club/@27.4235785,80.1186076,17z/data=!3m1!4b1!4m9!3m8!1s0x399ef9000cf3ea03:0x30072453d2b19f5d!5m2!4m1!1i2!8m2!3d27.4235785!4d80.1211825!16s%2Fg%2F11lw32_5lh?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D"
      },
      */
  
  
      // =====================================================
      // WEDDING
      // =====================================================
  
      {
        name: "Wedding",
  
        date: "20th November",
  
        venue: "R.R. Marriage Lawn",
  
        time: "8 PM onwards",
  
        image: "assets/couple-18.png",
  
        map:
          "https://www.google.com/maps/place/R.R.+Inter+College,+Hardoi/@27.3948083,80.1332981,17z/data=!3m1!4b1!4m6!3m5!1s0x399ef40000000001:0x7cbe677d230c316d!8m2!3d27.3948083!4d80.135873!16s%2Fg%2F11c5rt4mj_?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D"
      }
  
    ]
  };
  
  
  /* =========================================================
     DOM ELEMENTS
     ========================================================= */
  
  const eventList =
    document.querySelector("#eventList");
  
  const modal =
    document.querySelector("#routeModal");
  
  const weddingMusic =
    document.querySelector("#weddingMusic");
  
  const musicBtn =
    document.querySelector("#musicBtn");
  
  const invitationOpening =
    document.querySelector("#invitationOpening");
  
  const enterInvitation =
    document.querySelector("#enterInvitation");
  
  
  /* =========================================================
     EVENT CARDS
     ========================================================= */
  
  if (eventList) {
  
    eventList.innerHTML =
      WEDDING.events.map((event, index) => `
  
        <article class="event-board reveal">
  
          <div class="event-photo">
  
            <img
              src="${event.image}"
              alt="${event.name}"
              loading="lazy"
            >
  
          </div>
  
  
          <div class="event-copy">
  
            <span class="event-tag">
              Chapter ${String(index + 1).padStart(2, "0")}
              · The Celebration
            </span>
  
            <h3>
              ${event.name}
            </h3>
  
            <div class="event-date">
              ${event.date}
            </div>
  
            <div class="event-venue">
              ${event.venue}
              <br>
              ${event.time}
            </div>
  
            <button
              class="route-btn"
              data-event="${index}"
              type="button"
            >
              See the route →
            </button>
  
          </div>
  
        </article>
  
      `).join("");
  
  }
  
  
  /* =========================================================
     ROUTE MODAL
     ========================================================= */
  
  function openRoute(event) {
  
    if (!modal) return;
  
    const routeTitle =
      document.querySelector("#routeTitle");
  
    const routeMeta =
      document.querySelector("#routeMeta");
  
    const routeMapLink =
      document.querySelector("#routeMapLink");
  
    const routeEyebrow =
      document.querySelector("#routeEyebrow");
  
  
    if (routeTitle) {
      routeTitle.textContent =
        event.venue;
    }
  
    if (routeMeta) {
      routeMeta.textContent =
        `${event.name} · ${event.date} · ${event.time}`;
    }
  
    if (routeMapLink) {
      routeMapLink.href =
        event.map;
    }
  
    if (routeEyebrow) {
      routeEyebrow.textContent =
        `Your destination · ${event.name}`;
    }
  
  
    modal.classList.add("open");
  
    modal.setAttribute(
      "aria-hidden",
      "false"
    );
  
    document.body.style.overflow =
      "hidden";
  }
  
  
  function closeRoute() {
  
    if (!modal) return;
  
    modal.classList.remove("open");
  
    modal.setAttribute(
      "aria-hidden",
      "true"
    );
  
    document.body.style.overflow =
      "";
  }
  
  
  /* =========================================================
     CLICK EVENTS
     ========================================================= */
  
  document.addEventListener("click", e => {
  
    const eventButton =
      e.target.closest("[data-event]");
  
    if (eventButton) {
  
      const eventIndex =
        Number(eventButton.dataset.event);
  
      openRoute(
        WEDDING.events[eventIndex]
      );
  
      return;
    }
  
  
    if (
      e.target.matches("[data-close-route]") ||
      e.target.closest("[data-close-route]")
    ) {
  
      closeRoute();
  
    }
  
  });
  
  
  /* =========================================================
     ESCAPE KEY FOR MODAL
     ========================================================= */
  
  document.addEventListener("keydown", e => {
  
    if (e.key === "Escape") {
      closeRoute();
    }
  
  });
  
  
  /* =========================================================
     SCROLL REVEAL
     ========================================================= */
  
  const observer =
    new IntersectionObserver(
      entries => {
  
        entries.forEach(entry => {
  
          if (entry.isIntersecting) {
  
            entry.target.classList.add(
              "visible"
            );
  
            observer.unobserve(
              entry.target
            );
  
          }
  
        });
  
      },
      {
        threshold:0.12
      }
    );
  
  
  document
    .querySelectorAll(".reveal")
    .forEach(el => {
  
      observer.observe(el);
  
    });
  
  
  /* =========================================================
     PARALLAX EFFECT
     ========================================================= */
  
  window.addEventListener(
    "mousemove",
    e => {
  
      const x =
        (e.clientX / innerWidth - 0.5) * 2;
  
      const y =
        (e.clientY / innerHeight - 0.5) * 2;
  
  
      document
        .querySelectorAll(".parallax")
        .forEach(el => {
  
          el.style.transform =
            `translate3d(
              ${x * -12}px,
              ${y * -8}px,
              0
            )`;
  
        });
  
    }
  );
  
  
  /* =========================================================
     FALLING PETALS
     ========================================================= */
  
  function petal() {
  
    const petals =
      document.querySelector("#petals");
  
    if (!petals) return;
  
  
    const el =
      document.createElement("span");
  
    el.className =
      "petal";
  
  
    el.style.left =
      Math.random() * 100 + "vw";
  
  
    el.style.setProperty(
      "--drift",
      (Math.random() * 180 - 90) + "px"
    );
  
  
    el.style.animationDuration =
      (6 + Math.random() * 7) + "s";
  
  
    el.style.transform =
      `rotate(${Math.random() * 360}deg)`;
  
  
    petals.appendChild(el);
  
  
    setTimeout(() => {
  
      el.remove();
  
    }, 14000);
  
  }
  
  
  setInterval(
    petal,
    850
  );
  
  
  /* =========================================================
     COUNTDOWN
     ========================================================= */
  
  function tick() {
  
    const end =
      new Date(
        WEDDING.weddingDate
      ).getTime();
  
  
    const diff =
      Math.max(
        0,
        end - Date.now()
      );
  
  
    const sec =
      Math.floor(diff / 1000);
  
  
    const d =
      Math.floor(sec / 86400);
  
  
    const h =
      Math.floor(
        (sec % 86400) / 3600
      );
  
  
    const m =
      Math.floor(
        (sec % 3600) / 60
      );
  
  
    const s =
      sec % 60;
  
  
    const days =
      document.querySelector("#days");
  
    const hours =
      document.querySelector("#hours");
  
    const minutes =
      document.querySelector("#minutes");
  
    const seconds =
      document.querySelector("#seconds");
  
  
    if (days) {
      days.textContent =
        String(d).padStart(2, "0");
    }
  
    if (hours) {
      hours.textContent =
        String(h).padStart(2, "0");
    }
  
    if (minutes) {
      minutes.textContent =
        String(m).padStart(2, "0");
    }
  
    if (seconds) {
      seconds.textContent =
        String(s).padStart(2, "0");
    }
  
  }
  
  
  tick();
  
  setInterval(
    tick,
    1000
  );
  
  
  /* =========================================================
     WHATSAPP RSVP
     ========================================================= */
  
  const rsvp =
    document.querySelector("#rsvpBtn");
  
  
  if (rsvp) {
  
    if (WEDDING.whatsapp) {
  
      rsvp.href =
        `https://wa.me/${WEDDING.whatsapp}?text=${
          encodeURIComponent(
            `Hi! We'd love to RSVP for Ayushi & Gaurav's wedding.`
          )
        }`;
  
    } else {
  
      rsvp.addEventListener(
        "click",
        e => {
  
          e.preventDefault();
  
          alert(
            "Add the WhatsApp number in script.js to activate RSVP."
          );
  
        }
      );
  
    }
  
  }
  
  
  /* =========================================================
     WEDDING MUSIC
     ========================================================= */
  
  let musicStarted = false;
  
  
  /*
     This function starts the music.
  
     IMPORTANT:
     The opening screen provides the user's
     actual interaction, which makes music
     playback much more reliable on mobile.
  */
  
  function startWeddingMusic() {
  
    if (
      !weddingMusic ||
      musicStarted
    ) {
      return;
    }
  
  
    weddingMusic.volume = 0.45;
  
  
    const playPromise =
      weddingMusic.play();
  
  
    if (
      playPromise !== undefined
    ) {
  
      playPromise
        .then(() => {
  
          musicStarted = true;
  
  
          if (musicBtn) {
  
            musicBtn.classList.add(
              "playing"
            );
  
            musicBtn.setAttribute(
              "aria-label",
              "Wedding music playing"
            );
  
          }
  
        })
        .catch(() => {
  
          /*
            Browser blocked playback.
  
            The opening button remains the
            next reliable user interaction.
          */
  
        });
  
    }
  
  }
  
  
  /* =========================================================
     OPENING SCREEN
     ========================================================= */
  
  function enterWedding() {
  
    /*
       Start music FIRST while the click is
       still considered a user interaction.
    */
  
    startWeddingMusic();
  
  
    /*
       Hide cinematic opening screen.
    */
  
    if (invitationOpening) {
  
      invitationOpening.classList.add(
        "hide"
      );
  
    }
  
  
    /*
       Restore page scrolling.
    */
  
    document.body.style.overflow =
      "";
  
  
    /*
       Remove the opening screen from
       keyboard focus after animation.
    */
  
    setTimeout(() => {
  
      if (invitationOpening) {
  
        invitationOpening.setAttribute(
          "aria-hidden",
          "true"
        );
  
      }
  
    }, 1300);
  
  }
  
  
  /* =========================================================
     ENTER INVITATION BUTTON
     ========================================================= */
  
  if (enterInvitation) {
  
    enterInvitation.addEventListener(
      "click",
      enterWedding
    );
  
  }
  
  
  /* =========================================================
     PREVENT PAGE SCROLL BEFORE ENTERING
     ========================================================= */
  
  if (invitationOpening) {
  
    document.body.style.overflow =
      "hidden";
  
  }
  
  
  /* =========================================================
     FALLBACK MUSIC START
     ========================================================= */
  
  /*
     If a browser somehow allows autoplay,
     try once after the page loads.
  
     If it blocks it, nothing breaks.
  */
  
  window.addEventListener(
    "load",
    () => {
  
      startWeddingMusic();
  
    }
  );