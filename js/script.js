const btn = document.getElementById('btn');

// function that append the delete button to all the list element (li);
const myList = document.getElementsByTagName('li')

 for (let i = 0; i < myList.length; ++i) {
     let newElement = document.createElement('button');
     let newElementValue = document.createTextNode('Delete');
    newElement.setAttribute('class', 'close')
     newElement.appendChild(newElementValue);
     myList[i].appendChild(newElement)
}

// function that add new task
function newTask() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let inputText = document.createTextNode(inputValue)
    li.appendChild(inputText);
    
    if (inputValue === "") {
        alert('Enter the new task, please!')
    } else {
        var appear = document.getElementById('appear');
        appear.appendChild(li)
    }

    document.getElementById('myInput').value = ""

    // delete button 
    let newElement = document.createElement('button');
    let newElementValue = document.createTextNode('Delete');
    newElement.setAttribute('class', 'close');
    newElement.appendChild(newElementValue);
    li.appendChild(newElement);

    for (let i = 0; i < close.length; ++i) {
        close[i].onclick = function() {
            let parent = this.parentElement;
            parent.style.display = 'none'
        }
    };

   let tastId = new Date().getTime()

   // saving task to local storage
   saveToLocalStorage(tastId, inputValue)
   

    

    // saving task to local storage
    function saveToLocalStorage(taskId, inputValue){
        let mytask = {taskId, inputValue}
        let task = getLocalStorage();

        task.push(mytask);
        localStorage.setItem("mytasks", JSON.stringify(task))
    }

}
var appear = document.getElementById('appear');
// for getting data from local storage to the window when reload
window.addEventListener('DOMContentLoaded', setTask())
function setTask(){
    let task = getLocalStorage();
    if(task.length > 0){
        task.forEach(function (task){
            console.log(task)
            let li = document.createElement('li');
                appear.appendChild(li)
                li.innerText = task.inputValue;
             });
         }
     }

    // saving task to local storage
function getLocalStorage(){
    let mylocalstorage = JSON.parse(localStorage.getItem('mytasks'))
    if(mylocalstorage === null){
        return []
    }else{
        return mylocalstorage
    }
}  


// function to delete task
const close = document.getElementsByClassName('close')
for (let i = 0; i < close.length; ++i) {
    close[i].onclick = function() {
        let parent = this.parentElement;
        parent.style.display = 'none'
    }
}


// function that toggle the checked class after task is completed
var list = document.querySelector('ul');

list.addEventListener(`click`, function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
}, false);





// const saveToLocalStorage = () => {
//     localStorage.setItem('inputText', inputValue.textContent)
// }

btn.addEventListener(`click`, newTask)

