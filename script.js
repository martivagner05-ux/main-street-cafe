// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Opening hours, in Clanton (US Central) time. Minutes since midnight.
const HOURS = {
  0: [11 * 60, 14 * 60],   // Sunday
  1: [5 * 60 + 30, 14 * 60],
  2: [5 * 60 + 30, 14 * 60],
  3: [5 * 60 + 30, 14 * 60],
  4: [5 * 60 + 30, 14 * 60],
  5: [5 * 60 + 30, 14 * 60],
  6: null,                  // Saturday closed
};

function clantonNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type).value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

const { day, minutes } = clantonNow();

const todayRow = document.querySelector(`.hours tr[data-day="${day}"]`);
if (todayRow) todayRow.classList.add("is-today");

const status = document.getElementById("open-status");
const tag = status.parentElement;
const today = HOURS[day];

if (today && minutes >= today[0] && minutes < today[1]) {
  status.textContent = "Open now · until 2pm";
} else {
  tag.classList.add("is-closed");
  status.textContent = today && minutes < today[0]
    ? `Opens today at ${day === 0 ? "11am" : "5:30am"}`
    : "Closed now · see hours below";
}

document.getElementById("year").textContent = new Date().getFullYear();

// Latest Facebook posts (Elfsight widget). Paste the widget ID from the
// Elfsight install code here, e.g. "1a2b3c4d-....". Empty = show the fallback card.
const ELFSIGHT_WIDGET_ID = "";

if (ELFSIGHT_WIDGET_ID) {
  const feed = document.getElementById("fb-feed");
  feed.classList.add("has-widget");
  feed.innerHTML = `<div class="elfsight-app-${ELFSIGHT_WIDGET_ID}" data-elfsight-app-lazy></div>`;
  const s = document.createElement("script");
  s.src = "https://elfsightcdn.com/platform.js";
  s.async = true;
  document.body.appendChild(s);
}
