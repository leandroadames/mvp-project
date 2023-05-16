fetch("http://localhost:3000/api/todo")
    .then((res) => res.json())
    .then((data) => {
        console.log("todolist", data);
    });




// getting button to work

const CompleteButton = document.querySelector('#CompleteAll');
CompleteButton.addEventListener("Click", function () {
    // making a button asking if u sure
    const yes = document.createElement("button");
    yes.setAttribute('class', 'button');
    yes.innerHTML = 'Are you sure';
    body.append(yes);
    CompleteButton.remove();

    const no = document.createElement("button");
    no.setAttribute('class', 'button');
    no.innerHTML = 'NO!';
    body.append(no);
    yes.addEventListener("Click", function () {

    })
})