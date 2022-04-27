const container = document.querySelector('#container')

const side = 540;

container.style.backgroundColor = 'white';


function createGrid(size){
  //create a new variable that would be the height and width of the new boxes
  const x = String(side/size)+'px'; 

  //create a for loop to put in the container  
  for(let i = 0; i< size; i++){
    for(let j = 0; j < size; j++) {

        //dom creation algo
        const content = document.createElement('div');
        content.classList.add('content');

        //to create the actual grid
        content.style.height = x;
        content.style.width =x;

        //function to make the game logic
        content.addEventListener('mouseover', () => {
            content.style.backgroundColor='black';
        });       

        //add the content to the container
        container.appendChild(content);
    }
  }
}

function startGame(size) {
  createGrid(size);
}
  
function restartGame() { 
  let contents = document.querySelectorAll(".content")
  contents.forEach( (content) => { 
    content.parentElement.removeChild(content);
  });
   
  
  let newSize = parseInt(prompt("What is the size of new grid? "));
  startGame(newSize); 
}
    
startGame(16);
