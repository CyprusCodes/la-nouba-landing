let lang = document.getElementById("i_lang");

              function toggledLangBtn() {
                if (lang.className === "dropdown-menu dropdown-container") {
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
    lang_i: "TR",
  etkinlikler: "Etkinlikler",
galeri: "Galeri",
hakkımızda: "Hakkımızda",
iletişim: "İletişim",
your_browser: "Tarayıcınız video etiketini desteklemiyor.",
rezervasyon: "Rezervasyon",
rezervasyon_p: " Ayrıcalıklı bir deneyim yaşamak ister misiniz? Hemen rezervasyon yapın.",
etkin_sec: "Etkinlik Seçiniz",
e_posta: "E-Posta Adresi:",
isim: "İsim",
soyisim: "Soyisim",
telefon: "Telefon numarasi",
kadin: "Kadın Sayısı",
erkek: "Erkek Sayısı",
ozel_m: "Özel Mesajınız (Şişeli Bistro, Doğum Günü vb.)",
talebi_gonder: "Talebi Gönder",


t_footer: "La Nouba &copy; 2023 - tüm hakları saklıdır - <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a> tarafından oluşturulmuştur.",




};

$.i18n.en = {
    lang_i: "EN",
  etkinlikler: "Events",
galeri: "Gallery",
hakkımızda: "About us",
iletişim: "Contact",
your_browser: "Your browser does not support the video tag.",
rezervasyon: "Reservation",
rezervasyon_p: "Would you like to experience a privileged experience? Make a reservation now.",
etkin_sec: "Choose an Event",
e_posta: "Email Address:",
isim: "Name",
soyisim: "Surname",
telefon: "Phone Number",
kadin: "Number of Females",
erkek: "Number of Males",
ozel_m: "Your Special Message (Bottled Bistro, Birthday, etc.)",
talebi_gonder: "Send Request",
t_footer: "La Nouba © 2023 - All rights reserved - by <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a>",
};

$.i18n.ru = {
    lang_i: "RU",
  etkinlikler: "Мероприятия",
galeri: "Галерея",
hakkımızda: "О нас",
iletişim: "Контакт",
your_browser: "Ваш браузер не поддерживает тег видео.",
rezervasyon: "Бронирование",
rezervasyon_p: "Хотите ли вы испытать привилегированный опыт? Забронируйте сейчас.",
etkin_sec: "Выберите событие",
e_posta: "Адрес электронной почты:",
isim: "Имя",
soyisim: "Фамилия",
telefon: "Номер телефона",
kadin: "Количество женщин",
erkek: "Количество мужчин",
ozel_m: "Ваше особое сообщение (Bistro в бутылке, день рождения и т. д.)",
talebi_gonder: "Отправить запрос",
t_footer: "La Nouba © 2023 - все права защищены - <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a>",
};
$.i18n.ua = {
  lang_i: "UA",
  etkinlikler: "Події",
galeri: "Галерея",
hakkımızda: "Про нас",
iletişim: "Контакти",
your_browser: "Ваш браузер не підтримує тег відео.",
rezervasyon: "Бронювання",
rezervasyon_p: "Чи хочете ви насолодитися привілейованим досвідом? Зробіть бронювання зараз.",
etkin_sec: "Оберіть Подію",
e_posta: "Адреса електронної пошти:",
isim: "Ім'я",
soyisim: "Прізвище",
telefon: "Номер телефону",
kadin: "Кількість жінок",
erkek: "Кількість чоловіків",
ozel_m: "Ваш спеціальний повідомлення (Bottled Bistro, День народження та інше)",
talebi_gonder: "Надіслати запит",
t_footer: "La Nouba © 2023 - Усі права захищено - від <a href='https://cypruscodes.com/' target='_blank'>CyprusCodes</a>",
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
  if (lang === "ru") {
    $('input[name="name"]').attr("placeholder", "example@exmple.com");
    $('input[name="isim"]').attr("placeholder", "Имя");
    $('input[name="soyisim"]').attr("placeholder", "Фамилия");
    $('input[name="phone"]').attr("placeholder", "Номер телефона");
    $('textarea[name="mesaj"]').attr("placeholder", "сообщение");
  } else if (lang === "ua") {
    $('input[name="name"]').attr("placeholder", "приклад@приклад.com");
$('input[name="isim"]').attr("placeholder", "Ім'я");
$('input[name="soyisim"]').attr("placeholder", "Прізвище");
$('input[name="phone"]').attr("placeholder", "Номер телефону");
$('textarea[name="mesaj"]').attr("placeholder", "повідомлення");
  }
  else if (lang === "en") {
    $('input[name="name"]').attr("placeholder", "example@exmple.com");
    $('input[name="isim"]').attr("placeholder", "Name");
    $('input[name="soyisim"]').attr("placeholder", "Full Name");
    $('input[name="phone"]').attr("placeholder", "Phone Number");
    $('textarea[name="mesaj"]').attr("placeholder", "Message");
  } 
  else {
    $('input[name="name"]').attr("placeholder", "example@exmple.com");
    $('input[name="isim"]').attr("placeholder", "İsim");
    $('input[name="soyisim"]').attr("placeholder", "Soyisim");
    $('input[name="phone"]').attr("placeholder", "Telefon Numarası");
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
