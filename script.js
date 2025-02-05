function checkName() {
    var name = document.getElementById("nameInput").value;
    var giftBox = document.getElementById("giftBox");
    var errorMessage = document.getElementById("errorMessage");

    // Check if the name is "Erika Bangate" or "erika bangate" (case insensitive)
    if (name.trim().toLowerCase() === "erika bangate") {
        // Show the gift box if the name is correct
        giftBox.style.display = "block";
        errorMessage.style.display = "none";
    } else {
        // Show error message if the name is incorrect
        giftBox.style.display = "none";
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "This is for my GF only, leave!";
    }
}

function openGift() {
    var giftBox = document.getElementById("giftBox");
    var surpriseMessage = document.getElementById("surpriseMessage");

    // Remove the shaking animation for the gift box
    giftBox.classList.remove("shake");

    // Display the surprise message when clicked
    surpriseMessage.style.display = "block";
    surpriseMessage.innerHTML = `
        <div class="open-gift">
            <h2>🎉 Happy VaLentines Adi! 🎉</h2>
            <p>You are amazing and I love you so much! 💖</p>
            <p>Here's a little something for you:</p>
            <ul>
                <li>🌹 You brighten my days!</li>
                <li>💫 My life is better with you in it!</li>
                <li>😍 I adore you more than words can express!</li>
            </ul>
            <p>You're the best thing that ever happened to me! 💖</p>
        </div>
    `;

    // Add a timeout to hide the gift box after the surprise is shown
    setTimeout(() => {
        giftBox.style.display = "none";
    }, 500); // Hide after 0.5 seconds
}
