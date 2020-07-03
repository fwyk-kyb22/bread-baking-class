$(function() {
  function buildHTML(comment) {
    if(comment.user_admin == 1){
      var html =`<div class="schedules__comments__list__box admin--comment">
                  <div class="schedules__comments__list__box--name admin--comment--name">
                    ${comment.user_name}さん
                    <span>
                      のこめんと
                    </span>  
                  </div>
                  <div class="schedules__comments__list__box--comment admin--comment--comment">
                    ${comment.content }
                  </div>
                </div>`                
    } else{
      var html =`<div class="schedules__comments__list__box">
                  <div class="schedules__comments__list__box--name">
                    ${comment.user_name}さん
                    <span>
                      のこめんと
                    </span>  
                  </div>
                  <div class="schedules__comments__list__box--comment">
                    ${comment.content }
                  </div>
                </div>`   
    }     
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
});