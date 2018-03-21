$ (document).ready(function() {
  $('#name-form').submit(function(event) {
    var personName = $('#person1').val();

    $("#add-text").click(function() {
      $('.insert-name').text(personName);
      $('.letter').show();
    });
    
    event.preventDefault();
  });
});
