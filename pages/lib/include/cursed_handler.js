var counter = 0;
$(function() {
  $("input").on({
    mouseover: function() {
      counter += 1;

      if (counter === 10) {
        alert("You suck at this don't u?");
      } else if (counter === 20) {
        alert("It's not that hard you know?");
      } else if ((counter % 10) === 0) {
        alert("Can't touch this.");
      }

      $(this).css({
        left: (Math.random() * 1800) + "px",
        top: (Math.random() * 900) + "px",
      });

    }

  });
});
