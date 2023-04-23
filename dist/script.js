$(location). attr('href')



var generateHomeInfo = async function(){
    var urlBase = $(location). attr('href') + ".netlify/functions/api/";
//    var getusersurl = $(location). attr('href') + ".netlify/functions/api/users";

    var users;
    var teams;
    var games;

    await $.getJSON(urlBase + "users", function(data) {
        users = data;
    });

    await $.getJSON(urlBase + "teams", function(data) {
        teams = data;
    });

    await $.getJSON(urlBase + "games", function(data) {
        games = data;
    });

    rowToAdd = "";
    games.forEach((game) => {
        rowToAdd += "<tr>"
        rowToAdd +="<td>" + game.Date + "</td>"
        rowToAdd +="<td>" + teams.find(x => x.id === game.Home_Team_Id).Name + "</td>"
        rowToAdd +="<td>" + teams.find(x => x.id === game.Out_Team_Id).Name + "</td>"
        rowToAdd +="<td>" + game.Score + "</td>"
        rowToAdd +="<td>" + teams.find(x => x.id === game.Home_Team_Id).Location + "</td>"
        rowToAdd +="<td>" +"<a href='gameDetails.html?gameId="+game.id+"'>Game Details</a>"+ "</td>"
        rowToAdd += "</tr>"
      });


      $("#gamesTable").append(rowToAdd);
    
}


var showGameDetails = async function(){
    const gameId = urlParams.get('gameId');

    await $.getJSON(urlBase + "games", function(data) {
        games = data;
    });

    await $.getJSON(urlBase + "teams", function(data) {
        teams = data;
    });

    var gameToShow = teams.find(x => x.id == gameId);
    
    $("#Home_Team").append(teams.find(x => x.id === gameToShow.Home_Team_Id).Name);
    $("#Out_Team").append(teams.find(x => x.id === gameToShow.Out_Team_Id).Name);
    $("#Location").append(teams.find(x => x.id === gameToShow.Home_Team_Id).Location);

}




$( document ).ready(function() {
    console.log( "ready!" );
    generateHomeInfo();
});



