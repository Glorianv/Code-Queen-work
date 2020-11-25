
const todos=[
    {
        id=1,
        item="Wake up",
        completed:true
    },
    {
        id=2,
        item="Eat brakfast",
        completed:false
    },
    {
        id=3,
        item="Go to work",
        completed:false
    },
];

const todosContainer = document.getElementById("todos-container");

const createElement = (todo) =>{ 
const todoItem = document.createElement("div");
todoItem.classList.add("todo-item");

const todoTextElement = document.createElement("p");
todoTextElement.innerHTML = todo.item;
if (todo.completed===true){
    todoTextElement.style.textDecoration='line-through';
    todoTextElement.style.color='blue';
}

todoItem.appendChild(todoTextElement);

const todoItemButtons=document.createElement("div");
todoItemButtons.classList.add("todo-item-buttons");

const completedBtn = document.createElement("button");
completedBtn.classList.add("completed-btn");
completedBtn.innerHTML="✓";
completedBtn.style.cursor='pointer';

completedBtn.addEventListener('click',()=>{
    todoTextElement.style.textDecoration='line-through';
    todoTextElement.style.color='blue';
    todo.completed=true;
});

todoItemButtons.appendChild(completedBtn);

const deleteBtn = document.createElement("button");
deleteBtn.classList.add("delete-btn");
deleteBtn.innerHTML="x";
deleteBtn.style.cursor='pointer';

deleteBtn.addEventListener('click',()=>{
    todoItem.remove();
    const todoIndex = todos.indexOf(todo)
    todos.splice(todoIndex,1);
    // removeTodo(todo,todoItem);
})

todoItemButtons.appendChild(deleteBtn);

todoItem.appendChild(todoItemButtons);

todosContainer.appendChild(todoItem);

}
for(let todo of todos){
    createTodoElement(todo);
}
const newTodoInput=document.getElementById('new-todo-input');

const saveButton=getElementById('save-btn');

saveButton.addEventListener('click',()=>{
    let newTodoInputValue=newTodoInput.value;
    if(newTodoInputValue===""){
        alert('A todo is required.')
    }else{
        const todoItem={
            id:todos.length+1,
            item: newTodoInputValue,
            completed:false,

    };
    todos.push(TodoItem)
    createTodoElement()
    newTodoInput.value="";
}
});

// const removeTodo = (todo.todoItem) => {
//     todoItem.remove();
//     const todoIndex = todos.indexOf(todo)
//     todos.splice(todoIndex,1);
// }


