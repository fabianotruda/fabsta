(function(){

  const header1 = document.getElementsByClassName("fabsta");

  TweenMax.from(header1, 0.8, 
    { x: 200, autoAlpha: 0, ease: Power4.easeInOut }
  );


}());

