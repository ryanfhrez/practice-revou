function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name == "" || email == "" || message == "") {
    alert("Please fill out all fields");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  return true;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
