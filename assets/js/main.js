// var _body = document.getElementsByTagName("body")[0];
// // console.log({_body});
// // _body.style.backgroundColor = "#222222";
// // _body.className = "black";
// var _name = document.getElementById("formGroupEnteryourfullname");
// var nameHelp = document.getElementById("nameHelp");
// // console.log({_name});
// _name.addEventListener("keyup", function(e){
//     // console.log(e.target.value);
//     var value = e.target.value;
//     if (value.length < 4 ) {
//         console.log(value + " must be longer than two ");
//         this.classList.add("is-invalid");
//         nameHelp.classList.remove("d-none");
//     }
//     else {
//         this.classList.remove("is-invalid");
//         nameHelp.classList.add("d-none");
//     }
// });
var _form = document.getElementsByClassName("form__fill")[0];
var _inputs = Array.from(_form.getElementsByClassName("form-control"));
// array.from convert html collection to arrays properties
// console.log(_inputs);
var keyupHandler = function (e) {
  // console.log(e.target.value);
  // console.log(e.target.name);
  if (e.target.name === "name" && e.target.value.length < 4) {
    this.classList.add("is-invalid");
  }
  else {
    this.classList.remove("is-invalid");
  };
  if (e.target.name === "email") {
    // console.log("email");
    var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var value = e.target.value;
    // console.log(regExp.test(String(value).toLowerCase()));
    if (!regExp.test(String(value).toLowerCase())) {
      this.classList.add("is-invalid");
    }
    else {
      this.classList.remove("is-invalid");
    }
  };
  if (e.target.name === "message" && e.target.value.length < 10) { 
    // console.log("message");
    this.classList.add("is-invalid");
  }
  else {
    this.classList.remove("is-invalid");
  };
};
_inputs.forEach(function (eachInputs) {
  eachInputs.addEventListener("keyup", keyupHandler);
});
