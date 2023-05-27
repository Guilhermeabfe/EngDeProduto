import { instance } from "./axios.js";
import { Toast } from "./toast.js";

const buttonSubmit = document.getElementsByClassName("btn-login")[0];

function loginUser(event) {
  event.preventDefault();

  const userLogin = document.getElementById("userLogin").value;
  const userPassword = document.getElementById("userPassword").value;

  const data = {
    email: userLogin,
    password: userPassword,
  };

  instance
    .post("/login", data)
    .then((response) => {
      window.location.assign("/pages/pag01.html");
    })
    .catch((error) => {
      Toast.create("Email ou senha incorreta");
    });
}

buttonSubmit.addEventListener("click", loginUser);
