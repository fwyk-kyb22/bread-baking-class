

$(function(){

  $(".day a").hide(); 
  $(".meeting__container").css('overflow-y','hidden');
  
  $(".day").hover(
    function () {
      $(this).find('.meeting__new--btn').show();
      $(this).find(".meeting__container").css('overflow-y','visible');
      $(this).find(".meeting__container").css('height','auto');
    },
    function () {
      $(this).find('.meeting__new--btn').hide();
      $(this).find(".meeting__container").css('overflow-y','hidden');
      $(this).find(".meeting__container").css('height','80px');
    }
  );
  $(".meeting__container__one").hover(
    function () {
      $(this).find('a').show();
    },
    function () {
      $(".day a").hide();
    }
  );
  $('.details_btn').on('click',function(){
    $(this).find('.popup').show();
  });

  $('.popup__bg').on('click',function(){
    $(this).parent().fadeOut();
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