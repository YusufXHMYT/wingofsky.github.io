// IP KOPYALAMA FONKSİYONU
function copyIP() {
    const ipText = document.getElementById("ip");
    ipText.select();
    ipText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("IP kopyalandı: " + ipText.value);
}

// NAVBAR SCROLL EFEKTİ
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.8)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.5)";
    }
});

// Scroll animasyonu
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    // Sayfa yüklendiğinde kontrol et
    checkVisibility();
    
    // Scroll yapılınca kontrol et
    window.addEventListener("scroll", checkVisibility);
    
    function checkVisibility() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add("active");
            }
        });
    }
});

// Menü linklerine smooth scroll ekleme
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        
        // Yumuşak kaydırma
        window.scrollTo({
            top: target.offsetTop - 80,  // Navbar yüksekliği kadar boşluk
            behavior: "smooth"
        });
        
        // Animasyonu tetikle (opsiyonel)
        setTimeout(() => {
            target.classList.add("active");
        }, 300);
    });
});

async function checkServerStatus() {
    const ip = "wingofsky.aternos.me";
    const statusElement = document.getElementById("server-status");
    const playersElement = document.getElementById("online-players");
}