// Hero Section animation
document.addEventListener("DOMContentLoaded", function () {
    // Fade in hero text
    gsap.fromTo(".hero-text", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.5, delay: 0.5 });

    // Parallax effect
    const parallaxBg = document.querySelector(".parallax-bg");
    window.addEventListener("scroll", function () {
        const scrolled = window.scrollY;
        parallaxBg.style.transform = `translateZ(-1px) scale(2) translateY(${scrolled * 0.5}px)`;
    });
});

// GSAP animation
gsap.set(".btn-animated-gsap", { overflow: "hidden" });
gsap.to(".btn-animated-gsap", {
    duration: 1.5,
    y: -20,
    ease: "elastic.out(1, 0.3)",
    repeat: -1,
    yoyo: true
});

// About Me animation
gsap.timeline({
    scrollTrigger: {
        trigger: "#About",
        start: "top center",
        toggleActions: "play none none reverse"
    }
})
    .from(".about-content", { opacity: 0, x: -50, duration: 1 })
    .from(".about-image", { opacity: 0, x: 50, duration: 1 }, "-=1");

// Contact Me
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('contact-modal');
    const openModalButton = document.querySelector('.open-modal');
    const closeModalButton = document.querySelector('.close');

    openModalButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});