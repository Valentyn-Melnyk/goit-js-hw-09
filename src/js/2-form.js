// мій варіант
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

// варіант з лекції (не зовсім коректний, якщо дописувати в текстерію - то email зникає)
// const feedbackFormEl = document.querySelector('.feedback-form');
// const userData = {};

// const fillFeedbackFormFields = () => {
//   try {
//     const userDataFromLS = JSON.parse(
//       localStorage.getItem('feedback-form-state')
//     );

//     if (userDataFromLS === null) {
//       return;
//     }

//     // feedbackFormEl.elements.user_name.value = userDataFromLS.user_name;
//     // feedbackFormEl.elements.user_email.value = userDataFromLS.user_email;
//     // feedbackFormEl.elements.user_message.value = userDataFromLS.user_message;

//     for (const key in userDataFromLS) {
//       feedbackFormEl.elements[key].value = userDataFromLS[key];
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// fillFeedbackFormFields();

// const onFeedbackFieldChange = event => {
//   // const feedbackFieldEl = event.target;
//   const { target: feedbackFieldEl } = event;

//   const feedbackFieldName = feedbackFieldEl.name;
//   const feedbackFieldValue = feedbackFieldEl.value;

//   console.log('feedbackFieldName: ', feedbackFieldName);
//   console.log('feedbackFieldValue: ', feedbackFieldValue);

//   userData[feedbackFieldName] = feedbackFieldValue;

//   localStorage.setItem('feedback-form-state', JSON.stringify(userData));
// };

// const onFedbackFormSubmit = event => {
//   event.preventDefault();

//   localStorage.removeItem('feedback-form-state');
//   feedbackFormEl.reset();
// };

// feedbackFormEl.addEventListener('input', onFeedbackFieldChange);
// feedbackFormEl.addEventListener('submit', onFedbackFormSubmit);
