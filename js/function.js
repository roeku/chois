// MAKE A CHOICE
function makingChoices(choiceNumber) {
  console.log('choice got clicked');
  $('.choices-field').hide();

  $('.text-field').fadeOut(100);

  $('.video-mp4').attr("src", choices[choiceNumber][0]).ready(function() {
    $('.video-webm').attr("src", choices[choiceNumber][1]);
    $('.video-ogv').attr("src", choices[choiceNumber][2]);

    console.log('changing text-container');
    $('.text-container').html(choices[choiceNumber][3]);

    $('.left-choice').data("choice", choices[choiceNumber][4]);

    $('.left-title').html(choices[choiceNumber][6]);
		$('.left-image').attr("src", "style/images/" + choices[choiceNumber][6] + ".png");
    $('.right-choice').data("choice", choices[choiceNumber][5]);

    $('.right-title').html(choices[choiceNumber][7]);
		$('.right-image').attr("src", "style/images/" + choices[choiceNumber][7] + ".png");
    $('.video-field').fadeTo(600, 1).ready(function() {
      $('.video-container')[0].load();
      video.play();
    });
  });
  if (choices[choiceNumber][4] == "gameOver") {
    endSequence();
  } else if(choices[choiceNumber][4] == "finale"){
    finale();
    //endStory();
  }
}

function endSequence() {
  $("#video").bind("ended", function() {
    $('#video').unbind('ended');
		$('.intro-text').hide();
    $('.text-field').delay(9000).fadeOut(1000);
		$('.choices-field').hide();
		$('.video-field').delay(6000).fadeOut(1000);
    $('.introduction-text').show();
    $('endings-field').show();
    $('.ending1').hide().html("Game <b>over!</b>").delay(10000).fadeIn(1000);
		$('.ending2').hide().html("Je hebt het verhaal niet kunnen overleven. De chassis van jouw motor was <b>gebogen</b>. Laat jaarlijks het <b>chassis</b> van jouw motor controleren. Bespaar niet op de <b>jaarlijkse</b> chassis-controle. Dit kan jou het leven kosten.<br/><br/>Klik op het icoontje om een ander verhaal te beleven.").delay(10000).fadeIn(1000);
		$('.ending3').hide().html('<a target="_blank" href="http://www.scheibner.de/scheibner/en/120_CMS.php">Meer <b>informatie</b> over <b>chassis-controle</b>?</a>').delay(10000).fadeIn(1000);
		$('.scheibner').delay(10000).fadeIn(1000);
		$('.more-info').delay(12000).fadeIn(1000);
    $('start-icon').removeClass('heartbeat');
    redo();
  });
}

function finale() {
  $("#video").bind("ended", function() {
    $('#video').unbind('ended');
    $('.intro-text').hide();
    $('.text-field').delay(9000).fadeOut(1000);
    $('.choices-field').hide();
    $('.video-field').delay(6000).fadeOut(1000);
    $('.introduction-text').show();
    $('endings-field').show();
    $('.ending1').hide().html("<b>WOW!</b>").delay(10000).fadeIn(1000);
    $('.ending2').hide().html("Je hebt je verhaal kunnen overleven. Maar de chassis van jouw motor is <b>gebogen</b>. Verdergaan zonder deze te laten repareren zou een grove fout zijn. Laat jaarlijks het <b>chassis</b> van jouw motor controleren. Bespaar niet op de <b>jaarlijkse</b> chassis-controle. Dit kan jou het leven kosten.<br/><br/>Klik op het icoontje om een ander verhaal te beleven.").delay(10000).fadeIn(1000);
    $('.ending3').hide().html('<a href="">Meer <b>informatie</b> over <b>chassis-controle</b>?</a>').delay(10000).fadeIn(1000);
    $('.scheibner').delay(10000).fadeIn(1000);

    $('.more-info').delay(12000).fadeIn(1000);

    redo();
  });
}

function redo() {
  $('.redo').delay(10000).fadeIn(1000);
  $('.redo').click(function(){
    //$('.controls-menu').removeClass('redo');
    $('.video-mp4').attr("src", "videos/start/start.mp4").ready(function() {
      $('.video-webm').attr("src", "videos/start/start.webm");
      $('.video-ogv').attr("src", "videos/start/start.ogv");
      $('.text-container').html("Met je vrienden maak je een rit met de motor. Na de motor vorige week te laten vallen rijdt hij wel wat raar. De laatste controle was 2 maanden geleden zou hij nu nog in orde zijn?");
      $('.left-title').html("In orde");
      $('.left-image').attr("src", "style/images/inorde.png");
      $('.right-title').html("Controle");
      $('.right-image').attr("src", "style/images/controle.png");
      $('.intro-text').hide();
      $('.endings-field').hide();
      $('.scheibner').fadeOut(500);
      $('.left-choice').data("choice", "0");
      $('.right-choice').data("choice", "7");
      $('.text-field').delay(6000).fadeOut(1000);
      $('.choices-field').hide();
      $('.introduction-text').fadeOut(400);
$('.video-field').fadeTo(600, 1).ready(function() {
  $('.video-container')[0].load();
  video.play();
});
$("#video").bind("ended", function() {
//  $('#video').unbind('ended');
  $('.text-field').fadeIn("slow");
  $('.text-container').fadeIn("slow");
  $('.choices-field').fadeIn(1000);
  $('.video-field').fadeTo(600, 0.5);
});
  });
});}


    $("#video").bind("ended", function() {
    //  $('#video').unbind('ended');
      $('.text-field').fadeIn("slow");
      $('.text-container').fadeIn("slow");
      $('.choices-field').fadeIn(1000);
      $('.video-field').fadeTo(600, 0.5);
    });


	$(".left-choice").click(function() {
		console.log('choice got through');
		var leftSide = $('.left-choice').data('choice');
		makingChoices(leftSide);
	});
	$(".right-choice").click(function() {
		console.log('choice got through');
		var rightSide = $('.right-choice').data('choice');
		makingChoices(rightSide);
	});
