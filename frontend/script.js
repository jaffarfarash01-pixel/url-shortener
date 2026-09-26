const form = document.getElementById("urlForm");
const originalUrl = document.getElementById("originalUrl");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const url = originalUrl.value;

    result.innerHTML = "Creating short URL...";

    try {
        const response = await fetch("http://localhost:5000/api/shorten", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                originalUrl: url
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        result.innerHTML = `
            <p>Your shortened URL:</p>

            <a href="${data.shortUrl}" target="_blank">
                ${data.shortUrl}
            </a>
        `;

        originalUrl.value = "";

    } catch (error) {

        result.innerHTML = `
            <p>Error: ${error.message}</p>
        `;
    }
});