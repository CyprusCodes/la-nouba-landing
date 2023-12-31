jQuery(function () {
  0 < $('a[href*="#"]').length &&
    $('a[href*="#"]')
      .not('[href="#"]')
      .on("click", function (e) {
        var a;
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname &&
          (a = (a = $(this.hash)).length
            ? a
            : $("[name=" + this.hash.slice(1) + "]")).length &&
          (e.preventDefault(),
          $("html, body").animate(
            { scrollTop: a.offset().top - 40 },
            500,
            function () {
              var e = $(a);
              if ((e.on("focus"), e.is(":focus"))) return !1;
              e.on("focus");
            }
          ));
      });
  new LazyLoad();
  $("#btn-menu").on("click", function () {
    $("#menu").hasClass("show")
      ? ($("#btn-menu .menu-icon")
          .addClass("is-closed")
          .removeClass("is-opened"),
        $("body").css("overflow-y", "scroll"),
        $("#backdrop").removeClass("active"),
        $("#menu").animate({ right: "-100%", opacity: 0 }, 200, function () {
          $("#menu").removeClass("show");
        }))
      : ($("#cart-menu").hasClass("active") &&
          $("#cart-menu")
            .animate({ right: "-520px", opacity: 0 }, 200)
            .removeClass("active"),
        $("#btn-menu .menu-icon")
          .removeClass("is-closed")
          .addClass("is-opened"),
        $("body").css("overflow-y", "hidden"),
        $("#backdrop").addClass("active"),
        $("#menu").addClass("show").animate({ right: 0, opacity: 1 }, 400));
  }),
    $('#menu a[target="_blank"]').click(function () {
      $("#menu").hasClass("show") &&
        ($("#btn-menu .menu-icon")
          .addClass("is-closed")
          .removeClass("is-opened"),
        $("body").css("overflow-y", "scroll"),
        $("#backdrop").removeClass("active"),
        $("#menu").animate({ right: "-100%", opacity: 0 }, 200, function () {
          $(this).removeClass("show");
        }));
    }),
    $('#menu a[href*="#"]').click(function () {
      $("#btn-menu .menu-icon").hasClass("is-opened") &&
        $("#btn-menu .menu-icon")
          .addClass("is-closed")
          .removeClass("is-opened"),
        $("#cart-menu").animate({ right: "-520px", opacity: 0 }, 200),
        $("body").css("overflow-y", "scroll"),
        $("#backdrop").removeClass("active"),
        $("#menu").animate({ right: "-100%", opacity: 0 }, 200),
        $(".navbar.navbar__sticky").css("filter", "none");
    }),
    $("#backdrop").on("click", function () {
      $("#btn-menu .menu-icon").hasClass("is-opened") &&
        $("#btn-menu .menu-icon")
          .addClass("is-closed")
          .removeClass("is-opened"),
        $("#cart-menu").animate({ right: "-520px", opacity: 0 }, 200),
        $("body").css("overflow-y", "scroll"),
        $("#backdrop").removeClass("active"),
        $("#menu").animate({ right: "-100%", opacity: 0 }, 200),
        $(".navbar.navbar__sticky").css("filter", "none");
    });
}),
  $(window).on("load", function () {});
