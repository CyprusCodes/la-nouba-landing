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
  desc_1:
    "2021 yılında projendirilen ve hizmete açılan La Nouba, Girne-Karaoğlanoğlu bölgesinde denize sıfır bir konumda yer almaktadır.",
  desc_2:
    "Farklı konsepti ve eğlence anlayışı ile Kuzey Kıbrıs Türk Cumhuriyeti gece hayatına yeni bir boyut kazandıran La Nouba, dünyanın farklı yerlerinden misafirleri de ağırlamaktadır.",
  desc_3:
    "Muhteşem ambiyansa sahip konumu, büyüleyici dizaynı, nefes kesen sahne şovları ve sınırların ötesinde gerçekleşen eğlence anlayışı ile Avrupa’yı ayağınıza taşıyor.",
  title_1: "Sıradaki Etkinlik",
  event_date_1: "LA NOUBA CUMARTESİ | 10 HAZİRAN CUMARTESİ 2023",
  event_date_2: "LA NOUBA CUMARTESİ | 10 HAZİRAN CUMARTESİ 2023",
  event_date_3: "LA NOUBA CUMARTESİ | 10 HAZİRAN CUMARTESİ 2023",
  event_date_4: "LA NOUBA CUMARTESİ | 10 HAZİRAN CUMARTESİ 2023",
  event_date_5: "LA NOUBA CUMARTESİ | 10 HAZİRAN CUMARTESİ 2023",
  event_date_6: "LA NOUBA CUMARTESİ | 10 HAZİRAN CUMARTESİ 2023",
  event_date_7: "LA NOUBA CUMARTESİ | 10 HAZİRAN CUMARTESİ 2023",
  event_date_8: "LA NOUBA CUMARTESİ | 10 HAZİRAN CUMARTESİ 2023",
  event_date_9: "LA NOUBA CUMARTESİ | 10 HAZİRAN CUMARTESİ 2023",
  event_date_10: "LA NOUBA CUMARTESİ | 10 HAZİRAN CUMARTESİ 2023",
  event_date_11: "LA NOUBA CUMARTESİ | 10 HAZİRAN CUMARTESİ 2023",
  fotoğraflar: "Fotoğraflar",
  galeriyegozat:
    "Galeriye gözat<span class='icon'><i class='fal fa-chevron-right'></i></span>",
  videolar: "Videolar",
  bilgi: "Bilgi",
  bilgi_1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  bilgi_2:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  t_footer:
    "La Nouba &copy; 2023 - tüm hakları saklıdır - <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a> tarafından oluşturulmuştur.",
};

$.i18n.en = {
  etkinlikler: "Events",
  galeri: "Gallery",
  hakkımızda: "About us",
  iletişim: "Contact",
  your_browser: "Your browser does not support the video tag.",
  desc_1:
    "La Nouba, which was planned and opened in 2021, is located in the Girne-Karaoğlanoğlu region, right by the sea.",
  desc_2:
    "Bringing a new dimension to the nightlife of the Turkish Republic of Northern Cyprus with its unique concept and entertainment approach, La Nouba also welcomes guests from different parts of the world.",
  desc_3:
    "With its magnificent ambiance, enchanting design, breathtaking stage shows, and entertainment that goes beyond boundaries, it brings Europe to your feet.",
  title_1: "Upcoming Event",
  event_date_1: "LA NOUBA SATURDAY | 10TH JUNE SATURDAY 2023",
  event_date_2: "LA NOUBA SATURDAY | 10TH JUNE SATURDAY 2023",
  event_date_3: "LA NOUBA SATURDAY | 10TH JUNE SATURDAY 2023",
  event_date_4: "LA NOUBA SATURDAY | 10TH JUNE SATURDAY 2023",
  event_date_5: "LA NOUBA SATURDAY | 10TH JUNE SATURDAY 2023",
  event_date_6: "LA NOUBA SATURDAY | 10TH JUNE SATURDAY 2023",
  event_date_7: "LA NOUBA SATURDAY | 10TH JUNE SATURDAY 2023",
  event_date_8: "LA NOUBA SATURDAY | 10TH JUNE SATURDAY 2023",
  event_date_9: "LA NOUBA SATURDAY | 10TH JUNE SATURDAY 2023",
  event_date_10: "LA NOUBA SATURDAY | 10TH JUNE SATURDAY 2023",
  event_date_11: "LA NOUBA SATURDAY | 10TH JUNE SATURDAY 2023",
  fotoğraflar: "Photos",
  galeriyegozat:
    "Browse the Gallery <span class='icon'><i class='fal fa-chevron-right'></i></span>",
  videolar: "Videos",
  bilgi: "Information",
  bilgi_1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  bilgi_2:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  t_footer:
    "La Nouba © 2023 - All rights reserved - by <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a>",
};

