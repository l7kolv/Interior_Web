$( document ).ready( function() {
    $( '#slide_div' ).slick( { //슬라이드 시작
        autoplay: true, //자동 재생
        autoplaySpeed: 3000, //속도
        prevArrow: $(".slick-prev"), //왼쪽 화살표
        nextArrow: $(".slick-next"), //오른쪽 화살표
        dots:true
    } );
  } );