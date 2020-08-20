

$(function(){

  
  $(".meeting__container").css('overflow','hidden');
  
  $(".day").hover(
    function () {
      $(this).find('.meeting__new--btn').show();
      $(this).find(".meeting__container").css('overflow','visible');
      $(this).find(".meeting__container").css('height','auto');
    },
    function () {
      $(this).find('.meeting__new--btn').hide();
      $(this).find(".meeting__container").css('overflow','hidden');
      $(this).find(".meeting__container").css('height','80px');
    }
  );
 
  $('.details_btn').on('click',function(){
    $(this).find('.popup__bg').show();
    $(this).find('.popup--inner').show();
  });

  $('.popup__bg').on('click',function(){
    $(this).fadeOut();
    $(this).parent().find('.popup--inner').fadeOut();
  });
  

});