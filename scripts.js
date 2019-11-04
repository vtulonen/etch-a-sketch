window.onload = addGrid();


function clearGrid(){
    const rmvnode = document.getElementById('fc');
        while (rmvnode.firstChild){
            rmvnode.removeChild(rmvnode.firstChild);
        }
}

function addNewGrid(boxCount){
    for (let j=0; j<boxCount; j++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('id', 'box');
        //box.textContent = 1;
        content.appendChild(box);
    }
    container.appendChild(content);
}

function changeDivColorHover(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) =>{
        box.addEventListener('mouseover', () =>{
            box.style.background = 'black';
            
        })
    })
}


function addGrid(){
    let container = document.querySelector(".container");
    let content = document.createElement('div');
    content.classList.add('flex-container');
    content.setAttribute('id', 'fc');
    let rowSize = 16; // to create 16 rows, 16 columns
    let boxCount = rowSize * rowSize;
        for (let j=0; j<boxCount; j++){
            let box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('id', 'box');
            //box.textContent = 1;
            content.appendChild(box);
        }
        
    
    container.appendChild(content);


    // change div color on mouseover
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) =>{
        box.addEventListener('mouseover', () =>{
            box.style.background = 'black';
            
        })
    })

    // add a button on top of the page
    let button = document.createElement('button');
    button.textContent = 'New Grid';
    container.insertBefore(button, container.firstChild);
    
    // reset box div colors on click of button
    
    let btn = document.querySelector('button');
    
    btn.addEventListener('click', () =>{
        
        
        //add promt
        newSize = prompt('Enter new row size for your grid:')
        boxCount = newSize * newSize;
        // newSize = set new box size
        let newWnH = 640 / newSize;
        console.log(boxCount);
        
        clearGrid();

        //create new grid with newSize/boxcount
        for (let j=0; j<boxCount; j++){
            let box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('id', 'box');
            box.style.width = newWnH +'px'; // new size
            box.style.height = newWnH+'px'; // new height
            //box.textContent = 1;
            content.appendChild(box);
        }
        
        boxes.forEach((box) =>{
            
        })

    container.appendChild(content);
    
    changeDivColorHover();

        
    
    })

  


/* if CSS needs to be added with DOM methods
let style = document.createElement('style');
style.innerHTML = `

 .css rules {
    something: something
 }
`;

document.head.appendChild(style);
*/
}

