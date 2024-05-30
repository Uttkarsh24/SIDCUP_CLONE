let cr = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
  cr.style.left = dets.x + "px";
  cr.style.top = dets.y + "px";
});

let crb = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crb.style.left = dets.x - 240 + "px";
  crb.style.top = dets.y - 240 + "px";
});

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cr.style.scale = 2.5;
    cr.style.border = "1px solid #fff";
    cr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    cr.style.scale = 1;
    cr.style.border = "0px solid #95C11E";
    cr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -24%",
    end: "top -71%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  opacity:0,
  duration: 1,
  // stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});