$(document).ready(function(){

	 $( "#draggable" ).draggable();


// draggble

 $( "#draggable1" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          .html( "Dropped!" );
           
      }
    });

    // resiable

 



});

 $( function() {
    $( "#resizable" ).resizable();

    $( "#accordion" ).accordion({
      collapsible: true
    });
 


  });