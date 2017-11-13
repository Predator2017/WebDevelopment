//check off specific todos by clicking
$("li").click(function(){
  $(this).toggleClass("completed");
});
$("span").click(function(event){
  alert("clicked on a span");
  $(this).parent().fadeOut(2000,function(){
    $(this).remove();
  });
  event.stopPropagation();
});
