
// $(function () {
//   toastr.success("hello")
// });
$(function(){

  $(".day a").hide(); 
  $(".day .meeting__container--content").hide(); 
  $(".day .main--left__calendar").hide(); 

  $(".day").hover(
    function () {
      $(this).find('a').show();
      $(this).css("background-color","#bfd8d8");
      $(this).find('.meeting__container--content').show();
    },
    function () {
      $(".day a").hide();
      $(this).css("background-color","");
      $(".day .meeting__container--content").hide();
    }
  );

  $(".day").hover(
    function () {
      $(this).find('.main--left__calendar').show();
      
    },
    function () {
      $(".day .main--left__calendar").hide();
     
    }
  );
});