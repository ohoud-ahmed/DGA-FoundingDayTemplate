/**
 * Saudi National Day - Slideshow Script
 * Handles the hero slideshow functionality and animations
 * Author: Ohoud - RCJY Frontend Developer
 * Last Updated: 2026
 */

// ============================================
// Configuration
// ============================================
const SLIDE_INTERVAL = 10000; // 10 seconds between slides
const ANIMATION_DELAY = 10; // Small delay for animation reset

// ============================================
// State Management
// ============================================
let currentSlide = 0;

// ============================================
// DOM Elements
// ============================================
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// ============================================
// Slideshow Functions
// ============================================

/**
 * Display a specific slide with animation
 * @param {number} index - The index of the slide to show
 */
function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    // Reset and trigger colorize animation
    const img = slides[index].querySelector('img');
    img.style.animation = 'none';
    
    setTimeout(() => {
        img.style.animation = 'colorize 6s ease-in-out forwards';
    }, ANIMATION_DELAY);
}

/**
 * Navigate to a specific slide
 * @param {number} index - The index of the slide to navigate to
 */
function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

/**
 * Move to the next slide in sequence
 * Loops back to first slide after the last one
 */
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// ============================================
// Auto-play Functionality
// ============================================

/**
 * Start automatic slideshow
 */
function startAutoPlay() {
    setInterval(nextSlide, SLIDE_INTERVAL);
}

// ============================================
// Initialization
// ============================================

/**
 * Initialize the slideshow on page load
 */
function initSlideshow() {
    // Start with first slide animation
    const firstImg = slides[0].querySelector('img');
    firstImg.style.animation = 'colorize 6s ease-in-out forwards';
    
    // Start auto-play
    startAutoPlay();
}

// Wait for DOM to be fully loaded before initializing
window.addEventListener('load', initSlideshow);
