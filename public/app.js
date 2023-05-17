const todocontainer = document.querySelector(".todos");

fetch("http://localhost:3000/api/todo")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(item => {
            const newItem = document.createElement("span");
            newItem.textContent = item.text;
            todocontainer.appendChild(newItem);

            const lineBreak = document.createElement("br");
            todocontainer.appendChild(lineBreak);

        });
    });

const container = document.getElementById('container');

const CompleteButton = document.querySelector('#CompleteAll');
CompleteButton.addEventListener("click", function () {
    const yes = document.createElement("div");
    yes.setAttribute('class', 'containerz');
    const yesButton = document.createElement("button");
    yesButton.setAttribute("class", "next-hide");
    yesButton.innerHTML = 'Are you sure';
    yes.append(yesButton);
    document.body.append(yes);

    const no = document.createElement("div");
    no.setAttribute('class', 'containerz');
    const noButton = document.createElement("button");
    noButton.setAttribute("class", "next-hide");
    noButton.innerHTML = 'NO!';
    no.append(noButton);
    document.body.append(no);

    yesButton.addEventListener("click", function () {
        fetch("http://localhost:3000/api/todo/$1", {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
        })
            (response => {
                if (response.ok) {

                    // Data deletion was successful
                    // You can update the UI or perform any additional actions here
                    // Clear the container on the UI
                    todocontainer.remove;
                    remove();
                } else {
                    return;
                    // Request failed
                    // Handle the error or show an error message
                }
            })
            .catch(error => {
                console.log('Error');
                // An error occurred during the request
                // Handle the error or show an error message
            });
    });
});


const subs = document.querySelector('.new-todo-form');

subs.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("/api/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: data.get("text") }),
    })
        .then((res) => res.json())
        .then((todo) => {
            todocontainer.append(createTodoElement(todo));
            subs.querySelector('input').value = "";
            subs.querySelector("input").focus();
        });
});

const createTodoElement = (todo) => {
    const todoForm = document.createElement("form");
    todoForm.className = "todo-form";
    const textInput = document.createElement("input");
    textInput.name = "text";
    textInput.value = todo.text;
    todoForm.append(textInput);

    todoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // const data;
        const data = new FormData(event.target);

        fetch(`/api/todos/${todo.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: data.get("text") }),
        })

    })
}

//




