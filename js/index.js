var flag = true
window.addEventListener('scroll', () => { 
    //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
console.log(window.scrollX, window.scrollY);

var sct = $(this).scrollTop()
if (300< sct <500 && flag ) {
    flag = false
    $({
        val: 0
    }).animate({
        val: 500
    }, {
        duration: 1000,
        step: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $(".number").text(num);
        },
        complete: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $(".number").text(num);
        }
    });
    
    $({
        val: 0
    }).animate({
        val: 5.0
    }, {
        duration: 1000,
        step: function () {
            var num = numberWithCommas(this.val.toFixed(1));
            $(".number_math").text(num);
        },
        complete: function () {
            var num = numberWithCommas(this.val.toFixed(1));
            $(".number_math").text(num);
        }
    });
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}else if (sct==0) {
    flag = true;
}

// if ( 200 > sct <= 700) {
// $('.article3 .dr ').css({
//     animation: 'fadeInUp 2s' 
// })
// $('.article3 .fx ').css({
//     animation: 'fadeInUpp 2s',
//     // transform: 'translateX(-5%)'
// })
// }else {
//     return false;
// } 

if ( 500 < sct < 700) {
    $('.article3 .dr_li ').addClass('on')
    $('.article3 .fx_li ').addClass('on')
    }else{
    $('.article3 .dr_li ').removeClass('on')
    $('.article3 .fx_li ').removeClass('on')
} 

if (sct > 1000){
    $('#section .article4 .slideInner_1').addClass('on')
}else{
    $('#section .article4 .slideInner_1').removeClass('on')
}
if (sct > 1400){
    $('#section .article4 .slideInner_2').addClass('on')
}else{
    $('#section .article4 .slideInner_2').removeClass('on')
}
if (sct > 2200){
    $('#section .article4 .slideInner_3').addClass('on')
}else{
    $('#section .article4 .slideInner_3').removeClass('on')
}


});

// $(window).on('scroll', function () {
//     var sct = $(this).scrollTop()
//     if (sct > 10  ) {
//         $('.article2 .number ').addClass('on')
//         } else {
//             $('.article2 .number ').removeClass('on')
//         }        
// })



$('.slide-group').slick({
    autoplay:true,
    autoplaySpeed:2000,
    speed:2000,
    dots:true,
    arrows:false,
    fade:false,
    vertical:true, 
    slidesToShow:1,
    slidesToScroll:1,
})
$('.slideInner_1').slick({
    autoplay:true,
    autoplaySpeed:2000,
    speed:2000,
    dots:false,
    arrows:false,
    fade:false,
    slidesToShow:3,
    slidesToScroll:3,
    responsive: [ 
        { 
            breakpoint: 769, 
            settings: {    
                slidesToShow:2
            } 
        }
    ]
    
})
$('.slideInner_2').slick({
    autoplay:true,
    autoplaySpeed:2000,
    speed:2000,
    dots:false,
    arrows:false,
    fade:false,
    slidesToShow:4,
    slidesToScroll:4,
    responsive: [ 
        { 
            breakpoint: 769, 
            settings: {    
                slidesToShow:2
            } 
        }
    ]
})
$('.slideInner_3').slick({
    autoplay:true,
    autoplaySpeed:2000,
    speed:2000,
    dots:false,
    arrows:false,
    fade:false,
    slidesToShow:3,
    slidesToScroll:3,
    responsive: [ 
                    { 
                        breakpoint: 769, 
                        settings: {    
                            slidesToShow:2
                        } 
                    }
                ]
})


