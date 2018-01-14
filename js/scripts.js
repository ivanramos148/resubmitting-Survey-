$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var plan = $("select#plan").val();
    var exprienced = $("select#exprienced").val();
    var passion = $("select#passion").val();


    if (plan === 'no')
      {
      $('#trail1').show();
    }
    if (exprienced === 'no1')
      {
      $('#trail1').show();
    }
    if (passion === 'yes2')
      {
      $('#trail1').show();
    }
      event.preventDefault();
  });
});
