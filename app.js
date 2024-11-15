const API_URL = "cht-voi-bot-ffc9a4fmgfeedmce.eastus-01.azurewebsites.net";

document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    const responseMessage = document.getElementById("responseMessage");

    if (data.status === "success") {
        responseMessage.style.color = "green";
        responseMessage.textContent = data.message;
    } else {
        responseMessage.style.color = "red";
        responseMessage.textContent = data.message;
    }
});
