


const toast = document.getElementById("submitForm");



function validateForm() {
  var a = document.forms["Form"]["name"].value;
  var b = document.forms["Form"]["email"].value;
  var c = document.forms["Form"]["phonenumber"].value;

  if (a == null || a == "", b == null || b == "", c == null || c == "") {

    Toastify({
      text: "Please Fill All Required Field",
      duration: 5000,
      // className:"info",
      close: true,
      offset: {
          x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      backgroundColor: "red",
   
      stopOnFocus: true, // Prevents dismissing of toast on hover
      // Callback after click
    }).showToast();
    return false;
  }
  else{
    Toastify({
      text: "Mail has been sent",
      duration: 5000,
      // className:"info",
      close: true,
      offset: {
          x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      stopOnFocus: true, // Prevents dismissing of toast on hover
      // Callback after click
    }).showToast();
    return true;
  }
}
  

