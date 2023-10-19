const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function addTask() {
    if (InputBox.value === '') {
        alert("write somthing");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li);

        //Adding Cross Icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
    SaveData();
}


//Creating checked and remove task on clicking cross button
ListContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        SaveData();
    }
    else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        SaveData();
    }
}, false);

//Press Enter to add task
InputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

//Save data in browser
function SaveData() {
    localStorage.setItem("data", ListContainer.innerHTML);
}

//Show the stored data
function ShowData() {
    ListContainer.innerHTML = localStorage.getItem("data");
}
ShowData();