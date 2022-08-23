const allPlayers =[];

function players(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName);
    const playerobj = {playerName: playerName};
    allPlayers.push(playerobj);
     const playerlenght = allPlayers.length;
     console.log(playerlenght);
}
