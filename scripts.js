
function addGrid(){
    let container = document.querySelector("#container");
    let content = document.createElement('div');
    content.classList.add('flex-container');

    
    for (let i=0; i<16*16; i++){
        let newDiv = document.createElement('div');
        newDiv.id="sq";
        newDiv.textContent = 1;
        content.appendChild(newDiv);
    }
    content.style.display = 'flex';
    
    
    container.appendChild(content);
}