(function(){

  const header1 = document.getElementsByClassName("fabsta");

  TweenMax.from(header1, 1.5, 
    { x: 200, autoAlpha: 0, ease: Power3.easeInOut }
  );


}());

