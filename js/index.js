
// Swiper code

const swiper = new Swiper('.swiper', {
  
    direction: 'horizontal',
    loop: true,
  

    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
  });

//   Video popup code

$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: true
    });
  });

  //Monthly Pricing

  document.querySelector(".monthly-price").addEventListener("click", myFunction1);

  function myFunction1() {
      document.querySelector("#beginner").innerHTML = "$20";
      document.querySelector("#personal").innerHTML = "$29";
      document.querySelector("#unlimited").innerHTML = "$79";
      document.querySelector('.monthly-price').style.color="#0065F2";
      document.querySelector('.monthly-selected').style.backgroundColor="#0065F2";

      document.querySelector('.yearly-price').style.color="Black";
      document.querySelector('.yearly-selected').style.backgroundColor="white";
    }
  

//yearly Pricing 
  
document.querySelector(".yearly-price").addEventListener("click", myFunction);

function myFunction() {
    document.querySelector("#beginner").innerHTML = "$199";
    document.querySelector("#personal").innerHTML = "$299";
    document.querySelector("#unlimited").innerHTML = "$399";
    document.querySelector('.yearly-price').style.color="#0065F2";
    document.querySelector('.yearly-selected').style.backgroundColor="#0065F2";

    document.querySelector('.monthly-price').style.color="Black";
    document.querySelector('.monthly-selected').style.backgroundColor="white";
  }

//Header Collapse
  document.querySelector("#collapse-icon").addEventListener("click", myFunction3);

  function myFunction3() {
    document.querySelector(".acme-logo").style.display="none";
    document.querySelector(".star").style.display="none";
 
  }
