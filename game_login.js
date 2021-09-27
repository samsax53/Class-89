function addUser() {
    PlayerName1 = document.getElementById("playerName1").value;
    PlayerName2 = document.getElementById("playerName2").value;
   localStorage.setItem("player1", PlayerName1);
   localStorage.setItem("player2", PlayerName2);
   window.location = "game_page.html";
}