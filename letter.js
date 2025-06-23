$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
 const giftBtn = document.getElementById('gift');
  const giftVideo = document.getElementById('giftVideo');

  giftBtn.addEventListener('click', () => {
    giftVideo.src = 'bday wishes.mp4';  
    giftVideo.style.display = 'block';
    giftVideo.play();
  });

  giftVideo.addEventListener('ended', () => {
    giftVideo.style.display = 'none';
    giftVideo.src = ''; 
  });
