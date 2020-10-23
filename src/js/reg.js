$(function(){
    $('#email').focus(()=>{
        $('#email').css({'border':'1px solid #0082c3'})
    })
    $('#email').blur(()=>{
        $('#email').css({'border':'1px solid   rgb(212, 215, 217) '})
        //判断手机格式
        let re = /^(13|14|15|17|18)[0-9]{9}$/;  
        let num = $('#email').val();
        if(!re.test(num)){
          $('#login_bottom p').html('手机格式不对');
          $('#email').val('');
          $('#validate_block').click(()=>{
              alert('手机号不对还想进行下一步？想得美')
          })
        }else{
            $('#login_bottom p').html('欢迎新朋友');
        }
    })


    
    
})