const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if(input.value !== ""){
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");

        li.textContent = input.value;
        deleteBtn.textContent = "❌";

        li.appendChild(deleteBtn);
        list.appendChild(li);

        input.value = "";

        deleteBtn.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        })
        input.fucus();
    }
})
