const messages = [
    {
        lines: [
            "Hai sayangku,",
            "Hanya ingin bilang kalau kamu selalu ada di pikiranku.",
            "Senyummu, tawamu, semuanya membuat hari-hariku lebih indah.",
            "Aku beruntung banget punya kamu di hidupku.",
            "Love you more than words can say." 
        ],
    },
    {
        lines: [
            "Untukmu, pemilik hatiku,",
            "Setiap detik bersamamu adalah puisi yang tak pernah selesai kutulis.",
            "Matamu adalah bintang yang menuntunku dalam gelap.",
            "Pelukanmu adalah rumah yang selalu kurindukan.",
            "Terima kasih sudah menjadi bagian dari hidupku yang paling indah.",
            "Aku mencintaimu, lebih dari apapun di dunia ini."
        ],
    },
    {
        lines: [
            "Hai kamu, yang selalu bikin aku salah tingkah,",
            "Ingat gak pertama kali kita ketemu? Aku langsung tahu kamu pasti bikin hidupku seru!",
            "Kamu itu kayak kopi di pagi hari, bikin semangat dan nagih.",
            "Jangan pernah berubah ya, kecuali kalau mau jadi istri/suami aku. ",
            "I love you to the moon and back!"
        ],
    }
];

let currentMessageIndex = 0;

const fullMessage = document.getElementById("fullMessage");

function openMessage() {
    fullMessage.innerHTML = "";
    const currentMessage = messages[currentMessageIndex];

    currentMessage.lines.forEach(line => {
        const p = document.createElement("p");
        p.textContent = line;
        fullMessage.appendChild(p);
    });

    fullMessage.style.display = "block";
    fullMessage.classList.remove("fade-out");
    fullMessage.classList.add("fade-in");

    setTimeout(() => {
        showNextMessage();
    }, 5000);
}

function showNextMessage() {
    currentMessageIndex++;
    if (currentMessageIndex < messages.length) {
        openMessage();
    } else {
        showCloseButton();
    }
}

function showCloseButton() {
    const btn = document.createElement("button");
    btn.textContent = "Tutup";
    btn.onclick = closeMessage;
    fullMessage.appendChild(btn);
}

function closeMessage() {
    fullMessage.classList.remove("fade-in");
    fullMessage.classList.add("fade-out");

    setTimeout(() => {
        fullMessage.style.display = "none";
        fullMessage.classList.remove("fade-out");

        currentMessageIndex = 0; 
    }, 500); 
}


document.getElementById("startButton").addEventListener("click", openMessage);