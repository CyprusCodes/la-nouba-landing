jQuery(function () {
  var windowWidth = window.innerWidth;
  var i, a, e;
  0 < $("#intro").length &&
    ($("#goToClub").on("click", function () {
      sessionStorage.setItem("intro", "true");
    }),
    $(window).width() < 576
      ? ($("#intro .bottom .blurbs .blurb").on("mouseenter", function () {
          $(this).hasClass("left")
            ? ($(this).css({ height: "85%", "z-index": 10 }).addClass("active"),
              $(this)
                .children(".overlay__back")
                .css({ opacity: 0, display: "none" }),
              $(this)
                .next()
                .css({ height: "15%", "z-index": 9 })
                .removeClass("active"),
              $(this)
                .next()
                .children(".overlay__back")
                .css({ opacity: 1, display: "block" }),
              $("#intro .top").css("top", "85%"))
            : $(this).hasClass("right") &&
              ($(this).css({ height: "85%", "z-index": 10 }).addClass("active"),
              $(this)
                .children(".overlay__back")
                .css({ opacity: 0, display: "none" }),
              $(this)
                .prev()
                .css({ height: "15%", "z-index": 9 })
                .removeClass("active"),
              $(this)
                .prev()
                .children(".overlay__back")
                .css({ opacity: 1, display: "block" }),
              $("#intro .top").css("top", "15%"));
        }),
        $("#intro .bottom .blurbs .blurb").on("mouseleave", function () {
          $(this).hasClass("left")
            ? ($(this).css("height", "50%").removeClass("active"),
              $(this).children(".overlay__back").css({ opacity: 0 }),
              $(this).next().css("height", "50%").removeClass("active"),
              $(this).next().children(".overlay__back").css({ opacity: 0 }),
              $("#intro .top").css("top", "50%"))
            : $(this).hasClass("right") &&
              ($(this).css("height", "50%").removeClass("active"),
              $(this).children(".overlay__back").css({ opacity: 0 }),
              $(this).prev().css("height", "50%").removeClass("active"),
              $(this).prev().children(".overlay__back").css({ opacity: 0 }),
              $("#intro .top").css("top", "50%"));
        }))
      : ($("#intro .bottom .blurbs .blurb").on("mouseenter", function () {
          $(this).hasClass("left")
            ? ($(this).css("width", "55%"), $(this).next().css("width", "45%"))
            : $(this).hasClass("right") &&
              ($(this).css("width", "55%"), $(this).prev().css("width", "45%"));
        }),
        $("#intro .bottom .blurbs .blurb").on("mouseleave", function () {
          $(this).hasClass("left")
            ? ($(this).css("width", "50%"), $(this).next().css("width", "50%"))
            : $(this).hasClass("right") &&
              ($(this).css("width", "50%"), $(this).prev().css("width", "50%"));
        }))),
    $('a:not([href*="#"]):not([data-lity])').on("click", function (e) {
      var t = $(this).attr("href");
      $(this).attr("target")
        ? window.open(t, "_blank")
        : (e.preventDefault(),
          setTimeout(function () {
            window.location.href = t;
          }, 500));
    }),
    0 < $("body.home").length &&
      (1280 < $(window).width() &&
        ((e = document.getElementsByClassName("home_section_1_animate")),
        gsap.to(e[0], {
          scrollTrigger: {
            trigger: e[0].closest("section"),
            start: "0% 0%",
            end: "50% 20%",
            scrub: 1,
          },
          y: "25%",
          duration: 3,
        })),
      (e = document.getElementsByClassName("home_section_1_title_left")),
      windowWidth >= 500
        ? gsap.to(e[0], {
            scrollTrigger: {
              trigger: e[0].closest("section"),
              start: "-20% 50%",
              end: "10% 10%",
              scrub: 1,
            },
            x: "40%",
            duration: 3,
          })
        : gsap.to(e[0], {
            scrollTrigger: {
              trigger: e[0].closest("section"),
              start: "-20% 50%",
              end: "10% 10%",
              scrub: 1,
            },
            x: -20,
            duration: 1,
          }),
      (e = document.getElementsByClassName("home_section_1_title_right")),
      console.log(windowWidth),
      windowWidth >= 500
        ? gsap.to(e[0], {
            scrollTrigger: {
              trigger: e[0].closest("section"),
              start: "-20% 50%",
              end: "10% 10%",
              scrub: 1,
            },
            x: "-40%",
            duration: 3,
          })
        : gsap.to(e[0], {
            scrollTrigger: {
              trigger: e[0].closest("section"),
              start: "-20% 50%",
              end: "10% 10%",
              scrub: 1,
            },
            x: -10,
            duration: 1,
          }),
      // gsap.to(".slick__unique .zone .zone__header", {
      //   scrollTrigger: {
      //     trigger: ".slick__unique",
      //     start: "top 80%",
      //     end: "bottom 20%",
      //     scrub: 3,
      //   },
      //   scale: 1.2,
      //   duration: 3,
      //   ease: "none",
      // }),
      "undefined" != typeof eventCountdown
        ? ((i = new Date(eventCountdown + " 22:00:00").getTime()),
          (a = setInterval(function () {
            var e = new Date().getTime(),
              e = i - e,
              t = Math.floor(e / 864e5),
              o = Math.floor((e % 864e5) / 36e5),
              s = Math.floor((e % 36e5) / 6e4),
              n = Math.floor((e % 6e4) / 1e3);
            (document.getElementById("countdown").innerHTML =
              t + "j " + o + "h " + s + "m " + n + "s "),
              e < 0 &&
                (clearInterval(a),
                (document.getElementById("countdown").innerHTML = "EXPIRED"));
          }, 1e3)))
        : (document.getElementById("countdown").innerHTML = "Aucun événement")),
    0 < $(".form").length &&
      ((e = document.querySelector("#wpcf7-f491-o3.wpcf7")) &&
        e.addEventListener(
          "wpcf7mailsent",
          function (e) {
            $("#reservationModal .step_3").animate({ opacity: 0 }, 200),
              $("#reservationModal .step_3").delay(200).css("display", "none"),
              $("#reservationModal .step_4").delay(200).css("display", "flex"),
              $("#reservationModal .step_4")
                .delay(200)
                .animate({ opacity: 1 }, 200);
          },
          !1
        ),
      (e = document.querySelector("#wpcf7-f492-o4.wpcf7")) &&
        e.addEventListener(
          "wpcf7mailsent",
          function (e) {
            $("#reservationModal .step_3").animate({ opacity: 0 }, 200),
              $("#reservationModal .step_3").delay(200).css("display", "none"),
              $("#reservationModal .step_4").delay(200).css("display", "flex"),
              $("#reservationModal .step_4")
                .delay(200)
                .animate({ opacity: 1 }, 200);
          },
          !1
        ),
      (e = document.querySelector("#wpcf7-f490-o2.wpcf7")) &&
        e.addEventListener(
          "wpcf7mailsent",
          function (e) {
            $("#reservationModal .step_3").animate({ opacity: 0 }, 200),
              $("#reservationModal .step_3").delay(200).css("display", "none"),
              $("#reservationModal .step_4").delay(200).css("display", "flex"),
              $("#reservationModal .step_4")
                .delay(200)
                .animate({ opacity: 1 }, 200);
          },
          !1
        ),
      (e = document.querySelector("#wpcf7-f6-o1.wpcf7")) &&
        e.addEventListener(
          "wpcf7mailsent",
          function (e) {
            $("#reservationModal .step_3").animate({ opacity: 0 }, 200),
              $("#reservationModal .step_3").delay(200).css("display", "none"),
              $("#reservationModal .step_4").delay(200).css("display", "flex"),
              $("#reservationModal .step_4")
                .delay(200)
                .animate({ opacity: 1 }, 200);
          },
          !1
        )),
    400 < $(window).scrollTop() &&
      $("#btn_top").stop().css("display", "flex").animate({ opacity: 1 }, 200),
    $(window).on("scroll", function () {
      400 < $(window).scrollTop()
        ? $("#btn_top")
            .stop()
            .css("display", "flex")
            .animate({ opacity: 1 }, 200)
        : $("#btn_top")
            .stop()
            .animate({ opacity: 0 }, 200, function () {
              $("#btn_top").css("display", "none");
            });
    }),
    50 < $(window).scrollTop() && $("#badge-reservation").css("top", "80px"),
    $(window).on("scroll", function () {
      50 < $(window).scrollTop()
        ? $("#badge-reservation").animate({ top: "80px" }, 10)
        : $("#badge-reservation").animate({ top: "160px" }, 10);
    }),
    0 < $("#reservationModal").length &&
      ("undefined" == typeof eventCountdown2
        ? $("#reservationModal .step_1").html(
            '<div class="section__header"><div class="title"><h4>Aucun événement</br>disponible</h4></div></div>'
          )
        : ($("#reservationModal .form form.wpcf7-form").each(function () {
            var o = $(this),
              e = navigator.language || navigator.userLanguage;
            console.log(e);
            var t = o.find('select[name="reservation-date"]').find("option");
            (t[0].innerHTML =
              "fr-FR" === e ||
              "fr-BE" === e ||
              "fr" === e ||
              "fr-CA" === e ||
              "fr-CH" === e ||
              "fr-LU" === e
                ? "Sélectionnez un événement"
                : "nl" === e || "nl-BE" === e
                ? "Kies een evenement"
                : "Select an event"),
              ((t = o
                .find('select[name="reservation-users"]')
                .find("option"))[0].innerHTML =
                "fr-FR" === e ||
                "fr-BE" === e ||
                "fr" === e ||
                "fr-CA" === e ||
                "fr-CH" === e ||
                "fr-LU" === e
                  ? "Nombre de personnes"
                  : "nl" === e || "nl-BE" === e
                  ? "Aantal personen"
                  : "Number of people"),
              $.each(eventCountdown2, function (e, t) {
                o.find('select[name="reservation-date"]').append(
                  '<option value="' + t + '">' + t + "</option>"
                );
              });
          }),
          $("#reservationModal .step_1 .blurb .zone__header").on(
            "click",
            function () {
              $(this).parents(".step_1").animate({ opacity: 0 }, 200),
                $(this).parents(".step_1").delay(200).css("display", "none"),
                ("Dancefloor" === $(this).attr("data-zone")
                  ? ($("#reservationModal .step_2")
                      .delay(200)
                      .css("display", "block"),
                    $("#reservationModal .step_2"))
                  : ($("#reservationModal .step_3")
                      .delay(200)
                      .css("display", "block"),
                    "Floor" === $(this).attr("data-zone")
                      ? $("#form_floor").css("display", "block")
                      : "VIP" === $(this).attr("data-zone") &&
                        $("#form_vip").css("display", "block"),
                    $("#reservationModal .step_3"))
                )
                  .delay(200)
                  .animate({ opacity: 1 }, 200);
            }
          ),
          $("#reservationModal .step_2 .blurb .zone__header").on(
            "click",
            function () {
              $(this).parents(".step_2").animate({ opacity: 0 }, 200),
                $(this).parents(".step_2").delay(200).css("display", "none"),
                "Abdess" === $(this).attr("data-user")
                  ? $("#form_adbess").css("display", "block")
                  : "Jon" === $(this).attr("data-user") &&
                    $("#form_john").css("display", "block"),
                $("#reservationModal .step_3")
                  .delay(200)
                  .css("display", "block"),
                $("#reservationModal .step_3")
                  .delay(200)
                  .animate({ opacity: 1 }, 200);
            }
          )),
      $("#reservationModal").on("hidden.bs.modal", function () {
        $("#reservationModal .step_1").css({ display: "block", opacity: 1 }),
          $("#reservationModal .step_2").css({ display: "none", opacity: 0 }),
          $("#reservationModal .step_3").css({ display: "none", opacity: 0 }),
          $("#reservationModal .step_4").css({ display: "none", opacity: 0 }),
          $("#form_floor").css("display", "none"),
          $("#form_vip").css("display", "none"),
          $("#form_adbess").css("display", "none"),
          $("#form_john").css("display", "none");
      }));
}),
  $(window).on("load", function () {
    $("#loader").addClass("bottomToTop"),
      780 < $(window).width() &&
        {
          delay: 8,
          _x: 0,
          _y: 0,
          endX: window.innerWidth / 2,
          endY: window.innerHeight / 2,
          cursorVisible: !0,
          cursorEnlarged: !1,
          $dot: document.querySelector(".cursor-dot"),
          $outline: document.querySelector(".cursor-dot-outline"),
          init: function () {
            (this.dotSize = this.$dot.offsetWidth),
              (this.outlineSize = this.$outline.offsetWidth),
              this.setupEventListeners(),
              this.animateDotOutline();
          },
          setupEventListeners: function () {
            var t = this;
            document.querySelectorAll("a").forEach(function (e) {
              e.addEventListener("mouseover", function () {
                (t.cursorEnlarged = !0), t.toggleCursorSize();
              }),
                e.addEventListener("mouseout", function () {
                  (t.cursorEnlarged = !1), t.toggleCursorSize();
                });
            }),
              document
                .querySelectorAll("ul#ambiance-list li")
                .forEach(function (e) {
                  e.addEventListener("mouseover", function () {
                    (t.cursorEnlarged = !0), t.toggleCursorSize();
                  }),
                    e.addEventListener("mouseout", function () {
                      (t.cursorEnlarged = !1), t.toggleCursorSize();
                    });
                }),
              document.querySelectorAll("button").forEach(function (e) {
                e.addEventListener("mouseover", function () {
                  (t.cursorEnlarged = !0), t.toggleCursorSize();
                }),
                  e.addEventListener("mouseout", function () {
                    (t.cursorEnlarged = !1), t.toggleCursorSize();
                  });
              }),
              document.addEventListener("mousedown", function () {
                (t.cursorEnlarged = !0), t.toggleCursorSize();
              }),
              document.addEventListener("mouseup", function () {
                (t.cursorEnlarged = !1), t.toggleCursorSize();
              }),
              document.addEventListener("mousemove", function (e) {
                (t.cursorVisible = !0),
                  t.toggleCursorVisibility(),
                  (t.endX = e.pageX),
                  (t.endY = e.pageY),
                  (t.$dot.style.top = t.endY + "px"),
                  (t.$dot.style.left = t.endX + "px");
              }),
              document.addEventListener("mouseenter", function (e) {
                (t.cursorVisible = !0),
                  t.toggleCursorVisibility(),
                  (t.$dot.style.opacity = 1),
                  (t.$outline.style.opacity = 1);
              }),
              document.addEventListener("mouseleave", function (e) {
                (t.cursorVisible = !0),
                  t.toggleCursorVisibility(),
                  (t.$dot.style.opacity = 0),
                  (t.$outline.style.opacity = 0);
              });
          },
          animateDotOutline: function () {
            var e = this;
            (e._x += (e.endX - e._x) / e.delay),
              (e._y += (e.endY - e._y) / e.delay),
              (e.$outline.style.top = e._y + "px"),
              (e.$outline.style.left = e._x + "px"),
              requestAnimationFrame(this.animateDotOutline.bind(e));
          },
          toggleCursorSize: function () {
            var e = this;
            e.cursorEnlarged
              ? ((e.$dot.style.transform = "translate(-50%, -50%) scale(0.75)"),
                (e.$outline.style.transform = "translate(-50%, -50%) scale(2)"))
              : ((e.$dot.style.transform = "translate(-50%, -50%) scale(1)"),
                (e.$outline.style.transform =
                  "translate(-50%, -50%) scale(1)"));
          },
          toggleCursorVisibility: function () {
            var e = this;
            e.cursorVisible
              ? ((e.$dot.style.opacity = 1), (e.$outline.style.opacity = 1))
              : ((e.$dot.style.opacity = 0), (e.$outline.style.opacity = 0));
          },
        }.init();
  });
