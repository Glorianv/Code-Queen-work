const todos=['Have devotion','Take a shower','Eat breakfast'];
const list=document.createElement('ul');
for(let todo of todos){
const item=document.createElement('li');
item1.innerHTML=todo;


list.appendChild(item);
}


const mainDiv=document.getElementById('main');
const input=document.getElementById('todo-text');

const saveBtn=document.getElementById('add-btn')
saveBtn.addEventListener("click",()=>{
    const inputText=input.Value;
todos.push(inputText);
});