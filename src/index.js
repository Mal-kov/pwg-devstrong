import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js'
import "@fortawesome/fontawesome-free/css/all.css";
import 'owl.carousel';
import './scss/index.scss'





$(document).ready(function(){
    $('.owl-carousel-upSell').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        // responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });

    $('.owl-carouselMainSlider').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        dots: true,
        items:1,
        // responsiveClass:true,
        
    });
  });