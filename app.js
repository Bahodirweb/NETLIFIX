$("#text").addEventListener("focusout", myText);
$("#password").addEventListener("focusout", myPass);

$("#submit-btn").addEventListener("click", function () {
  myText();
  myPass();
});

function myText() {
  let message, text;
  let errElement = $("#text");
  message = $("#err");
  text = $("#text").value;

  try {
    if (text == "") {
      errElement.classList.remove("valid");
      errElement.classList.add("err");
      throw "введите адрес электронной почты";
    }

    if(text.length < 10 ){
        errElement.classList.remove("valid");
      errElement.classList.add("err");
      throw " Используйте символы @ ],.\\+" 
     
    }

    if (text.length > 0) {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = "";
    }
  } catch (e) {
    message.innerHTML = "" + e;
  }
}

function myPass() {
  let message, pass;
  let errElement = $("#password");
  message = $("#err2");
  pass = $("#password").value;

  try {
    if (pass == "") {
      errElement.classList.remove("valid");
      errElement.classList.add("err");
      throw "введите существующий пароль";
    }
    if(pass.length < 8){
        errElement.classList.remove("valid");
      errElement.classList.add("err");
      throw "Введите не менее 8 элементов";
    }

    if (pass.length > 8) {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = "";
    }
  } catch (e) {
    message.innerHTML = "" + e;
  }
}
