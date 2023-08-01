/* show hide language btn */

/* contact form  */

$("#form-submit").on("click", function (e) {
    let x = document.forms["contact-form"]["email"].value;
    var $formContact = $("#contact-form"),
      url = "https://script.google.com/macros/s/AKfycbzcccgTX9tONDNCnHBnBUPpO3_0MIWwOnH_ljE_zFIdzJokeSN95j6T0sjIw5TLoMoxqg/exec";
  
      if (x == "") {
        if (lang === "ru") {
          alert("Электронная почта должна быть заполнена");
        } else if (lang === "gr") {
          alert("Το email πρέπει να συμπληρωθεί");
        } else {
          alert("Email must be filled out");
        }
        return false;
      } else {
        e.preventDefault();
    
        if (lang === "ru") {
          var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $formContact.serializeArray(),
            success: function success(data) {
                console.log("sent")
            },
            error: function error() {
                console.log("eror")
            },
          }).then(
            console.log("sending")
          );
        } else if (lang === "gr") {
          var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $formContact.serializeArray(),
            success: function success(data) {
                console.log("sent")
            },
            error: function error() {
                console.log("error")
            },
          }).then(
            console.log("sending")
          );
        } else {
          var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $formContact.serializeArray(),
            // data: { htmlBody: "ssssss"},
            success: function success(data) {
                console.log("sent")
            },
            error: function error() {
                console.log("error")
            },
          }).then(
            console.log("sending")
          );
        }
      }
    
    
  });

  
  