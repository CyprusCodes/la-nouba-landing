jQuery(function () {
  var e;
  0 < $(".form").length &&
    (0 < $("select.form-select").length &&
      ((e = navigator.language || navigator.userLanguage),
      ($("select.form-select").find("option")[0].innerHTML =
        "fr-FR" === e ||
        "fr-BE" === e ||
        "fr" === e ||
        "fr-CA" === e ||
        "fr-CH" === e ||
        "fr-LU" === e
          ? "Sélectionnez une option"
          : "nl" === e || "nl-BE" === e
          ? "Kies een optie"
          : "Select an option")),
    0 < $(".radio-group").length &&
      $(".radio-group").each(function (e) {
        $(this)
          .find(".wpcf7-checkbox")
          .children(".wpcf7-list-item")
          .each(function () {
            $(this).find("label input").before('<div class="checkbox"></div>'),
              $(this)
                .find(".wpcf7-list-item-label")
                .on("click", function () {
                  $(this).parents("label").hasClass("active")
                    ? $(this).parents("label").removeClass("active")
                    : $(this).parents("label").addClass("active");
                });
          }),
          $(this)
            .find(".wpcf7-acceptance")
            .children(".wpcf7-list-item")
            .each(function () {
              $(this)
                .find("label input")
                .before(
                  '<div class="checkbox"><i class="fal fa-fw fa-check"></i></div>'
                ),
                $(this)
                  .find("label span.wpcf7-list-item-label")
                  .wrapAll("<p />"),
                $(this)
                  .find("input")
                  .on("click", function () {
                    $(this).prev(".checkbox").hasClass("checked")
                      ? $(this).prev(".checkbox").removeClass("checked")
                      : $(this).prev(".checkbox").addClass("checked");
                  });
            });
      }),
    $("input.wpcf7-submit").on("click", function () {
      $(this)
        .parents(".wpcf7-form")
        .find(".wpcf7-response-output")
        .addClass("active")
        .animate({ opacity: 1, bottom: 0 }, 200),
        setTimeout(function () {
          $(".wpcf7-response-output").animate(
            { opacity: 0, bottom: "-50px" },
            200,
            function () {
              $(this).removeClass("active");
            }
          );
        }, 5e3);
    }),
    $('.wpcf7-form button[type="submit"]').on("click", function () {
      $(this)
        .parents(".wpcf7-form")
        .find(".wpcf7-response-output")
        .addClass("active")
        .animate({ opacity: 1, bottom: 0 }, 200),
        setTimeout(function () {
          $(".wpcf7-response-output").animate(
            { opacity: 0, bottom: "-50px" },
            200,
            function () {
              $(this).removeClass("active");
            }
          );
        }, 5e3);
    }));
});
