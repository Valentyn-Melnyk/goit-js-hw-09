const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(`Login:${email}, Password:${password}`);
    const formRezultObj = {
      login: email.trim(),
      password: password.trim(),
    };
    console.log(formRezultObj);
    form.reset();
    return formRezultObj;
  }
}
