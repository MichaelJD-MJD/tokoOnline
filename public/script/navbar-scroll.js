$(function () { //dengan menggunakan ini diawal, maka si jquery ini hanya akan dijalankan jika HTML dan DOM sudah ready
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
