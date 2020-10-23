$(function(){
    $('#email').focus(()=>{
        $('#email').css({'border':'1px solid #0082c3'})
    })
    $('#email').blur(()=>{
        $('#email').css({'border':'1px solid   rgb(212, 215, 217) '})
    })


    //判断手机格式
    let re = /^(13|14|15|17|18)[0-9]{9}$/;
    console.log($('#email').value);
})