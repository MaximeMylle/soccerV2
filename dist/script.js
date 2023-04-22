$(location). attr('href')



var generateHomeInfo = function(){
    var getusersurl = $(location). attr('href') + "/.netlify/functions/api/users"
    $.getJSON('getusersurl', 
    function(data) {
    // JSON result in `data` variable
    console.log(data)
    });
}




$( document ).ready(function() {
    console.log( "ready!" );
    generateHomeInfo();
});



