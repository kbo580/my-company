$(function(){
  // $(".service__title-wrap").click(function(){
  //   $('.service__detail').slideUp();
  //   var detail = $(this).next('.service__detail');

  //   if($(this).hasClass('acc')){
  //     $(this).removeClass("acc");
  //     $(this).children(".a").text('+');
  //   }
  //   else{
  //     $('.acc').removeClass('acc');
  //     $(this).addClass("acc");
  //     $(this).children(".a").text('-');
  //     detail.slideDown();
  //   }
  // });



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


  //サービスのサイトリニューアルのイメージ画像
  $(".service__renewal-image-wrap").click(function(){
    $(this).toggleClass('click')
  });



  
});