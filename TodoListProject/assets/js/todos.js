//check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});
$("ul").on("click", "span", function(event){
  alert("clicked on a span");
  $(this).parent().fadeOut(2000,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    todoText = $(this).val();
    //create a new li and add to ul
    $("ul").append('<li><span><i class="fa fa-trash"></i></span>'+todoText+"</li>");
    $(this).val("");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
