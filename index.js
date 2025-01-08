'use strict';

const navToggLeBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggLeBtn.addEventListener("click", function (){
    header.classList.toggle("active");
})

// .blog-title
const blogTitles = document.querySelectorAll('.blog-title');


blogTitles.forEach(blogTitle => {
    blogTitle.addEventListener('mouseenter', () => {
        
        const fullTitle = blogTitle.textContent.trim();
        blogTitle.setAttribute('title', fullTitle);

    });

    blogTitle.addEventListener('mouseleave', () => {
        
        blogTitle.removeAttribute('title');

    });
});

// .blog-text
const blogTexts = document.querySelectorAll('.blog-text');

blogTexts.forEach(blogText => {
    blogText.addEventListener('mouseenter', () => {

        const fullText = blogText.textContent.trim();
        blogText.setAttribute('title', fullText)

    });

    blogText.addEventListener('mouseleave', () => {

        blogText.removeAttribute('title');
    })
});


// Tekst slajder - HERO
let currentSlide = 0;
        const slides = document.querySelectorAll('.box');
        const totalSlides = slides.length;
        let slideInterval;

        // koji je slajd
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = (i === index) ? '1' : '0';
            });
            currentSlide = index;
        }

        // sledeci slajd
        function nextSlide() {
            let nextIndex = (currentSlide + 1) % totalSlides;
            showSlide(nextIndex);
            resetInterval();
        }

        // prethodni slajd
        function prevSlide() {
            let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(prevIndex);
            resetInterval();
        }

        // interval
        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 7000); // 10 seconds per slide
        }

        // pocetne funkcije
        showSlide(currentSlide);
        resetInterval();

// ---- Pokusaj dinamickog sakrivanja teksta ----

// -- 1 --

/* const selectElement = document.getElementById('sifra-rm');
const options = selectElement.options;

for (let i = 0; i < options.length; i++) {
    if (options[i].text.length > 47) {
        options[i].text = options[i].text.slice(0, 47) + '...';
    }
}
 */


// -- 2 --

/* window.addEventListener('resize', truncateOptions);
window.addEventListener('load', truncateOptions);

function truncateOptions() {
    const selectElement = document.getElementById('sifra-rm');
    const options = selectElement.options;
    const selectWidth = selectElement.offsetWidth; // Get the width of the select element
    const avgCharWidth = 8; // Average character width in pixels (adjust based on your font)
    const maxChars = Math.floor(selectWidth / avgCharWidth); // Estimate max chars that can fit

    for (let i = 0; i < options.length; i++) {
        const originalText = options[i].getAttribute('data-full-text') || options[i].text;
        if (originalText.length > maxChars) {
            options[i].text = originalText.slice(0, maxChars - 3) + '...';
        } else {
            options[i].text = originalText; // Restore full text if space allows
        }
        options[i].setAttribute('data-full-text', originalText); // Store the full text
    }
} */

