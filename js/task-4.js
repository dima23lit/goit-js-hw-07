const loginForm = document.querySelector(".login-form")

loginForm.addEventListener("submit", handlerGetComment)

function handlerGetComment(event) {
    event.preventDefault()
    const { email, password } = event.currentTarget.elements;

    if (email.value === "" || email.value.includes(" ") || password.value === "" || password.value.includes(" ")) {
        alert('All form fields must be filled in')
    } else {
        const data = {
            email: email.value.trim(),
            password: password.value.trim(),
        }
        loginForm.reset()
        console.log(data);
        }
    }
