if (window.location.pathname.includes("secret.html")) {
    if (sessionStorage.getItem("authenticated") !== "true") {
        window.location.href = "index.html";
    }
}
