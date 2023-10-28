(function ($) {
    "use strict";


////***Count down JS
// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date().getTime() + 18100000;        
// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {
  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();
  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;
  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Keluarkan hasil dalam elemen dengan id = "demo"
  document.getElementById("days").innerHTML = days 
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds
  document.getElementById("days-label").innerHTML = "hari" 
  document.getElementById("hours-label").innerHTML = "jam"
  document.getElementById("minutes-label").innerHTML = "menit"
  document.getElementById("seconds-label").innerHTML = "detik"
  // Jika hitungan mundur selesai, tulis beberapa teks 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = ""
    document.getElementById("minutes").innerHTML = ""
    document.getElementById("seconds").innerHTML = ""
    document.getElementById("days-label").innerHTML = "DISKON" 
    document.getElementById("hours-label").innerHTML = "ANDA"
    document.getElementById("minutes-label").innerHTML = "SUDAH"
    document.getElementById("seconds-label").innerHTML = "KADALUARSA"
  }
}, 1000);




    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').addClass('sticky-tops shadow-sm');
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            },0 , 'easeInOutExpo');
            
            // if ($(this).parents('.navbar-nav').length) {
            //     $('.navbar-nav .active').removeClass('active');
            //     $(this).closest('a').addClass('active');
            // }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100  ) {
            $('.float').fadeIn('slow');
            
        } else {
            $('.float').fadeOut('slow');
             
        }
    });
 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100  ) {
            $('.floats').fadeIn('slow');
            
        } else {
            $('.floats').fadeOut('slow');
             
        }
    });
  


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });




    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    $(document).ready(function($){
         // magnific popup
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    });
    jQuery(window).on("load",function(){
        jQuery(".loader").fadeOut(1000);
    });
    
})(jQuery);

