const createElement = (name) =>{ 
    const newEntry = document.createElement();
    newEntry.classList.add("new-name");
} 

const saveBtn = document.createElement("button");
saveBtn.classList.add("completed-btn");
saveBtn.innerHTML="Save";
saveBtn.style.cursor='pointer';

saveBtn.addEventListener('click',()=>{
    
});

todoItemButtons.appendChild(completedBtn);
