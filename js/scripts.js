$(document).ready(function (){
    console.log('works');
    $('#form-input form').submit(function(event){
        var username = $('input#name').val();
        var useremail = $('input#email').val();
        var usermessage = $('input#message').val();
        // $('.name').text('username');
        // $('.email').text('useremail');
        // $('.message').text('usermessage')
        console.log(username);
        console.log(useremail);
        console.log(usermessage);
        $('#form-input').hide();
        $('.jumbotron').show();
        event.preventDefault();

     
});
   $(".items .item").hover(function (){
            // console.log('hits fn')
            $(this).find("p#description").css({"display":"flex", "transition":".3s"});
            $(this).find("img").hide();
        }, function(){
            $(this).find("p#description").hide();
            $(this).find("img").show();
        });


//         $("#portfolio div.col-md-3").hover(function(){
//             $(this).find(".desc").css("display","flex");
//         },function(){
//             $(this).find(".desc").hide();
//         })
});