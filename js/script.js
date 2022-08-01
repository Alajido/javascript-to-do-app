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





const saveToLocalStorage = () => {
    localStorage.setItem('inputText', inputValue.textContent)
}

btn.addEventListener(`click`, newTask)

