$(function() {
  $("#toggle").click(function() {
    if ($(this).is(":checked")) {
      $("#menu1").show();
      $("#menu2").hide();
    } else {
      $("#menu1").hide();
      $("#menu2").show();
    }
  });
});
/*var checkbox1 = document.getElementById('checkbox1');
var menu1 = document.getElementById('menu1');
var menu2 = document.getElementById('menu2');

menu2.style.display = 'none';

checkbox1.onchange = function () {
  if (checkbox1.checked) {
    menu1.style.display = 'block';
    menu2.style.display = 'none';
  } else {
    menu2.style.display = 'block';
    menu1.style.display = 'none';

  }
};*/