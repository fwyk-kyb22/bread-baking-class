

$(function(){

  $(".day a").hide(); 
  $(".meeting__container__one .meeting__container--content").hide(); 
  $(".meeting__container").css('overflow-y','hidden');
  $(".day .main--left__calendar--container").hide(); 

  $(".day").hover(
    function () {
      $(this).css("background-color","#bfd8d8");
      $(this).find('.meeting__new--btn').show();
      $(this).find(".meeting__container").css('overflow-y','visible');
      $(this).find(".meeting__container").css('height','auto');
      $(this).find('.meeting__container--content').show();
    },
    function () {
      $(this).css("background-color","");
      $(this).find('.meeting__new--btn').hide();
      $(this).find(".meeting__container").css('overflow-y','hidden');
      $(this).find(".meeting__container").css('height','80px');
      $(this).find('.meeting__container--content').hide();
    }
  );
  $(".meeting__container__one").hover(
    function () {
      $(this).find('.meeting__container--content').show();
      $(this).find('a').show();
    },
    function () {
      $(".day .meeting__container--content").hide();
      $(".day a").hide();
    }
  );

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