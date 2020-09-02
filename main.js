var btn = document.getElementById("cta");
var btn2 = document.getElementById("cta2");

btn.onclick = function () {
  var morphing = anime({
    targets: ".polyMorph",
    points: [
      { value: "1920.5,1080 0.5,1080 0.5,0 373.4,0 523,774" },
      { value: "1920.5,1080 0.5,1080 0.5,0 0,1 523,774" },
    ],
    easing: "easeOutQuad",
    duration: 1200,
    loop: false,
  });
  anime({
    targets: "#blip",
    opacity: 1,
    duration: 500,
    translateY: 150,
  });
  anime({
    targets: "#cta",
    opacity: 0,
    duration: 100,
    translateY: -10,
  });

  btn2.onclick = function () {
    var promise = morphing.finished.then(() => {
      var morphing = anime({
        targets: ".polyMorph",
        points: [
          { value: "1920.5,1080 0.5,1080 0.5,0 373.4,0 523,774" },
          { value: "1920.5,1080 0.5,1080 0.5,0 373.4,0 1920.5,0" },
        ],
        easing: "easeOutQuad",
        duration: 1200,
        loop: false,
      });
      anime({
        targets: "#blip",
        opacity: 0,
        duration: 1000,
        translateY: -800,
      });
      anime({
        targets: "#cta",
        opacity: 1,
        duration: 2000,
        translateY: "10em",
      });
    });
  };
}; //end function
