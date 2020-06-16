"use strict";

$(document).ready(function () {});
"use strict";

$(document).ready(function () {
  //加的效果
  $("#add").click(function () {
    var n = $(this).prev().val();
    var num = parseInt(n) + 1;

    if (num == 0) {
      return;
    }

    $(this).prev().val(num);
  }); //減的效果

  $("#remove").click(function () {
    var n = $(this).next().val();
    var num = parseInt(n) - 1;

    if (num == 0) {
      return;
    }

    $(this).next().val(num);
  });
});
"use strict";

(function ($) {
  $("#js-drop").on("click", function () {
    // 箭頭icon翻轉
    $("#js-rotate").toggleClass("active"); // 顯示下方按鈕列

    $(".js-productMenu").toggleClass("active");
  });
})($);
"use strict";

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30 // pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  // },

});
$(document).ready(function () {
  // 初始化輪播
  swiper = new Swiper('.swiper-container', {
    // 自動播放
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 16,
    centeredSlides: false,
    autoplay: {
      // 縮放時不打斷自動播放
      disableOnInteraction: true,
      delay: 3000
    },
    breakpoints: {
      // when window width is >= 460px
      460: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
});
//# sourceMappingURL=all.js.map
