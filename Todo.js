let TodoList=[
    {
    item:'driy milk',
    dueDate:'9/31/2025',
    },
    {
    item:'eat food',
    dueDate:'5/30/2025',
    },
];
displayTodoItems();
function addToDo(){
    let inputElement=document.querySelector('#Todo-input');
let dateElement=document.querySelector('#Todo-date');

    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    TodoList.push({item:todoItem,dueDate:todoDate});
   
   inputElement.value='';   
   dateElement.value=''; 

displayTodoItems();
}

function displayTodoItems(){
    let containerElement =document.querySelector('.todo-container');
  
    let newHtml ='';
    for(let i=0;i<TodoList.length;i++){
      let item = TodoList[i].item;
      let dueDate=TodoList[i].dueDate;
        newHtml +=`
     
         <span>${item}</span>
         <span>${dueDate}</span>
         <button class="button-delete" onclick="TodoList.splice(${i},1);
         displayTodoItems(); ">Delete</button>
              `;
    }
    containerElement.innerHTML=newHtml;
}