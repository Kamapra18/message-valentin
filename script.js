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
            "Sayangku,",
            "Di Hari Valentine ini, aku ingin mengingatkan betapa berartinya dirimu dalam hidupku.",
            "Setiap detik bersamamu adalah kebahagiaan yang tak tergantikan.",
            "Kamu adalah alasan aku selalu tersenyum dan merasa lengkap.",
            "Terima kasih telah hadir sebagai cinta sejati dalam hidupku.",
            "Aku bersyukur banget bisa menghabiskan hari-hari bersama kamu.",
            "Selamat Hari Valentine, aku cinta kamu lebih dari yang bisa kuungkapkan!"
        ],
    }
];

let currentMessageIndex = 0;
const fullMessage = document.getElementById("fullMessage");

function openMessage() {
    fullMessage.innerHTML = "";
    showCurrentMessage();
}

function showCurrentMessage() {
    fullMessage.innerHTML = "";
    const currentMessage = messages[currentMessageIndex];

    currentMessage.lines.forEach((line, index) => {
        const p = document.createElement("p");
        p.textContent = line;
        p.style.opacity = "0";
        p.style.transform = "translateY(10px)";
        p.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
        fullMessage.appendChild(p);
        
        setTimeout(() => {
            p.style.opacity = "1";
            p.style.transform = "translateY(0)";
        }, index * 500);
    });

    const btn = document.createElement("button");
    btn.textContent = currentMessageIndex < messages.length - 1 ? "Next" : "Tutup";
    btn.onclick = () => {
        if (currentMessageIndex < messages.length - 1) {
            currentMessageIndex++;
            showCurrentMessage();
        } else {
            closeMessage();
        }
    };
    fullMessage.appendChild(btn);
    fullMessage.style.display = "block";
}

function closeMessage() {
    fullMessage.style.display = "none";
    currentMessageIndex = 0;
}

document.getElementById("startButton").addEventListener("click", openMessage);
