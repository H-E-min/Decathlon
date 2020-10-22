$(function(){
    $('#email').focus(()=>{
        $('#email').css({'border':'1px solid #0082c3'})
    })
    $('#email').blur(()=>{
        $('#email').css({'border':'1px solid   rgb(212, 215, 217) '})
    })
})