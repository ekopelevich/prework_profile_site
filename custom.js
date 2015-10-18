$(document).ready(function() {
	//code for index page	
  
 	$('.j-btn').click(function() {

  		if ($(this).hasClass('btn-primary')) {
  			$(this).removeClass('btn-primary');
  			$(this).addClass('btn-warning');
  		} else {
  			$(this).addClass('btn-primary');
  			$(this).removeClass('btn-warning');
  		}

  		$('div .jumbotron').toggleClass('jumbotron-change');
  		$('div h2').toggleClass('h2-change');

  		$('#draggable').toggle().draggable();	
  	});

  	//Code for hover effect on 'Things I Enjoy' section

  	 $('.interests').hover(function() {
 		$(this).css('cursor', 'pointer');
 	});

  	$('.reading-learning').mouseover(function() {
  		$('.interests-img').hide();
  		$('.rl-image').show();
  	});

  	$('.reading-learning').mouseout(function() {
  		$('.rl-image').hide();
  		$('.interests-img').show();
  	});

  	$('.illustration-painting').mouseover(function() {
  		$('.interests-img').hide();
  		$('.ip-image').show();
  	});

  	$('.illustration-painting').mouseout(function() {
  		$('.ip-image').hide();
  		$('.interests-img').show();
  	});

  	$('.hiking-yoga').mouseover(function() {
  		$('.interests-img').hide();
  		$('.hy-image').show();
  	});

  	$('.hiking-yoga').mouseout(function() {
  		$('.hy-image').hide();
  		$('.interests-img').show();
  	});

  	$('.coffee-beer').mouseover(function() {
  		$('.interests-img').hide();
  		$('.cb-image').show();
  	});

  	$('.coffee-beer').mouseout(function() {
  		$('.cb-image').hide();
  		$('.interests-img').show();
  	});

  	$('.icons-design').mouseover(function() {
  		$('.interests-img').hide();
  		$('.id-image').show();
  	});

  	$('.icons-design').mouseout(function() {
  		$('.id-image').hide();
  		$('.interests-img').show();
  	});
  	//End 'Things I Enjoy' section

  	//Code for FAQs

  	$('#faqs').accordion({ collapsible: true, active: false });

 	$('.faq-header').hover(function() {
 		$(this).css('cursor', 'pointer');
 	});

	//Code for 'future' page 
	$('#btn-feel').click(function() {
  		$('.gif').toggle();
	})
});


