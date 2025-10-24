 /*==================== TYPING ANIMATION ====================*/
document.addEventListener('DOMContentLoaded', function() {
    const roles = ['Java Developer', 'MERN Developer'];
    const typingElement = document.querySelector('.typing-text');
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;
    let deleteSpeed = 100;
    let pauseTime = 2000;

    function type() {
        const currentRole = roles[currentRoleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                setTimeout(type, 500);
                return;
            }
            setTimeout(type, deleteSpeed);
        } else {
            typingElement.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === currentRole.length) {
                isDeleting = true;
                setTimeout(type, pauseTime);
                return;
            }
            setTimeout(type, typeSpeed);
        }
    }

    // Start the typing animation
    setTimeout(type, 1000);
});

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}



/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const Skillscontent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleskills(){
    let itemclass = this.parentNode.className
    for (i = 0; i < Skillscontent.length; i++){
        Skillscontent[i].className = 'skills_content skills_close'
    }
    if (itemclass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}
skillsHeader.forEach((eL)=>{
    eL.addEventListener('click',toggleskills)
})

/*==================== SKILLS PROGRESS ANIMATION ====================*/
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill_progress_bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                
                // Animate the progress bar
                setTimeout(() => {
                    progressBar.style.width = width + '%';
                }, 200);
                
                // Stop observing this element
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize skills animation when DOM is loaded
document.addEventListener('DOMContentLoaded', animateSkillBars);

/*==================== ABOUT STATS COUNTER ANIMATION ====================*/
function animateCounters() {
    const counters = document.querySelectorAll('.about_stat_number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const increment = target / 60; // Animation duration ~1 second at 60fps
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Initialize counter animation when DOM is loaded
document.addEventListener('DOMContentLoaded', animateCounters);
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')
        })
        target?.classList.add('qualification_active')
        
        tabs.forEach(t =>{
            t.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})
/*==================== SERVICES MODAL ====================*/
const modelViews = document.querySelectorAll('.services_model'),
      modelBtns = document.querySelectorAll('.services_button'),
      modelCloses = document.querySelectorAll('.services_model-close')


let model = function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}      

modelBtns.forEach((modelBtns,i)=>{
    modelBtns.addEventListener('click',() =>{
        model(i)
    })
})

modelCloses.forEach((modelClose)=>{
    modelClose.addEventListener('click',()=>{
        modelViews.forEach((modelView)=>{
            modelView.classList.remove('active-model')
        })
    })
})
/*==================== PROJECTS SWIPER  ====================*/
let projectsSwiper = new Swiper('.projects_swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    centeredSlides: false,
    
    pagination: {
        el: '.projects_swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    
    navigation: {
        nextEl: '.projects_swiper-button-next',
        prevEl: '.projects_swiper-button-prev',
    },
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        568: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },
    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    
    effect: 'slide',
    speed: 600,
    
    // Add error handling
    on: {
        init: function () {
            console.log('Projects Swiper initialized');
        },
        slideChange: function () {
            console.log('Slide changed');
        }
    }
});


// let swiper = new swiper(".portfolio_container", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     slidesPerGroup: 2,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']')?.classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']')?.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-up class
    if(this.scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== PROJECTS SWIPER ====================*/
let projectsSwiperInstance;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Projects Swiper
    projectsSwiperInstance = new Swiper('.projects_swiper', {
        loop: true,
        spaceBetween: 30,
        grabCursor: true,
        centeredSlides: false,
        
        // Responsive breakpoints
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            568: {
                slidesPerView: 1.5,
                spaceBetween: 25
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.projects_swiper-button-next',
            prevEl: '.projects_swiper-button-prev',
        },
        
        // Pagination
        pagination: {
            el: '.projects_swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        
        // Autoplay
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        
        // Effects
        effect: 'slide',
        speed: 600,
        
        // Events
        on: {
            init: function() {
                // Add entrance animation to visible slides
                this.slides.forEach((slide, index) => {
                    if (index < this.params.slidesPerView) {
                        slide.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
                    }
                });
            },
            slideChange: function() {
                // Reset and add animation to new visible slides
                this.slides.forEach(slide => {
                    slide.style.animation = '';
                });
                
                const activeIndex = this.activeIndex;
                const slidesPerView = this.params.slidesPerView;
                
                for (let i = 0; i < slidesPerView; i++) {
                    const slideIndex = (activeIndex + i) % this.slides.length;
                    const slide = this.slides[slideIndex];
                    if (slide) {
                        slide.style.animation = `fadeInUp 0.6s ease forwards ${i * 0.1}s`;
                    }
                }
            }
        }
    });

    // Initialize Certifications Swiper
    const certificationsSwiper = new Swiper('.certifications_swiper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        slidesPerView: 1, // Only one slide visible (containing grid)
        centeredSlides: false,
        
        // Navigation arrows
        navigation: {
            nextEl: '.certifications_swiper-button-next',
            prevEl: '.certifications_swiper-button-prev',
        },
        
        // Pagination
        pagination: {
            el: '.certifications_swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        
        // Autoplay
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        
        // Effects
        effect: 'slide',
        speed: 800,
        
        // Responsive breakpoints for spacing
        breakpoints: {
            768: {
                spaceBetween: 40,
            },
            1024: {
                spaceBetween: 50,
            }
        },
        
        // Events
        on: {
            init: function() {
                // Add entrance animation to grid cards
                document.querySelectorAll('.certification_card').forEach((card, index) => {
                    card.style.animation = `fadeInUp 0.8s ease forwards ${(index % 3) * 0.15}s`;
                });
            },
            slideChange: function() {
                // Add animation to new slide's cards
                const activeSlide = this.slides[this.activeIndex];
                if (activeSlide) {
                    const cards = activeSlide.querySelectorAll('.certification_card');
                    cards.forEach((card, index) => {
                        card.style.animation = '';
                        setTimeout(() => {
                            card.style.animation = `fadeInUp 0.8s ease forwards ${index * 0.15}s`;
                        }, 50);
                    });
                }
            }
        }
    });
});

