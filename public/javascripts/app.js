var shoutsArray = [];
var i=0;

$(document).ready(function() {


//access the db of shout-outs - make an AJAX call
 $.ajax({
  type: 'GET',
  dataType: 'json',
  url: '/shout_outs'
 }).done(function (data) {//.done is the same as success
  console.log('getting accolades', data);
  shoutsArray=data;
  //data.forEach(function (elem) {
  // shoutsArray.push(elem);
  // console.log("ShoutsArray: ", shoutsArray);
  // console.log(elem.name);
  // console.log(elem.shout);
   //addShout(elem);
   //$('#panel').fadeIn("slow");
   //i++;
   //return shoutsArray;
   //addShout(elem);
  }).fail(function (jqXHR, textStatus, errorThrown) {
   console.log('error: ', errorThrown);//use a comma if you want the object data to show, otherwise it will just log Object
  }).always(function () {
   console.log("complete");
   console.log(shoutsArray);
 $(document ).click(function() {
  addShout(shoutsArray);
  });

 });

var i=0;
 function addShout(array) {
   console.log("current shout: ", shoutsArray[i]);
   $('#name').text(shoutsArray[i].name);
   $('#shout').text(shoutsArray[i].shout);
   $('#panel').fadeOut(600);
   i++;
  }
 });

 //function addShout(elem) {

//$( document ).click(function() {
// $( "#toggle" ).toggle( "fade" );

 // i++;


//})



//





//$('#name').on('click', '#prev', function (data) {
 // $(this).remove().parent();

//
//for each shout-out, create a title with name, and panel text with shout
//

//addPanel(data);
//var $h1=$('<h1>', {id: elem.name});
//$h1.text(elem.name);
//$('#name').append($h1);
//var $p=$('<p>');
//$p.text(elem.shout);
//$('#shout').append($p);
//})





