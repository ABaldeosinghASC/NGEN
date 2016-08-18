var database = firebase.database().ref(); //link to our database

//function for sending stuff to my database
function sendMessage(){
  var firstname = $("#firstName").val();
  var lastname = $("#lastName").val();
  var specialty = $("#Specialty").val();
  var email = $("#Email").val();
  var phoneNumber = $("#phoneNumber").val();
  var age = $("#Age").val();
  
  

  database.push({
    'LASTNAME':lastname,
    'SPECIALTY':specialty,
    'FIRSTNAME':firstname,
    'EMAIL': email, 
    'PHONENUMBER':phoneNumber,
    'AGE': age,
  });
  location.href = "congrats.html"
}
