// const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

async function loginFormHandler(event) {
  event.preventDefault();

  const password = document.querySelector("#passwordLogin").value.trim();
  const username = document.querySelector("#usernameLogin").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    if (response.ok) {
      console.log("inside response ok");
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#loginInBtn")
  .addEventListener("click", loginFormHandler);

// myModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
// });