/*==================== PROJECTS FILTER ====================*/
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.projects_filter');
    const projectSlides = document.querySelectorAll('.swiper-slide');

    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('projects_filter_active'));
            // Add active class to clicked button
            button.classList.add('projects_filter_active');

            const filterValue = button.dataset.filter;

            // Filter projects with animation
            projectSlides.forEach((slide, index) => {
                const projectCard = slide.querySelector('.project_card');
                
                if (filterValue === 'all' || projectCard.dataset.category.includes(filterValue)) {
                    slide.style.display = 'block';
                    // Add stagger animation
                    setTimeout(() => {
                        slide.style.opacity = '1';
                        slide.style.transform = 'translateY(0)';
                    }, index * 100);
                } else {
                    slide.style.opacity = '0';
                    slide.style.transform = 'translateY(20px)';
                    // Hide after animation
                    setTimeout(() => {
                        slide.style.display = 'none';
                    }, 300);
                }
            });

            // Refresh swiper after filtering
            if (projectsSwiperInstance) {
                setTimeout(() => {
                    projectsSwiperInstance.update();
                    projectsSwiperInstance.slideTo(0, 0);
                }, 500);
            }
        });
    });

    // Set initial active filter
    const allFilter = document.querySelector('[data-filter="all"]');
    if (allFilter) {
        allFilter.classList.add('projects_filter_active');
    }
    
    // Initialize slide styles
    projectSlides.forEach(slide => {
        slide.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});

/*==================== PROJECT ANIMATIONS ====================*/
// Enhanced project card animations
const observeProjects = () => {
    const projectCards = document.querySelectorAll('.project_card');
    
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `projectFadeIn 0.8s ease forwards`;
                entry.target.classList.add('project-visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        projectObserver.observe(card);
    });
};

// Initialize project animations when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeProjects);
} else {
    observeProjects();
}

