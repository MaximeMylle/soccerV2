$(location). attr('href')



var generateHomeInfo = function(){
    var getusersurl = $(location). attr('href') + "/.netlify/functions/api/users";
    console.log(getusersurl);
    $.getJSON(getusersurl, 
    function(data) {
    // JSON result in `data` variable
    console.log(data)

    data.forEach((element) => {
        console.log( element.lastname );
      });

    data.user
    });
}




$( document ).ready(function() {
    console.log( "ready!" );
    generateHomeInfo();
});



