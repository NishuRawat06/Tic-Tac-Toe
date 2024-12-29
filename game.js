let cells=document.querySelectorAll(".cell")
let reset=document.querySelector("#reset-btn")
let msg=document.querySelector(".winnermsg")
let turnO=true;
let winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
function showwinner(winner){
    msg.innerText=`congrats, winner is ${winner}`;
    msg.classList.remove('hide');
    setTimeout(() => {
        triggerConfetti();
    }, 1000);
}

function triggerConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#ffeb33'];
    
    for (let i = 0; i < 200; i++) {
      const confetti = document.createElement('div');
      const randomX = Math.random() * 800 - 400;  // Random x direction
      const randomY = Math.random() * 800 - 400;  // Random y direction
  
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = '50%';
      confetti.style.top = '50%';
      confetti.style.setProperty('--x', `${randomX}px`);
      confetti.style.setProperty('--y', `${randomY}px`);
      
      confettiContainer.appendChild(confetti);
    }
}

function winner(){
    for(pattern of winpatterns ){
        let pos1=cells[pattern[0]].innerText;
        let pos2=cells[pattern[1]].innerText;
        let pos3=cells[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                console.log("winner",pos1)
                showwinner(pos1);
            }
        }
    
    }
}
cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{
     if(cell.innerText===""){
        if(turnO==true){
            cell.innerText="O"
            turnO=false;
        }
        else{
            cell.innerText="X"
            turnO=true;
        }
        cell.disabled= true;
        winner();
        }
    })
})

reset.addEventListener("click", () => {
    cells.forEach((cell)=>{
        cell.innerHTML=""
    })
})
