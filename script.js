// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-image');

// Add event listener to each image
galleryImages.forEach((image) => {
  image.addEventListener('click', (e) => {
    // Get the image src and alt text
    const src = e.target.src;
    const alt = e.target.alt;

    // Get the lightbox container and content
    const lightbox = document.querySelector('.lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const lightboxBlur = document.querySelector('.lightbox-blur');
    const backgroundWrapper = document.querySelector('.background-wrapper');

    // Set the lightbox image and caption
    lightboxImage.src = src;
    lightboxCaption.textContent = alt;

    // Add the blur effect to the background wrapper
    backgroundWrapper.classList.add('blur');

    // Show the lightbox
    lightbox.classList.add('open');
  });
});

// Add event listener to close the lightbox
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('lightbox')) {
    document.querySelector('.lightbox').classList.remove('open');
    document.querySelector('.background-wrapper').classList.remove('blur');
  }
});


const languageToggle = document.getElementById("language-toggle");
const body = document.body;

// Default Language
let currentLanguage = "english";

const section = document.getElementById("our-services-section");
const arrow = document.querySelector("#our-services-section .add-box-container");

document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("our-services-section");
  const arrow = document.querySelector("#our-services-section .add-box-container");

  if (!section || !arrow) {
      console.error("لم يتم العثور على العناصر المطلوبة!");
      return;
  }

  // إخفاء السهم بشكل افتراضي
  arrow.style.display = "none"; 

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // إظهار السهم عندما يكون القسم في نافذة العرض
              arrow.style.display = "block";
          } else {
              // إخفاء السهم عندما يخرج القسم من نافذة العرض
              arrow.style.display = "none";
          }
      });
  }, {
      root: null,  // مراقبة العنصر داخل نافذة العرض
      threshold: 0.5  // السهم يظهر عندما يكون 50% من القسم داخل النافذة
  });

  // بدء المراقبة على قسم "Our Services"
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.querySelector(".add-box");  // السهم
  const defaultContent = document.getElementById("default-content");  // المحتوى الأول
  const extraContent = document.getElementById("extra-services");  // المحتوى الثاني

  // التأكد من وجود العناصر
  if (arrow && defaultContent && extraContent) {
      // التأكد من أن المحتوى الأول ظاهر والمحتوى الثاني مخفي في البداية
      extraContent.style.display = "none"; 
      defaultContent.style.display = "grid"; 

      arrow.addEventListener("click", function () {
          // التبديل بين إظهار وإخفاء المحتويات
          if (defaultContent.style.display === "grid") {
              defaultContent.style.display = "none";  // إخفاء المحتوى الأول
              extraContent.style.display = "grid";  // إظهار المحتوى الثاني
              arrow.classList.add("open");  // تدوير السهم لليمين
          } else {
              defaultContent.style.display = "grid";  // إظهار المحتوى الأول
              extraContent.style.display = "none";  // إخفاء المحتوى الثاني
              arrow.classList.remove("open");  // إعادة السهم لوضعه الطبيعي
          }
      });
  }
});

// الصفحة ككل //
// الحصول على السهم
document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopButton = document.getElementById('scroll-to-top');

  // التحقق من التمرير
  window.addEventListener('scroll', () => {
      if (window.scrollY > 100) { // عندما يتجاوز التمرير 100px
          scrollToTopButton.classList.add('show'); // إضافة الفئة show لإظهار السهم
      } else {
          scrollToTopButton.classList.remove('show'); // إزالة الفئة show لإخفاء السهم
      }
  });

  // عند الضغط على السهم، يتم التمرير إلى أعلى الصفحة
  scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // التمرير السلس
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const bubbleContainer = document.querySelector(".animated-bubbles");

  // عدد الكرات
  const numberOfBubbles = 30;

  for (let i = 0; i < numberOfBubbles; i++) {
      const bubble = document.createElement("span");
      const size = Math.random() * 150 + 50; // حجم الكرات العشوائي (50px - 150px)
      const positionX = Math.random() * 100; // موضع الكرات العشوائي أفقياً
      const positionY = Math.random() * 100; // موضع الكرات العشوائي عمودياً

      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${positionX}%`;
      bubble.style.top = `${positionY}%`; // تحديد الموضع العشوائي العمودي
      bubble.style.animationDelay = `${Math.random() * 5}s`; // تأخير عشوائي للحركة
      bubble.style.animationDuration = `${Math.random() * 5 + 5}s`; // مدة الحركة العشوائية

      bubbleContainer.appendChild(bubble);
  }
});


 // تحديد الفيديو والـ wrapper
 const video = document.getElementById("company-logo-video");
 const videoWrapper = document.getElementById("video-wrapper");

 // عند الانتهاء من الفيديو، إخفاء الفيديو وعرض المحتوى الرئيسي
 video.addEventListener("ended", function() {
     videoWrapper.style.display = "none";
     document.getElementById("main-content").style.display = "block";
 });

 // عند النقر على الفيديو، إخفاء الفيديو وعرض المحتوى الرئيسي
 videoWrapper.addEventListener("click", function() {
     videoWrapper.style.display = "none";
     document.getElementById("main-content").style.display = "block";
 });


 document.querySelector('.more-btn').addEventListener('click', function() {
    const extraItems = document.querySelector('.extra-items');
    extraItems.style.display = (extraItems.style.display === 'block') ? 'none' : 'block';
});






document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    // Toggle the menu when the burger button is clicked
    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        navList.classList.toggle('show'); // Toggle visibility of the nav list
    });

    // Close the menu if clicked outside of it
    document.addEventListener('click', function (event) {
        // Check if the click target is not the menu toggle or the nav list
        if (!menuToggle.contains(event.target) && !navList.contains(event.target)) {
            navList.classList.remove('show'); // Hide the menu if click is outside
        }
    });

    // Prevent click on the nav list from propagating to document click listener
    navList.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click from propagating to document
    });
});


