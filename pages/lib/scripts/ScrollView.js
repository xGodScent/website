$(document).ready(function(){
  $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {// can be whatever, 0 refers to the top space you allow
          $('.move').hide();// Hide your element
      }
      else {
          $('.move').show();// It's just if you want to show back the element if we're back on top
      }
  });
});
