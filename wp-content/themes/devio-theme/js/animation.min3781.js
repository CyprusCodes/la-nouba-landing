jQuery(function () {
  0 < $(".devio__animate").length &&
    gsap.utils.toArray(".devio__animate").forEach((e) => {
      var t = e.getAttribute("data-animate");
      t &&
        ("fade-up" === t
          ? gsap.to(e, {
              scrollTrigger: {
                trigger: e.closest("section"),
                start: "100% 20%",
                end: "20% 100%",
                toggleActions: "play none reverse none",
              },
              duration: 1,
              opacity: 1,
              y: 0,
              transformOrigin: "0% 50% -50",
              ease: Back.easeOut,
              stagger: 0.02,
            })
          : "fade-image" === t
          ? gsap.to(e, {
              scrollTrigger: {
                trigger: e,
                start: "-20% 80%",
                end: "-20% 80%",
                toggleActions: "play none reverse none",
              },
              duration: 1,
              opacity: 1,
              y: 0,
              transformOrigin: "0% 50% -50",
              ease: Back.easeOut,
              stagger: 0.02,
            })
          : "fade-down" === t
          ? gsap.to(e, {
              scrollTrigger: {
                trigger: e.closest("section"),
                start: "20% 60%",
                end: "20% 60%",
                toggleActions: "play none reverse none",
              },
              duration: 1,
              opacity: 1,
              y: 0,
              transformOrigin: "0% 50% -50",
              ease: Back.easeOut,
              stagger: 0.02,
            })
          : ("fade-right" !== t && "fade-left" !== t) ||
            gsap.to(e, {
              scrollTrigger: {
                trigger: e.closest("section"),
                start: "20% 60%",
                end: "20% 60%",
                toggleActions: "play none reverse none",
              },
              duration: 1,
              opacity: 1,
              x: 0,
              transformOrigin: "0% 50% -50",
              ease: Back.easeOut,
              stagger: 0.02,
            }));
    }),
    gsap.utils.toArray(".image.devio__animate").forEach((e) => {
      gsap.to(e, {
        scrollTrigger: {
          trigger: e,
          start: "top 80%",
          end: "bottom 20%",
          endTrigger: "footer",
          scrub: 3,
          toggleClass: "anim",
          toggleActions: "play pause pause pause",
        },
        scale: 1.5,
        duration: 3,
        ease: "none",
      });
    });
});
