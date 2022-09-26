// 토글 메뉴
$(function(){
    //토글 메뉴 플러그인 실행
    var toggle = $('#toggle_icon');
    var menu = $('#menu ul');
    $(toggle).on('click', function (e){
        //이벤트 버블링이란 버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상
        e.preventDefault();//이벤트 버블링을 막기 위한 코드(이벤트가 부모한테까지 전파가 되지 않도록 함, 지정한 것에만 이벤트가 발생하도록)
        menu.slideToggle();//효과 메서드, slideUp(), slideDown() 효과 동시 적용
    });
});
//   토글메뉴 ul 사라짐 방지
            $(window).resize(function(){
                if($(window).width()>764){
                    $("#menu ul").show();
                }else {
                    $("#menu ul").hide();
                }
            });

// // 탭 메뉴
// $(function(){
//     $('.tabcontent > div').hide();
//     $('.tabnav a').click(function () {
//       $('.tabcontent > div').hide().filter(this.hash).fadeIn();
//       $('.tabnav a').removeClass('active');
//       $(this).addClass('active');
//       return false;
//     }).filter(':eq(0)').click();
//     });

// About영역 스크롤 시 등장
$(document).ready(function() {
    $(window).scroll( function(){
        $('#about').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element/2 ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
            
        }); 
    });
  });

// Skills영역 스크롤 시 등장
// $(window).bind('mousewheel', function(event) {
//     if (event.originalEvent.wheelDelta <= 0) {
//         if(!$('#skills_box').hasClass('opacity')){
//             $('#skills_box').addClass('opacity');
//         }
//     } 
//     });    