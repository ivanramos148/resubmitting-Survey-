$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var plan = $("select#plan").val();
    var exprienced = $("select#exprienced").val();
    var passion = $("select#passion").val();
    var year = $("select#year").val();
    var prefer = $("select#prefer").val();
    var dif = $("select#dif").val();


    if (plan === 'yes')
      {
    };
    if (exprienced === 'yes1')
      {
    };
    if (passion === 'yes2')
      {
    };
    if (year === 'yes3')
      {
    };
    if (prefer === 'college')
      {
      $('#trail1').show();
    event.preventDefault();
  }else{
    if (plan === 'no')
      {
    };
    if (exprienced === 'no1')
      {
    };
    if(passion === 'no2')
      {
    };
    if (year === 'no3')
      {
    };
    if (prefer === 'boot')
      {
      $('#trail2').show();
      event.preventDefault();
    }else{

      if (dif === 'hard')
        {
      $('#path').show(); {
    };
    event.preventDefault();
}

}
}
});
});
