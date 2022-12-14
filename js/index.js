
document.addEventListener("DOMContentLoaded", () => {

    //화면
    let section = document.getElementsByClassName('cd-section')
    let header = document.getElementById('header')
    let gototop = document.getElementById('gototop')



    //모바일
    let gnb = document.getElementById('gnb')    
    let trigger = document.getElementById('trigger')
    let menu = document.getElementById('menu').children



    window.addEventListener('scroll', () => { 
        if(window.scrollY > 50) {
            header.classList.add('active')
            gototop.classList.add('active')
        } else {
            header.classList.remove('active')
            gototop.classList.remove('active')
        }
    });

    trigger.onclick = () => {
        trigger.classList.toggle('active')
        gnb.classList.toggle('active')
    }

    //메뉴 클릭 이벤트
    for(let i=0; i< menu.length; i++) {
        menuClick(i) 
    }
    function menuClick(i) {
        menu[i].onclick = () => {
            if(trigger.classList.contains('active'))trigger.classList.remove('active')
            
            if(gnb.classList.contains('active'))gnb.classList.remove('active')
        }
    }

    //section click event
    for(let i=0; i< section.length; i++) {
        sectionClick(i) 
    }
    function sectionClick(i) {
        section[i].onclick = () => {
            if(trigger.classList.contains('active'))trigger.classList.remove('active')
            if(gnb.classList.contains('active'))gnb.classList.remove('active')
        }
    }

    //slick history
    $('.history-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    })

    //slick project phoro
    $('.project-photo').slick({
        
        infinite: true,
        speed: 500,
        fade : true,
        autoplay : true,
        autoplaySpeed: 2000,
        cssEase : 'linear'
    })


});



