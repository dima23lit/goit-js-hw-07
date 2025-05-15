const form = document.querySelector('.login-form');

form.addEventListener('submit', messageUser);

function messageUser(event) {
    event.preventDefault();

    if (event.target.elements[0].value === "" || event.target.elements[1].value === "") {
        alert('All form fields must be filled in')
    } else {
        console.log({
            login: event.target.elements[0].value.trim(),
            password: event.target.elements[1].value.trim()
        })
    }
    
    form.reset()
}
