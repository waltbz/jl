var flag=1;
var is_running=false;
$(function(){
  $('.page').on('mousewheel', function(event, delta, deltaX, deltaY) {
      if(delta==-1){
        if(flag==3){
          return;
        }else{
        /*  $('body').css('background',$('.page.active').css('background'));
          $('.page.active').animate({height:"toggle"},500).removeClass('active').next('.page').slideDown(500).addClass('active');
          $('.nav-item-list.active').removeClass('active').next('.nav-item-list').addClass('active');
          flag++;*/
          nextPage();
        }
     }else{
       if(flag==1){
         return;
       }else{
        /* $('body').css('background',$('.page.active').css('background'));
         $('.page.active').animate({height:"toggle"},500).removeClass('active').prev('.page').slideDown(500).addClass('active');
         $('.nav-item-list.active').removeClass('active').prev('.nav-item-list').addClass('active');
         flag--;*/
         prePage();
       }
     }
 });

 $('.nav-item-list a').on('mouseenter',function(){
    $(this).prev().fadeIn(200);
 });
 $('.nav-item-list a').on('mouseleave',function(){
    $(this).prev().fadeOut(200);
 });
 $('.nav-item-list a').on('click',function(){
   var $thisId = $(this).attr('en');
   if($thisId=='page1'){
     flag=1;
   }else if ($thisId == 'page2') {
     flag=2;
   }else{
     flag=3;
   }
   if($thisId == $('.page.active').attr('id')){
     return;
   }else {
    // $('body').css('background',$('.page.active').css('background'));
     $('.page.active').hide().removeClass('active');
     $('.nav-item-list.active').removeClass('active');
     $(this).parent().addClass('active');
     $("#"+$thisId).slideDown(800).addClass('active');
   }
 });
$('.arrow').on('click',function(){
  if(flag==3){
    return;
  }else{
    nextPage();
  }
});

});
var nextPage = function(){
  //$('body').css('background',$('.page.active').css('background'));
  $('.page.active').animate({height:"toggle"},0).removeClass('active').next('.page').slideDown(800).addClass('active');
  $('.nav-item-list.active').removeClass('active').next('.nav-item-list').addClass('active');
  flag++;
}
var prePage = function(){
//  $('body').css('background',$('.page.active').css('background'));
  $('.page.active').animate({height:"toggle"},0).removeClass('active').prev('.page').slideDown(800).addClass('active');
  $('.nav-item-list.active').removeClass('active').prev('.nav-item-list').addClass('active');
  flag--;
}
