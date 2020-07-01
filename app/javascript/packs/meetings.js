
// $(function () {
//   toastr.success("hello")
// });
$(function(){
  
  $(".day a").hide(); 
  $(".day a").hide(); 

  $(".day").hover(
    function () {
      $(this).find('a').show();
    },
    function () {
      $(".day a").hide();
    }
  );
  $(".day").hover(
    function () {
      $(this).css("background-color","#bfd8d8");
    },
    function () {
      $(this).css("background-color","#ffffff");
    }
  );
});