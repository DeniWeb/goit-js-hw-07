const form = document.querySelector('.login-form');

function onFormSubmit(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: email.trim(),
        password: password.trim(),
    };

    console.log(formData);
    form.reset();
}

form.addEventListener('submit', onFormSubmit);
