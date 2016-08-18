var database = firebase.database().ref(); //link to our database

//function for sending stuff to my database
function sendMessage(){
  var nestablishment = $("#nestablishment").val();
  var establishment = $("#establishment").val();
  var mhours = $("#mhours").val();
  var thours = $("#thours").val();
  var whours = $("#whours").val();
  var thhours = $("#thhours").val();
  var fhorus = $("#fhours").val();
  var shours = $("#shours").val();
  var suhours = $("#suhours").val();
  var specialties = $("#specialties").val();
  var service = $("#service").val();
  var pnumber = $("#pnumber").val();
  var location = $("#location").val();

  database.push({
    'Owner of establishment':establishment,
    'Name of establishment':nestablishment,
    'Monday Hours':mhours,
    'Tuesday Hours':thours,
    'Wednesday Hours':whours,
    'Thursday Hours':thhours,
    'Friday Hours':fhours,
    'Saturday Hours':shours,
    'Sunday Hours':suhours,
    'What are you looking for ?':specialties,
    'What services do you offer ?':service,
    'Location of Restaurant':location,
    'Email':email,
    'Phone Number ?':pnumber,
  });
  location.href = "congrats.html";
}
