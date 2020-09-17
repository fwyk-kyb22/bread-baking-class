$(function() {
  function buildHTML(comment) {
    if(comment.user_admin == 1){
      var html =`<div class="schedules__comments__list__box admin--comment " data-comment-id="${comment.id}">
                  <div class="schedules__comments__list__box--name admin--comment--name" >
                    ${comment.user_name}さん
                    <span>
                      のこめんと
                    </span>  
                  </div>
                  <div class="schedules__comments__list__box--comment admin--comment--comment">
                    ${comment.content }
                  </div>
                  <div  class="schedules__comments__list__box--date">
                    ${comment.created_at_month}/${comment.created_at_day}　${comment.created_at_hour}:${comment.created_at_min}     
                  </div>
                </div>`         
    } else{
      var html =`<div class="schedules__comments__list__box" data-comment-id="${comment.id}">
                  <div class="schedules__comments__list__box--name" >
                    ${comment.user_name}さん
                    <span>
                      のこめんと
                    </span>  
                  </div>
                  <div class="schedules__comments__list__box--comment">
                    ${comment.content }
                  </div>
                  <div  class="schedules__comments__list__box--date">
                  ${comment.created_at_month}/${comment.created_at_day}　${comment.created_at_hour}:${comment.created_at_min}   
                  </div>
                </div>`    
    }        
    // var deletebtn =  `<a class="schedules__comments__list__box--btn" rel = "nofollow" data-method="delete" href="/comments/${comment.id}">
    //                   | 削除"
    //                   </a>`                                 
      return html;
  }
  $('.schedules__comments__form form').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.schedules__comments__list').prepend(html);
      $('.schedules__comments__form--area').val('');
      $('.schedules__comments__form--btn').prop('disabled', false);
    })
    .fail(function() {
      alert('error');
    });
  });
  var reloadComments = function() {
    var first_comment_id = $('.schedules__comments__list__box:first').data("comment-id");
    $.ajax({
      url: '/api/comments/',
      type: 'get',
      dataType: 'json',
      data: {id: first_comment_id}
    })
    .done(function(comments) {
      if (comments.length !== 0) {
        var insertHTML = '';
        $.each(comments, function(i, comment) {
          insertHTML += buildHTML(comment)
        });
        $('.schedules__comments__list').prepend(insertHTML);
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  $('#comment--destroy_all').click(function(){
    if(!confirm('ほんとのほんとに全部削除していいの？\n全部のコメントが消えちゃうよ！')){
        return false;
    }else{
    }
  });
  if (document.location.href.match(/groups/)) {
    setInterval(reloadComments, 10000);
  }
});