// Enhanced keyframes for project animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes projectFadeIn {
        from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    .project-visible {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
    }
    
    /* Swiper slide transitions */
    .swiper-slide {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    /* Enhanced hover effects for swiper */
    .projects_swiper .swiper-slide:hover .project_card {
        transform: translateY(-12px) scale(1.02);
    }
    
    /* Smooth filter transitions */
    .swiper-slide[style*="display: none"] {
        pointer-events: none;
    }
`;
document.head.appendChild(style);

//                                   /* ============PROJECT END============== */

/*==================== CONTACT FORM ====================*/
document.addEventListener('DOMContentLoaded', function() {
    // EmailJS Configuration (user needs to configure their own EmailJS account)
    // Add your EmailJS configuration here:
    // const EMAILJS_SERVICE_ID = 'your_service_id';
    // const EMAILJS_TEMPLATE_ID = 'your_template_id';
    // const EMAILJS_PUBLIC_KEY = 'your_public_key';

    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('.contact_form_input');
    const submitBtn = document.getElementById('contact-form-submit');
    const emailBtn = document.getElementById('contact-form-email');
    const statusDiv = document.getElementById('contact-form-status');
    const messageInput = document.getElementById('message');
    const messageCounter = document.getElementById('message-counter');

    // Initialize character counter
    const updateMessageCounter = () => {
        if (messageInput && messageCounter) {
            const length = messageInput.value.length;
            const maxLength = 500;
            messageCounter.textContent = `${length}/${maxLength}`;
            
            if (length > maxLength * 0.9) {
                messageCounter.style.color = 'hsl(0, 70%, 60%)';
            } else if (length > maxLength * 0.7) {
                messageCounter.style.color = 'hsl(45, 100%, 50%)';
            } else {
                messageCounter.style.color = 'var(--text-color-light)';
            }
        }
    };

    // Input validation
    const validateField = (input) => {
        const field = input.closest('.contact_form_field');
        const errorSpan = field.querySelector('.contact_form_error');
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Clear previous states
        field.classList.remove('error', 'success');
        errorSpan.classList.remove('show');

        if (input.hasAttribute('required') && !value) {
            errorMessage = `${input.getAttribute('aria-label')} is required`;
            isValid = false;
        } else if (input.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = 'Please enter a valid email address';
                isValid = false;
            }
        } else if (input.name === 'user_name' && value && value.length < 2) {
            errorMessage = 'Name must be at least 2 characters long';
            isValid = false;
        } else if (input.name === 'message' && value && value.length < 10) {
            errorMessage = 'Message must be at least 10 characters long';
            isValid = false;
        }

        if (!isValid) {
            field.classList.add('error');
            errorSpan.textContent = errorMessage;
            errorSpan.classList.add('show');
        } else if (value) {
            field.classList.add('success');
        }

        return isValid;
    };

    // Validate entire form
    const validateForm = () => {
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        return isValid;
    };

    // Show status message
    const showStatus = (message, type = 'info') => {
        statusDiv.innerHTML = `<div class="contact_form_status ${type}">${message}</div>`;
        statusDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        if (type === 'success') {
            setTimeout(() => {
                statusDiv.innerHTML = '';
            }, 5000);
        }
    };

    // Set loading state
    const setLoadingState = (isLoading) => {
        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <div class="contact_form_loading">
                    <div class="spinner"></div>
                </div>
                <span class="contact_form_button_text">Sending...</span>
            `;
        } else {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <span class="contact_form_button_text">Send Message</span>
                <i class="ri-send-plane-line contact_form_button_icon"></i>
            `;
        }
    };

    // Send email via EmailJS
    const sendEmailJS = async (formData) => {
        // Check if EmailJS is configured
        if (typeof EMAILJS_SERVICE_ID === 'undefined' || 
            typeof EMAILJS_TEMPLATE_ID === 'undefined' || 
            typeof EMAILJS_PUBLIC_KEY === 'undefined') {
            throw new Error('EmailJS configuration missing. Please check EMAIL_SETUP_GUIDE.md');
        }

        // Initialize EmailJS
        emailjs.init(EMAILJS_PUBLIC_KEY);

        // Send email
        return await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            user_name: formData.get('user_name'),
            user_email: formData.get('user_email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            reply_to: formData.get('user_email')
        });
    };

    // Fallback email solution
    const sendFallbackEmail = (formData) => {
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const subject = formData.get('subject') || 'Portfolio Contact';
        const message = formData.get('message');

        const mailtoSubject = encodeURIComponent(`Portfolio: ${subject}`);
        const mailtoBody = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Subject: ${subject}\n\n` +
            `Message:\n${message}\n\n` +
            `---\n` +
            `Sent from portfolio contact form`
        );

        const mailtoLink = `mailto:your-email@example.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        window.open(mailtoLink);
    };

    // Event listeners
    if (messageInput) {
        messageInput.addEventListener('input', updateMessageCounter);
        updateMessageCounter(); // Initialize counter
    }

    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            // Clear error state while typing
            const field = input.closest('.contact_form_field');
            if (field.classList.contains('error')) {
                field.classList.remove('error');
                const errorSpan = field.querySelector('.contact_form_error');
                errorSpan.classList.remove('show');
            }
        });

        // Focus/blur effects
        input.addEventListener('focus', () => {
            input.closest('.contact_form_field').classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.closest('.contact_form_field').classList.remove('focused');
        });
    });

    // Form submission
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (!validateForm()) {
                showStatus('Please fix the errors above and try again.', 'error');
                return;
            }

            const formData = new FormData(form);
            setLoadingState(true);

            try {
                // Try EmailJS first
                await sendEmailJS(formData);
                showStatus('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
                
                // Reset character counter
                if (messageCounter) {
                    messageCounter.textContent = '0/500';
                    messageCounter.style.color = 'var(--text-color-light)';
                }

                // Clear field states
                inputs.forEach(input => {
                    input.closest('.contact_form_field').classList.remove('success', 'error', 'focused');
                });
                
            } catch (error) {
                console.error('EmailJS Error:', error);
                showStatus(
                    '⚠️ EmailJS is not configured. Using fallback email method...', 
                    'info'
                );
                
                setTimeout(() => {
                    sendFallbackEmail(formData);
                    showStatus(
                        'Email client opened. Please send the pre-filled email to complete your message.', 
                        'info'
                    );
                }, 1000);
            } finally {
                setLoadingState(false);
            }
        });
    }

    // Direct email button
    if (emailBtn) {
        emailBtn.addEventListener('click', () => {
            const mailtoLink = 'mailto:your-email@example.com?subject=Portfolio%20Contact&body=Hi%20Priyam,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards';
            window.open(mailtoLink);
        });
    }
});

/*==================== CONTACT ANIMATIONS ====================*/
// Animate contact cards on scroll
const observeContactCards = () => {
    const contactCards = document.querySelectorAll('.contact_card, .contact_form_card');
    
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = `fadeInUp 0.8s ease forwards`;
                }, index * 150);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    contactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        contactObserver.observe(card);
    });
};

// Initialize contact animations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeContactCards);
} else {
    observeContactCards();
}