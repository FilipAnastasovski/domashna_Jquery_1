$( document ).on( "mousemove", function( event ) {
    $( ".log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
  });


//   
// 
input.onblur = function() {
  let greshka =$(".error");
  if (!input.value.includes('@')) { // not email
    input.classList.add('invalid');
    greshka.text(`Vnesete informacii pravilno`) ;
  }
};

input.onfocus = function() {
  let greshka =$(".error");
  if (this.classList.contains('invalid')) {
    // remove the "error" indication,
    this.classList.remove('invalid');
    greshka.text(``) ;
  }
};
