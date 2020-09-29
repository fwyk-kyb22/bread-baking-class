

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
  // $('#star').raty({
  //   score: 5,
  //   number:     10,
  //   size: 36,
  //   starOff: "#{asset_path('star-off.png')}",
  //   starOn: "#{asset_path('star-on.png')}",
  //   starHalf: "#{asset_path('star-half.png')}",
  //   scoreName: 'meetings[rate]',
  //   half: true,
  //   readOnly: false  
  // });
  // $("#star").raty(
  //   {
  //   score: 4, starType: 'i',
  //   cancelOff: '/cancel-off.png',
  //   cancelOn: '/cancel-on.png',
  //   starHalf: '/star-half.png',
  //   starOff: '/star-off.png',
  //   starOn: '/star-on.png'
  // })
  // $('#star').raty({ score: 3, path: '/assets/'});
});