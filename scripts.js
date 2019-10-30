window.onload = addGrid();

function addGrid(){
    let container = document.querySelector(".container");
    let content = document.createElement('div');
    content.classList.add('flex-container');

    
    for (let i=0; i<16; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        
        for (let j=0; j<16; j++){
            let box = document.createElement('div');
            box.classList.add('box');
            box.textContent = 1;
            row.appendChild(box);
        }
        
        content.appendChild(row);
    }
    
    container.appendChild(content);

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) =>{
        box.addEventListener('mouseover', () =>{
            console.log("hover");
            box.style.background = 'black';
        })
    })



/* if CSS needs to be added with DOM methods
let style = document.createElement('style');
style.innerHTML = `
.row {
    display: flex;
}

.box {
    width: 50px;
    height: 50px;
    text-align: justify;
}
`;

document.head.appendChild(style);
*/
}