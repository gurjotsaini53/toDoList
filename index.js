const item = document.querySelector("#item");
const toDobox = document.querySelector("#todolist");


item.addEventListener("keyup", function (event) {

    if (event.key == "Enter") {
        var data = this.value;
        addtodo(data);
        this.value = "";
    }
});








const addtodo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
       ${item} 
       <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done");
        }
    )


    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove();
    })
    toDobox.appendChild(listItem);
}