$.i18n.ru = {
  etkinlikler: "Мероприятия",
  galeri: "Галерея",
  hakkımızda: "О нас",
  iletişim: "Контакт",
  your_browser: "Ваш браузер не поддерживает тег видео.",
  desc_1:
    "La Nouba, разработанный и открытый в 2021 году, находится в районе Гирне-Караогланоглу прямо у моря.",
  desc_2:
    "La Nouba, с уникальным концептом и пониманием развлечений, приносит новый уровень ночной жизни в Северный Кипр, приветствуя гостей со всего мира.",
  desc_3:
    "С удивительной атмосферой, завораживающим дизайном, захватывающими сценическими шоу и развлекательной программой выходящей за рамки, La Nouba приносит Европу к вам.",
  title_1: "Ближайшее Мероприятие",
  event_date_1: "LA NOUBA СУББОТА | 10 ИЮНЯ 2023 Г.",
  event_date_2: "LA NOUBA СУББОТА | 10 ИЮНЯ 2023 Г.",
  event_date_3: "LA NOUBA СУББОТА | 10 ИЮНЯ 2023 Г.",
  event_date_4: "LA NOUBA СУББОТА | 10 ИЮНЯ 2023 Г.",
  event_date_5: "LA NOUBA СУББОТА | 10 ИЮНЯ 2023 Г.",
  event_date_6: "LA NOUBA СУББОТА | 10 ИЮНЯ 2023 Г.",
  event_date_7: "LA NOUBA СУББОТА | 10 ИЮНЯ 2023 Г.",
  event_date_8: "LA NOUBA СУББОТА | 10 ИЮНЯ 2023 Г.",
  event_date_9: "LA NOUBA СУББОТА | 10 ИЮНЯ 2023 Г.",
  event_date_10: "LA NOUBA СУББОТА | 10 ИЮНЯ 2023 Г.",
  event_date_11: "LA NOUBA СУББОТА | 10 ИЮНЯ 2023 Г.",
  fotoğraflar: "Фотографии",
  galeriyegozat:
    "Посмотреть Галерею<span class='icon'><i class='fal fa-chevron-right'></i></span>",
  videolar: "Видео",
  bilgi: "Информация",
  bilgi_1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  bilgi_2:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  t_footer:
    "La Nouba © 2023 - все права защищены - <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a>",
};

$.i18n.ua = {
  etkinlikler: "Події",
  galeri: "Галерея",
  hakkımızda: "Про нас",
  iletişim: "Контакти",
  your_browser: "Ваш браузер не підтримує тег відео.",
  desc_1:
    "La Nouba, яка була спроектована і відкрита в 2021 році, розташована в районі Гірне-Караоланоолу прямо біля моря.",
  desc_2:
    "Принісши нові риси нічному життю Турецької Республіки Північний Кіпр зі своїм унікальним концептом та підходом до розваг, La Nouba також радо вітає гостей з різних частин світу.",
  desc_3:
    "Захоплюючи атмосферою, чарівним дизайном, захоплюючими шоу на сцені та розвагами, що виходять за рамки, вона приводить Європу до ваших ніг.",
  title_1: "Майбутні Події",
  event_date_1: "СУБОТА LA NOUBA | 10-ГО ЧЕРВНЯ 2023 РОКУ",
  event_date_2: "СУБОТА LA NOUBA | 10-ГО ЧЕРВНЯ 2023 РОКУ",
  event_date_3: "СУБОТА LA NOUBA | 10-ГО ЧЕРВНЯ 2023 РОКУ",
  event_date_4: "СУБОТА LA NOUBA | 10-ГО ЧЕРВНЯ 2023 РОКУ",
  event_date_5: "СУБОТА LA NOUBA | 10-ГО ЧЕРВНЯ 2023 РОКУ",
  event_date_6: "СУБОТА LA NOUBA | 10-ГО ЧЕРВНЯ 2023 РОКУ",
  event_date_7: "СУБОТА LA NOUBA | 10-ГО ЧЕРВНЯ 2023 РОКУ",
  event_date_8: "СУБОТА LA NOUBA | 10-ГО ЧЕРВНЯ 2023 РОКУ",
  event_date_9: "СУБОТА LA NOUBA | 10-ГО ЧЕРВНЯ 2023 РОКУ",
  event_date_10: "СУБОТА LA NOUBA | 10-ГО ЧЕРВНЯ 2023 РОКУ",
  event_date_11: "СУБОТА LA NOUBA | 10-ГО ЧЕРВНЯ 2023 РОКУ",
  fotoğraflar: "Фотографії",
  galeriyegozat:
    "Переглянути Галерею <span class='icon'><i class='fal fa-chevron-right'></i></span>",
  videolar: "Відео",
  bilgi: "Інформація",
  bilgi_1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  bilgi_2:
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
