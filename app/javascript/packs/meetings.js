

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
  $(".rate--1").click(
    function () {
      $(this).parent().find(".rate--1").find(".star--on").show();
      $(this).parent().find(".rate--1").find(".star--off").hide();
      $(this).parent().find(".rate--2").find(".star--on").hide();
      $(this).parent().find(".rate--2").find(".star--off").show();
      $(this).parent().find(".rate--3").find(".star--on").hide();
      $(this).parent().find(".rate--3").find(".star--off").show();
    }
  );
  $(".rate--2").click(
    function () {
      $(this).parent().find(".rate--1").find(".star--on").show();
      $(this).parent().find(".rate--1").find(".star--off").hide();
      $(this).parent().find(".rate--2").find(".star--on").show();
      $(this).parent().find(".rate--2").find(".star--off").hide();
      $(this).parent().find(".rate--3").find(".star--on").hide();
      $(this).parent().find(".rate--3").find(".star--off").show();
    }
  );
  $(".rate--3").click(
    function () {
      $(this).parent().find(".rate--1").find(".star--on").show();
      $(this).parent().find(".rate--1").find(".star--off").hide();
      $(this).parent().find(".rate--2").find(".star--on").show();
      $(this).parent().find(".rate--2").find(".star--off").hide();
      $(this).parent().find(".rate--3").find(".star--on").show();
      $(this).parent().find(".rate--3").find(".star--off").hide();
    }
  );
});