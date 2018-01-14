$(document).ready(function() {
   $("form#formOne").submit(function(event) {
     var school = $("select#school").val();
     var years = $("select#years").val();

    if (school  === 'not1' && years === '1'); {
      
    }

      $("#trail1").show();


      event.preventDefault();
  });
});
