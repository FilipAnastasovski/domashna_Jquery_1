$( ".par" ).click(function() {
    $( this ).fadeTo( "slow", 0.5 );
  });

  

//   
// 



$('.button').click(function() {
  let kopche = $(".button");
  
 if( kopche.text(`Hide div`)){

  $(".div1").fadeTo(2000, 0.0 );
  $(".div2").fadeTo(3000, 0.0 );
  $(".div3").fadeTo(4000, 0.0 );

  kopche.text(`Show div`) ;
   

 }else{
 
  $(".div1").fadeTo(2000, 1);
  $(".div2").fadeTo(3000, 1 );
  $(".div3").fadeTo(4000, 1 );

  kopche.text(`Hide div`); 
  
  }
 });

// samo se vrti napred nazad od skrieno vo otkrieno koga oddelno imam za 2 sostojbi 

// $('.button').click(function() {
  
//   if(kopche.text(`Show div`) ){
 
//     $(".div1").fadeTo(2000, 1);
//     $(".div2").fadeTo(3000, 1 );
//     $(".div3").fadeTo(4000, 1 );
  
//     kopche.text(`Hide div`); 
    
//     }
//  });
 

//  
// 

$(".change").hover(function(){

  $(".change").css({top: 200, left: 200, position:'absolute'});


});
