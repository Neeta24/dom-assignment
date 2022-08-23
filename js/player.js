const allPlayers =[];

function display(playerdetails){
 const selectedPlayers =document.getElementById("selected-players");
 selectedPlayers.innerHTML ='';


    for(let i =0;i<playerdetails.length;i++){
       
        const name= allPlayers[i].playerName;
        const tr = document.createElement("tr");
        tr.innerHTML=
        `<th>${i+1}</th>
        <td>${name}</td>`;
        selectedPlayers.appendChild(tr);
    }
}


function players(element){
    const playerName = element.parentNode.parentNode.children[0].innerText;
    element.setAttribute("disabled", false);
   
    const playerobject = {playerName: playerName};
    allPlayers.push(playerobject);
     const playerlenght = allPlayers.length;
     if(playerlenght>=6){
        return alert("you couldn't add more then 5 player ")
    }

     document.getElementById('player-count').innerText = playerlenght;
    
     
     display(allPlayers);
 
   
}

 document.getElementById('calculator-id').addEventListener('click', function(){
    const perpersonAmount= document.getElementById('per-person');
    const newperpersonAmountString = perpersonAmount.value;
    const newperpersonAmount = parseInt(newperpersonAmountString);
    
    const totalperpersonAmount = newperpersonAmount*5;
    
    const expence = document.getElementById('expence');
    expence.value = totalperpersonAmount;
   
      
 

 document.getElementById('calculatortotal').addEventListener('click',function(){
     const manageraddAmount = addamount('manager');
     const coachaddAmount = addamount('coach');
   
     const final = manageraddAmount+coachaddAmount+totalperpersonAmount;
    
     const amoutTotal = document.getElementById('amout-total');
     amoutTotal.value = final;
      return amoutTotal;

 })
})




