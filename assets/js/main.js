/* ALGECO ltd. — interactions */
(function () {
  "use strict";

  /* ---- nav: solid background + light/dark state on scroll ---- */
  const nav = document.querySelector(".nav");
  const overDark = nav && nav.classList.contains("over-dark");
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- mobile menu ---- */
  const burger = document.querySelector(".nav__burger");
  const menu = document.querySelector(".mobile-menu");
  if (burger && menu) {
    const toggle = () => {
      const open = menu.classList.toggle("open");
      nav.classList.toggle("menu-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };
    burger.addEventListener("click", toggle);
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        nav.classList.remove("menu-open");
        document.body.style.overflow = "";
      })
    );
  }

  /* ---- scroll reveal ---- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---- animated counters ---- */
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const runCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const dur = 1700;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const val = Math.floor(easeOut(p) * target);
      el.textContent = val.toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(tick);
  };
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          runCount(e.target);
          cio.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

  /* ---- hero slideshow ---- */
  const slides = Array.from(document.querySelectorAll(".hero__slide"));
  const dots = Array.from(document.querySelectorAll(".hero__dots button"));
  if (slides.length > 1) {
    let i = 0;
    let timer;
    const go = (n) => {
      slides[i].classList.remove("active");
      dots[i] && dots[i].classList.remove("active");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("active");
      dots[i] && dots[i].classList.add("active");
    };
    const play = () => (timer = setInterval(() => go(i + 1), 5500));
    dots.forEach((d, n) =>
      d.addEventListener("click", () => {
        clearInterval(timer);
        go(n);
        play();
      })
    );
    play();
  }

  /* ---- contact form (front-end only demo) ---- */
  const form = document.querySelector(".form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = form.parentElement.querySelector(".form__ok");
      if (ok) ok.classList.add("show");
      form.reset();
    });
  }

  /* ---- footer year ---- */
  const y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
