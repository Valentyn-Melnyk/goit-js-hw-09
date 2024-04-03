const registerForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const localStorageKeyValue = localStorage.getItem(localStorageKey);

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? '';
let storageValueObject = { email: '', textarea: '' };

if (localStorageKeyValue !== null) {
  try {
    storageValueObject = JSON.parse(localStorageKeyValue);
    registerForm.elements.email.value = storageValueObject.email;
    registerForm.elements.message.value = storageValueObject.textarea;
  } catch (error) {
    registerForm.elements.email.value = '';
    registerForm.elements.message.value = '';
  }
}

registerForm.addEventListener('input', evt => {
  if (evt.target.type === 'email') {
    storageValueObject.email = evt.target.value.trim();
  } else {
    storageValueObject.textarea = evt.target.value.trim();
  }
  localStorage.setItem(localStorageKey, JSON.stringify(storageValueObject));
});

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  console.log(form);

  const formEmail = form.elements.email.value.trim();
  const formTextarea = form.elements.message.value.trim();
  if (formEmail === '' || formTextarea === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(`Email:${formEmail}, Textarea:${formTextarea}`);
    const formRezultObj = {
      email: formEmail.trim(),
      textarea: formTextarea.trim(),
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formRezultObj));
    console.log(formRezultObj);
    localStorage.removeItem(localStorageKey);
    storageValueObject = { email: '', textarea: '' };
    form.reset();
    return formRezultObj;
  }
}
