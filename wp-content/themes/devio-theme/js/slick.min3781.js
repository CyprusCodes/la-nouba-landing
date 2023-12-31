jQuery(function () {
  var n = new LazyLoad();
  0 < $(".slick__zones").length &&
    ($(".slick__zones").on("init", function (e, s, i, o) {
      n.update();
    }),
    $(".slick__zones").slick({
      lazyLoad: "progressive",
      infinite: !0,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: !0,
      autoplaySpeed: 2e3,
      prevArrow:
        '<span class="slick__button"><i class="fa fa-fw fa-chevron-left"></i></span>',
      nextArrow:
        '<span class="slick__button"><i class="fa fa-fw fa-chevron-right"></i></span>',
      pauseOnHover: !1,
      arrows: !1,
      fade: !0,
      rows: 0,
      dots: !1,
      responsive: [
        { breakpoint: 800, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        {
          breakpoint: 450,
          settings: { slidesToShow: 1, slidesToScroll: 1, autoplay: !0 },
        },
      ],
    }),
    $(".slick__zones").on("afterChange", function (e, s, i, o) {
      n.update();
    })),
    0 < $(".slick__unique").length &&
      ($(".slick__unique").on("init", function (e, s) {
        $(this).find(".slick-slide.slick-current");
        $("#home_section_3")
          .find(".zone__title")
          .find("h4")
          .html($(this).find(".slick-slide.slick-current").attr("data-zone")),
          $("#home_section_3")
            .find(".zone__content")
            .find("h4")
            .html(
              $(this).find(".slick-slide.slick-current").attr("data-title")
            ),
          $("#home_section_3")
            .find(".zone__content")
            .find("span")
            .html(
              $(this).find(".slick-slide.slick-current").attr("data-title") +
                " Manager"
            ),
          $("#home_section_3")
            .find(".zone__content")
            .find(".image")
            .find("img")
            .attr(
              "src",
              $(this).find(".slick-slide.slick-current").attr("data-image")
            );
      }),
      $(".slick__unique").slick({
        lazyLoad: "progressive",
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        prevArrow:
          '<span class="slick__button"><i class="fa fa-fw fa-chevron-left"></i></span>',
        nextArrow:
          '<span class="slick__button"><i class="fa fa-fw fa-chevron-right"></i></span>',
        pauseOnHover: !0,
        arrows: !0,
        fade: !0,
        rows: 0,
        dots: !0,
        responsive: [
          { breakpoint: 800, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          {
            breakpoint: 450,
            settings: { slidesToShow: 1, slidesToScroll: 1, autoplay: !0 },
          },
        ],
      }),
      $(".slick__unique").on("beforeChange", function (e, s, i, o) {
        n.update(),
          $("#home_section_3")
            .find(".zone__title")
            .animate({ opacity: 0, bottom: "-90px" }, 50),
          $("#home_section_3")
            .find(".zone__content")
            .animate({ opacity: 0, right: "-120px" }, 50);
      }),
      $(".slick__unique").on("afterChange", function (e, s, i, o) {
        $("#home_section_3")
          .find(".zone__title")
          .find("h4")
          .html($(s.$slides.get(i)).attr("data-zone")),
          $("#home_section_3")
            .find(".zone__title")
            .animate({ opacity: 1, bottom: "-50px" }, 50),
          $("#home_section_3")
            .find(".zone__content")
            .find("h4")
            .html($(s.$slides.get(i)).attr("data-title")),
          $("#home_section_3")
            .find(".zone__content")
            .find("span")
            .html($(s.$slides.get(i)).attr("data-zone") + " Manager"),
          $("#home_section_3")
            .find(".zone__content")
            .find(".image")
            .find("img")
            .attr("src", $(s.$slides.get(i)).attr("data-image")),
          $("#home_section_3")
            .find(".zone__content")
            .animate({ opacity: 1, right: "-80px" }, 50);
      })),
    0 < $(".slick__gallery").length &&
      ($(".slick__gallery").on("init", function (e, s, i, o) {
        n.update();
      }),
      $(".slick__gallery").slick({
        lazyLoad: "progressive",
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        prevArrow:
          '<span class="slick__button"><i class="fa fa-fw fa-chevron-left"></i></span>',
        nextArrow:
          '<span class="slick__button"><i class="fa fa-fw fa-chevron-right"></i></span>',
        pauseOnHover: !1,
        arrows: !1,
        fade: !0,
        rows: 2,
        slidesPerRow: 4,
        dots: !0,
        responsive: [
          { breakpoint: 800, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: !0,
              rows: 4,
              slidesPerRow: 1,
            },
          },
        ],
      }),
      $(".slick__gallery").on("beforeChange", function (e, s, i, o) {
        n.update();
      })),
    0 < $(".slick__manager").length &&
      $(".slick__manager").slick({
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        prevArrow: $(".slick__button.prev"),
        nextArrow: $(".slick__button.next"),
        pauseOnHover: !0,
        arrows: !0,
        fade: !0,
        rows: 0,
        dots: !1,
        responsive: [
          { breakpoint: 800, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          {
            breakpoint: 450,
            settings: { slidesToShow: 1, slidesToScroll: 1, autoplay: !0 },
          },
        ],
      }),
    0 < $(".slick__infinite").length &&
      $(".slick__infinite").slick({
        speed: 5e3,
        autoplay: !0,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: !0,
        arrows: !1,
        dots: !1,
        swipeToSlide: !0,
        centerMode: !0,
        focusOnSelect: !0,
        rows: !1,
        responsive: [
          { breakpoint: 750, settings: { slidesToShow: 1 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      });
}),
  $(window).on("load", function () {
    $(".slick__unique").slick("refresh"),
      $(".slick__gallery").slick("refresh"),
      $(".slick__infinite").slick("refresh"),
      $(".slick__manager").slick("refresh"),
      $(".slick__zones").slick("refresh");
  });
