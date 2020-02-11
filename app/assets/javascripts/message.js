$(function(){
    function buildHTML(message){
      if ( message.image) {
        var html = `
        <div class="chat-main__messages--message">
          <div class="chat-main__messages--message--box">
            <div class="chat-main__messages--message--box--name">
              ${message.user_name}
            </div>
          <div class="chat-main__messages--message--box--day">
            ${message.created_at}
          </div>
        </div>
        <div class="chat-main__messages--message--text">
          <p class="chat-main__messages--message--text--a">
            ${message.text}
          </p>
          <img class="lower-message__image" src=${message.image} >
          </div>
        </div>`
        return html;
        
      } else {
        var html =`
        <div class="chat-main__messages--message">
          <div class="chat-main__messages--message--box">
            <div class="chat-main__messages--message--box--name">
              ${message.user_name}
            </div>
            <div class="chat-main__messages--message--box--day">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__messages--message--text">
            <p class="chat-main__messages--message--text--a">
              ${message.text}
            </p>
         </div>
        </div>`
        return html;
      };
    }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $('.submit-btn').removeAttr('data-disable-with');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__messages').append(html);
      $('.chat-main__messages').animate({ scrollTop: $('.chat-main__messages')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
});