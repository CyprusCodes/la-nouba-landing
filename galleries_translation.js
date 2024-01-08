let lang = document.getElementById("lang");

function toggleLangBtn() {
  if (lang.className === "dropdown-menu") {
    lang.classList.add("show");
  } else {
    lang.classList.remove("show");
  }
}

$.i18n = function (options) {
  options = $.extend(
    {},
    {
      lang: window.localStorage.getItem("language") || "tr",
      data: $.i18n,
    },
    options
  );

  var langStore = options.data[options.lang];
  this.setLang = function (language) {
    window.localStorage.setItem("language", language);
    langStore = options.data[language];
  };

  this.getItem = function (key) {
    return langStore[key];
  };

  return this;
};

$.i18n.tr = {
  etkinlikler: "Etkinlikler",
  galeri: "Galeri",
  hakkımızda: "Hakkımızda",
  iletişim: "İletişim",
  your_browser: "Tarayıcınız video etiketini desteklemiyor.",
  summer_2023: "", 
  summer_2022: "", 
  check_more: "",
  fotoğraflar:"Fotoğraflar",
  galeriyegozat:
    "Galeriye gözat<span class='icon'><i class='fal fa-chevron-right'></i></span>",
  videolar: "Videolar",
  bilgi: "Bilgi",
  bilgi_1ter:
    "La Nouba &copy; 2023 - tüm hakları saklıdır - <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a> tarafından oluşturulmuştur.",
};

$.i18n.en = {
  etkinlikler: "Events",
  galeri: "Gallery",
  hakkımızda: "About us",
  iletişim: "Contact",
  your_browser: "Your browser does not support the video tag.",
  summer_2023: "",
  summer_2022: "",
  check_more: "",
  fotoğraflar: "Photos",
  galeriyegozat:
    "Browse the Gallery <span class='icon'><i class='fal fa-chevron-right'></i></span>",
  videolar: "Videos",
  bilgi: "Information",
  t_footer:
    "La Nouba © 2023 - All rights reserved - by <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a>",
};

$.i18n.ru = {
  etkinlikler: "Мероприятия",
  galeri: "Галерея",
  hakkımızda: "О нас",
  iletişim: "Контакт",
  your_browser: "Ваш браузер не поддерживает тег видео.",
  summer_2023: "",
  summer_2022: "",
  check_more: "",
  fotoğraflar: "Фотографии",
  galeriyegozat:
    "Посмотреть Галерею<span class='icon'><i class='fal fa-chevron-right'></i></span>",
  videolar: "Видео",
  bilgi: "Информация",
  t_footer:
    "La Nouba © 2023 - все права защищены - <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a>",
};

$.i18n.ua = {
  etkinlikler: "Події",
  galeri: "Галерея",
  hakkımızda: "Про нас",
  iletişim: "Контакти",
  your_browser: "Ваш браузер не підтримує тег відео.",
  summer_2023: "",
  summer_2022: "",
  check_more: "",
  fotoğraflar: "Фотографії",
  galeriyegozat:
    "Переглянути Галерею <span class='icon'><i class='fal fa-chevron-right'></i></span>",
  videolar: "Відео",
  bilgi: "Інформація",
  t_footer:
    "La Nouba © 2023 - Усі права захищено - від <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a>",
};
var i18n = $.i18n();

var changeLabels = function () {
  $("[data-translate]").each(function () {
    var forLabel = $(this).attr("data-translate");
    this.innerHTML = i18n.getItem(forLabel);
  });
};

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setContactFormPlaceholders(lang) {
  if (lang === "en") {
    $('input[name="isim"]').attr("placeholder", "Name");
    $('input[name="telefon"]').attr("placeholder", "Phone");
    $('input[name="email"]').attr("placeholder", "Email");
    $('textarea[name="mesaj"]').attr("placeholder", "Message");
  } else if (lang === "ua") {
    $('input[name="isim"]').attr("placeholder", "Ім'я");
    $('input[name="telefon"]').attr("placeholder", "Номер телефону");
    $('input[name="email"]').attr("placeholder", "Адреса електронної пошти");
    $('textarea[name="mesaj"]').attr("placeholder", "Повідомлення");
  } else if (lang === "ru") {
    $('input[name="isim"]').attr("placeholder", "имя");
    $('input[name="telefon"]').attr("placeholder", "телефон");
    $('input[name="email"]').attr("placeholder", "электронная почта");
    $('textarea[name="mesaj"]').attr("placeholder", "сообщение");
  } else {
    $('input[name="isim"]').attr("placeholder", "isim");
    $('input[name="telefon"]').attr("placeholder", "telefon");
    $('input[name="email"]').attr("placeholder", "email");
    $('textarea[name="mesaj"]').attr("placeholder", "mesaj");
  }
}

$(document).ready(function () {
  const lang = getParameterByName("lang");
  if (lang) {
    window.localStorage.setItem("language", lang);
    i18n.setLang(lang);
  }
  changeLabels();
  setContactFormPlaceholders(window.localStorage.getItem("language") || "tr");

  $("#dropdownMenuButton").text(
    (window.localStorage.getItem("language") || "tr").toUpperCase()
  );
});

$("#lang")
  .find("a")
  .click(function (e) {
    var lang = this.href.slice(-2);
    i18n.setLang(lang);
    setContactFormPlaceholders(lang);
    $("#dropdownMenuButton").text(
      (window.localStorage.getItem("language") || "tr").toUpperCase()
    );

    const langQueryParam = getParameterByName("lang");
    if (langQueryParam) {
      var url = new URL(window.location.href);
      var search_params = url.searchParams;
      search_params.set("lang", lang);
      url.search = search_params.toString();
      var new_url = url.pathname + url.search;
      window.history.replaceState({}, "", new_url);
    }

    changeLabels();
    e.preventDefault();
  });
