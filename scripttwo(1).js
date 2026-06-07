// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    document.querySelectorAll(".error").forEach(error=>{
        error.textContent="";
    });

    document.getElementById("successMessage").textContent="";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === ""){
        document.getElementById("nameError").textContent =
        "Name is required";
        valid = false;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailError").textContent =
        "Enter a valid email";
        valid = false;
    }

    const phonePattern =
    /^[0-9]{10}$/;

    if(!phonePattern.test(phone)){
        document.getElementById("phoneError").textContent =
        "Enter a valid 10-digit phone number";
        valid = false;
    }

    if(message === ""){
        document.getElementById("messageError").textContent =
        "Message is required";
        valid = false;
    }

    if(valid){
        document.getElementById("successMessage").textContent =
        "Form Submitted Successfully!";
        form.reset();
    }

});


// Dynamic To-Do List

function addTask(){

    const taskInput =
    document.getElementById("taskInput");

    const taskText =
    taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const li =
    document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">
            ${taskText}
        </span>

        <button onclick="removeTask(this)">
            Delete
        </button>
    `;

    document.getElementById("taskList")
    .appendChild(li);

    taskInput.value="";
}

function removeTask(button){
    button.parentElement.remove();
}

function toggleTask(task){
    task.classList.toggle("completed");
}