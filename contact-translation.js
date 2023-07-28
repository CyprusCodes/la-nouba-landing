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
  iletişim_title: "İLETİŞİM",
  çalışmak_ister_misiniz: "BİZİMLE ÇALIŞMAK İSTER MİSİN?",
  adı: "Adınız",
  soyadı: "Soyadınız",
  telefon: "Telefon Numarası",
  e_posta: "E-posta adresi",
  departman: "Departman",
  lütfen_seç: "Lütfen seçin",
  halkla_ilişkiler: "Halkla İlişkiler",
  reklam: "Reklam ve Pazarlama",
  foto_cv: "Fotoğraflı CV",
  açıklama: "Açıklama",

  t_footer:
    "La Nouba &copy; 2023 - tüm hakları saklıdır - <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a> tarafından oluşturulmuştur.",
};

$.i18n.en = {
  etkinlikler: "Events",
  galeri: "Gallery",
  hakkımızda: "About Us",
  iletişim: "Contact",
  iletişim_title: "CONTACT",
  çalışmak_ister_misiniz: "WANT TO WORK WITH US?",
  adı: "Name",
  soyadı: "Surname",
  telefon: "Phone Number",
  e_posta: "E-mail Address",
  departman: "Department",
  lütfen_seç: "Please Select",
  halkla_ilişkiler: "Public Relations",
  reklam: "Advertising and Marketing",
  foto_cv: "Photo CV",
  açıklama: "Description",

  t_footer:
    "La Nouba © 2023 - All rights reserved - by <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a>",
};

$.i18n.ru = {
  etkinlikler: "Мероприятия",
  galeri: "Галерея",
  hakkımızda: "О нас",
  iletişim: "Контакты",
  iletişim_title: "КОНТАКТ",
  çalışmak_ister_misiniz: "ХОТИТЕ РАБОТАТЬ С НАМИ?",
  adı: "Имя",
  soyadı: "Фамилия",
  telefon: "Номер телефона",
  e_posta: "E-mail адрес",
  departman: "Отдел",
  lütfen_seç: "Пожалуйста, выберите",
  halkla_ilişkiler: "Отдел по связям с общественностью",
  reklam: "Реклама и маркетинг",
  foto_cv: "Фото резюме",
  açıklama: "Описание",

  t_footer:
    "La Nouba © 2023 - все права защищены - <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a>",
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
