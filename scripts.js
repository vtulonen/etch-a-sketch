window.onload = addGrid();

function randomColor(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let rndmColor = "rgb(" + x +',' + y + ',' + z +")";
    return rndmColor;
}

function changeDivColorHover(){
    const boxes = document.querySelectorAll('.box');

    

    let i = 1;
    
    let downFlag = 1;
    boxes.forEach((box) =>{
      
        box.addEventListener('mouseover', () =>{
            if(downFlag == 1) {
                i = i - 0.1;
                i.toFixed(1);
                if (i < 0) downFlag = 0; i = 0;
            }
            if (downFlag == 0) {
                i = i + 0.1;
                i.toFixed(1);
                if (i > 1) downFlag = 1;
            }
                box.style.background = 'white';
            box.style.opacity = i;
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
            content.appendChild(box);
        }
        
    
    container.appendChild(content);


    // change div color on mouseover
    changeDivColorHover();

    // add a button on top of the page
    let button = document.createElement('button');
    button.textContent = 'New Grid';
    container.insertBefore(button, container.firstChild);
    button.setAttribute("style", "margin: 10px 50%;");
    
    let btn = document.querySelector('button');
    
    btn.addEventListener('click', () =>{
        
        
        //add promt
        newSize = prompt('Enter new row size for your grid:')
        boxCount = newSize * newSize;
        // newSize = set new box size
        let newWnH = 640 / newSize;
        console.log(newSize);
        
        if(newSize != null){
            const rmvnode = document.getElementById('fc');
            while (rmvnode.firstChild){
                rmvnode.removeChild(rmvnode.firstChild);
            }
        }
        //create new grid with newSize/boxcount
        for (let j=0; j<boxCount; j++){
            let box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('id', 'box');
            box.style.width = newWnH +'px'; // new size
            box.style.height = newWnH+'px'; // new height
            content.appendChild(box);
        }
        
    
    container.appendChild(content);
    
    changeDivColorHover();

        
    
    })
}

