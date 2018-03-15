
// Check off completed tasks
$('ul').on("click", "li", function() {
  $(this).toggleClass("selected");
});
// Click on trash icon to delete todo
$('ul').on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text'").keypress(function(e) {
    if(e.which === 13) {
        // Grabbing newTodo from input
       var newTodo = $(this).val();
       $(this).val("");
    //    Ceate a new li and add(append) to ul
    $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>")
    } 
});
// animate delete icon
$('.fa-plus').click(function() {
    $("input[type='text'").fadeToggle();
});

