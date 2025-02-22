const storedPasswordHash = "2758ba1e136f331899361eb23f53b41254b584207eda6aacabbb602ce90df6f0";

async function checkPassword() {
    const enteredPassword = document.getElementById("password").value;

    if (!enteredPassword) {
        alert("Please enter a password!");
        return;
    }

    const hashedPassword = await hashPassword(enteredPassword);

    if (hashedPassword === storedPasswordHash) {
        console.log("Password correct! Redirecting...");
        sessionStorage.setItem("authenticated", "true");
        document.querySelector(".login-container").classList.add("fade-out");
        window.location.href = "secret.html";
    } else {
        alert("❌ Wrong password! Try again.");
    }
}

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});
