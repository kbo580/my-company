$(function(){
  $(".service__title-wrap").click(function(){
    // $(".service__title-wrap .a").click(function(){
    $(this).next(".service__detail").slideToggle();
    $(this).children(".a").text('-');
  });

  $(".service__title-wrap").hover(function(){
    // var src= $(this).find(".service-bg-date").value("src");
    var src= $(this).next(".service__detail").find(".service-bg-date").attr("src");
  $(".w img").attr("src", src)
    // alert(src);
    // $('.w').css('background', "red");
  },
  function(){
    // $('.w').css('background', "blue");
  });






  
});