

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
  

  $(".day .main--left__calendar--container").hide(); 
  $('.day .main--left__calendar--mark').show();

  $(".day").hover(
    function () {
      $(this).find('.main--left__calendar--container').show();
    },
    function () {
      $(".day .main--left__calendar--container").hide();
    }
  );
  $(".day").hover(
    function () {
      $(this).find(".main--left__calendar--mark").hide();
    },
    function () {
      $(".day .main--left__calendar--mark").show();
    }
  );
});