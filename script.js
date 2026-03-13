document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. Scroll Experience: Logo & Header
    // ==========================================
    const header = document.getElementById("main-header");
    const heroSection = document.getElementById("inicio");
    
    // We get the original logo in the hero and the target container in the nav
    const logoHeroWrapper = document.getElementById("hero-logo-wrapper");
    const animatedLogo = document.getElementById("animated-logo");
    const navLogoContainer = document.getElementById("nav-logo-container");

    let isHeaderVisible = false;

    // Listen to scroll events to animate header appearance
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        
        // Trigger threshold: when scrolled past 150px
        const threshold = 150;

        if (scrollPosition > threshold) {
            if (!isHeaderVisible) {
                header.classList.add("visible");
                isHeaderVisible = true;
                
                // Move logo to header seamlessly (Simulated DOM Move)
                // Appending it to Nav to keep semantic HTML and prevent z-index bugs
                animatedLogo.style.width = "100px";
                animatedLogo.style.height = "auto";
                navLogoContainer.appendChild(animatedLogo);
                
                // Hide empty wrapper
                logoHeroWrapper.style.opacity = "0";
            }
        } else {
            if (isHeaderVisible) {
                header.classList.remove("visible");
                isHeaderVisible = false;
                
                // Give logo back to hero
                animatedLogo.style.width = "80%";
                logoHeroWrapper.appendChild(animatedLogo);
                
                // Show hero wrapper
                logoHeroWrapper.style.opacity = "1";
            }
        }
    });

    // ==========================================
    // 2. Contact Form Interception (WhatsApp)
    // ==========================================
    const wpForm = document.getElementById("whatsapp-form");
    // Constance variable for the phone number
    const BUSINESS_PHONE_NUMBER = "5491112345678"; // Replace with real number

    if (wpForm) {
        wpForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Extract form values
            const nombre = document.getElementById("nombre").value.trim();
            const servicio = document.getElementById("servicio").value;
            const consulta = document.getElementById("consulta").value.trim();

            if (!nombre || !servicio || !consulta) {
                alert("Por favor, complete todos los campos.");
                return;
            }

            // Construct template message
            const rawMessage = `¡Hola, equipo de PAS! Mi nombre es ${nombre}. Vi sus excelentes trabajos y me interesa cotizar un servicio de ${servicio}. Mi consulta es: ${consulta}. ¡Espero su respuesta para empezar a trabajar juntos!`;

            // URL Encode the message
            const encodedMessage = encodeURIComponent(rawMessage);

            // Construct Full WhatsApp URL
            const whatsappUrl = `https://wa.me/${BUSINESS_PHONE_NUMBER}?text=${encodedMessage}`;

            // Open in new tab
            window.open(whatsappUrl, "_blank");
            
            // Optional: reset form after sending
            wpForm.reset();
        });
    }

});
