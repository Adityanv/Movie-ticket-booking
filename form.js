const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  console.log('Form submission cancelled.');
});
function auth() {
    var ID = document.getElementById("Rid").value;
    var Username = document.getElementById("Uname").value;
    var pwd = document.getElementById("pwd").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("pno").value;
    var date = document.getElementById("Bday").value;

    if (ID != "" && Username != "" && pwd != "" && email != "" && tel != "" && date != "") {
        window.location.replace("./HOME.html");
    }
    else {
        alert("Please fill all the details");
        return;
    }

}