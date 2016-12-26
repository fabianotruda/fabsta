(function(){

  const header1 = document.getElementsByClassName("fabsta");
  const posts = document.getElementsByClassName("post");
  const navItem = document.getElementsByClassName("navItem");

  const tl1 = new TimelineMax();

  tl1.add(
  	TweenMax.from(header1, 1.5, 
    	{ y: -100, autoAlpha: 0, ease: Power2.easeInOut }
  	),
  	'0.3'
  );

  tl1.add(
  	TweenMax.staggerFrom(navItem, 0.5, 
    	{ y: 10, autoAlpha: 0, ease: Power4.easeInOut }, 0.2
  	),
  	'+=0'
  );

  tl1.add(
  	TweenMax.from(posts, 2, 
    	{ y: -50, autoAlpha: 0, ease: Power2.easeInOut }
  	),
  	'+=1'
  );




}());

