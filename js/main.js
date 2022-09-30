$(function(){


  // アコーディオン
  $(".service__title-wrap").click(function(){
    $('.service__detail').slideUp();
    var detail = $(this).next('.service__detail');

    if($(this).hasClass('acc')){
      $(this).removeClass("acc");
      $(this).children(".tri-btn").removeClass('clicked');
    }
    else{
      $('.acc').removeClass('acc');
      $(".tri-btn").removeClass('clicked');
      $(this).addClass("acc");
      $(this).children(".tri-btn").addClass('clicked');
      detail.slideDown();
    }
  });


  $(".service__title-wrap").click(function(){
    if($(this).hasClass('bgChange')){
      $(this).removeClass('bgChange');
    }else{
      $(".service__title-wrap").removeClass('bgChange');
      $(this).addClass('bgChange');
    }

  });
  //------------------アコーディオンここまで------------------


  //
  $(".service__title-wrap").hover(function(){
    // var src= $(this).find(".service-bg-date").value("src");
    var src= $(this).next(".service__detail").find(".service-bg-date").attr("src");
  $(".w img").attr("src", src)
  },
  function(){
    // $('.w').css('background', "blue");
  });

  //サービスのサイトリニューアルのイメージ画像の動き
  $(".service__renewal-image-wrap").click(function(){
    $(this).toggleClass('click')
  });

  $(".service__renewal-image-wrap").click(function(){
    var label = $(this).find('.label');
    if(label.hasClass('textChange')){
      label.removeClass('textChange').text('after');
    }
    else{
      label.addClass('textChange').text('before');
    }
  });




  
});