var deviceSize1 = 1024;
var deviceSize2 = 768;

function init() {
    var ww = $(window).width()
    $('html').scrollTop(0)
    if (ww >= deviceSize1 && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('tablet mobile')
        $('#header .depth2').hide()
    } else if (ww > deviceSize2 && ww <= deviceSize1 && !$('html').hasClass('tablet')) {
        $('html').addClass('tablet').removeClass('pc mobile')
        
    } else if (ww <= deviceSize2 && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('tablet pc')
    }
}
init()

$(window).on('resize', function () {
    init()
})
$('#header .opennav').on('click', function () {

    if (!$(this).hasClass('on')) {
        $(this).addClass('on')
        $(this).find('i').removeClass('fa-bars').addClass('fa-times')
        $('#header #navi').addClass('on')
    } else {
        $(this).removeClass('on')
        $(this).find('i').removeClass('fa-times').addClass('fa-bars')
        $('#header #navi').removeClass('on')
    }
})


$(window).on('scroll', function () {
    var sct = $(this).scrollTop()
    if (sct > 10) {
        $('#header .block').addClass('on')
    } else {
        $('#header .block').removeClass('on')
    }
})

// $(window).on('scroll', function () {
//     var sct = $(this).scrollTop()
//     if (sct > 100) {
//         $('#header .block').addClass('on')
//     } else {
//         $('#header .block').removeClass('on')
//     }

// })


// $('#header .top_menu a').on('mouseover mouseout', function () {
//     if ( $('html').hasClass('pc') ) {
//         $(this).toggleClass('on')
//     }
// })
// $('#header .top_menu a').on('mouseover mouseout', function () {
//     if ( $('html').hasClass('pc') ) {
//         $(this).toggleClass('on')
//     }
// })
$('#header #nav .depth1 > li').on('mouseover mouseout', function () {
    if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').toggle()
    }
})
$('#header #navi .depth1 > li:nth-child(3) > a').on('click', function () {
    if ( !$('html').hasClass('pc') ) {
        $(this).next().slideToggle()
    }
    return false
})





// $('.login').on('click', function () {
//     $(' #loginform').css({
//         display: 'block'
//     })
// })
// $('.article1 .close').on('click', function () {
//     $('.article1 #loginform').hide()
// })
// $('.top_menu .join').on('click', function () {
//     $('.article1 #joinform').css({
//         display: 'block'
//     })
// })
// $('.article1 .close').on('click', function () {
//     $('.article1 #joinform').hide()
// })
// setTimeout(function() {
//     opener.location.reload(); //부모창 리프레쉬
//     self.close(); //현재창 닫기
//     }, 2000); // 2초후 실행 1000당 1초




function openWindowPop(url, name) {
    var options = 'top=100, left=650, width=400, height=740, status=no, menubar=no, toolbar=no, resizable=no';
    window.open(url, name, options);
}

