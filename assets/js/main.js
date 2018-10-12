$(function(){
  $('#accordian h3').click(function(){
    //hiding all open accordian
    $(this).parent().parent().find('ul').slideUp();
    
    //looking if any ul is not open then slide down accordiation
    
    if(!$(this).next().is(":visible")){
      $(this).next().slideDown();
    }
    
  });
});
$(function(){
  document.getElementById("loading").style.display ="visible";

})