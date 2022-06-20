var deviceSize1 = 1024;
var deviceSize2 = 768;

// function scrollOX(status) {
//     $('html').css({
//         overflowY: status
//     })
//     var htmlWidth = $('html').width()
//     return htmlWidth
// }
// var scX = scrollOX('hidden')
// var scO = scrollOX('scroll')
// var scD = scX - scO
// if (scD > 0) {
//     deviceSize1 = deviceSize1 - scD
//     deviceSize2 = deviceSize2 - scD
// }

function init() {
    var ww = $(window).width()
    if (ww >= deviceSize1 && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('tablet mobile')
        $('html').css({
            overflow: 'auto'
        })
        $('#header .block').css({
            position:'fixed',
            top:'0',
            left:'0',
            right:'0',
            background:'#000'
        })
        $('#header #nav').css({
            position: 'absolute',
            top: '65%',
            transform: 'translateY(-50%)',
            right: '2%',
            background: 'none',
            left: 'unset',
            overflow: 'unset',
            bottom: 'unset'
        })
        $('#header #nav .depth1').css({
            position: 'unset',
            top: 'unset',
            height: 'unset',
            right: 'unset',
            width: 'unset',
            background: 'unset',
            paddingTop: 'unset',
        })
        $('#header #nav .depth1 > li > a').next().hide()
        $('html').scrollTop(0)

    } else if (ww > deviceSize2 && ww <= deviceSize1 && !$('html').hasClass('tablet')) {
        $('html').addClass('tablet').removeClass('pc mobile')
        $('html').css({
            overflow: 'auto'
        })
        $('#header .block').css({
            position:'absolute',
            top: '0px',
            right:'0',
            transform: 'translateY(0%)',
            left: '0%',
            bottom: '0px',
            overflowY: 'auto',
            overflowX: 'hidden'
        })
        $('#header #nav').css({
            position: 'fixed',
            top: '0%',
            transform: 'translateY(0%)',
            background: 'rgba(0,0,0,0.5)',
            right: '0px',
            left: '100%',
            bottom: '0px',
            overflowY: 'auto',
            overflowX: 'hidden'
        })
        $('#header #nav .depth1').css({
            position: 'absolute',
            top: '0',
            height: '100%',
            right: '-200px',
            width: '200px',
            background: '#000',
            paddingTop: '50px',
        })
        $('#header .opennav').removeClass('on')
        $('#header .opennav i').removeClass('fa-times').addClass('fa-bars')
        $('html').scrollTop(0)

    } else if (ww <= deviceSize2 && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('tablet pc')
        $('html').css({
            overflow: 'auto'
        })
        $('#header .block').css({
            position:'fixed',
            top: '0px',
            right:'0',
            transform: 'translateY(0%)',
            left: '0%',
            bottom: '0px',
            overflowY: 'auto',
            overflowX: 'hidden'
        })
        $('#header #nav').css({
            position: 'fixed',
            top: '5%',
            transform: 'translateY(0%)',
            right: '0px',
            background: 'rgba(0,0,0,0.5)',
            left: '100%',
            bottom: '0px',
            overflowY: 'auto',
            overflowX: 'hidden'
        })
        $('#header #nav .depth1').css({
            position: 'absolute',
            top: '0',
            height: '100%',
            right: '-200px',
            width: '200px',
            //background: '#000',
            paddingTop: '50px',
        })
        $('#header .opennav').removeClass('on')
        $('#header .opennav i').removeClass('fa-times').addClass('fa-bars')
        $('html').scrollTop(0)
    }
}
init()

$(window).on('resize', function () {
    init()
})
$('#header .opennav').on('click', function () {

    if (!$(this).hasClass('on')) {
        $('html').css({
            overflow: 'hidden'
        })
        $(this).addClass('on')
        $(this).next().animate({
            left: 0
        }, 300)
        $(this).next().find('.depth1').animate({
            right: 0
        }, 300)
        $(this).find('i').removeClass('fa-bars').addClass('fa-times')

    } else {
        $('html').css({
            overflowY: 'auto',
        })
        $(this).removeClass('on')
        $(this).next().animate({
            left: '100%'
        }, 300)
        $(this).next().find('.depth1').animate({
            right: '-200px'
        }, 300)
        $(this).next().find('.depth2').hide()
        $(this).find('i').removeClass('fa-times').addClass('fa-bars')
    }
})


$(window).on('scroll', function () {
    var sct = $(this).scrollTop()
    if (sct > 10) {
        $('#header .block ').css({
            position:'fixed',
            top:0, left:'0', right:'0',
            // background:'none',
            background:'#000',
            width:'100%',
        })
        $('#header #nav').css({
            color:'#fff',
            position:'absolute', top:'65%', 
            transform:'translateY(-0%)',
            right:'2%',
        })
    } else {
        $('#header #nav').css({ 
            // position:fixed,
            // top:0, left:0, right:0,
            //background: 'none',
            position:'static',
            width:'100%',
            // position:'static', top:'65%', transform:'translateY(-0%)',
            // right:'2%'              
        })
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


$('#header .top_menu button').on('mouseover mouseout', function () {
    $(this).toggleClass('on')
})
$('#header .top_menu a').on('mouseover mouseout', function () {
    $(this).toggleClass('on')
})
$('#header #nav .depth1 > li').on('mouseover mouseout', function () {
    $(this).toggleClass('on')
})

$('.top_menu .login').on('click', function () {
    $('.article1 #loginform').css({
        display: 'block'
    })
})
$('.article1 .close').on('click', function () {
    $('.article1 #loginform').hide()
})
$('.top_menu .join').on('click', function () {
    $('.article1 #joinform').css({
        display: 'block'
    })
})
$('.article1 .close').on('click', function () {
    $('.article1 #joinform').hide()
})

function openWindowPop(url, name) {
    var options = 'top=100, left=650, width=400, height=740, status=no, menubar=no, toolbar=no, resizable=no';
    window.open(url, name, options);
}