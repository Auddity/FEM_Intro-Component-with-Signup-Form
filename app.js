const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('btn');

const formControl = document.querySelectorAll('.form-control');
const errMessage = document.querySelectorAll('.err-message');

const inputArray = [firstName, lastName, email, password];

// Show Input Error Message
function showError(input, index, message) {
  input.nextElementSibling.classList.remove('hidden');
  input.classList.add('error');
  errMessage[index].classList.remove('hidden');
  errMessage[index].innerHTML = message;
  formControl[index].classList.remove('mb');
};

// Show Success Outline
function showSuccess(input, index) {
  input.nextElementSibling.classList.add('hidden');
  input.classList.add('success');
  errMessage[index].classList.add('hidden');
  formControl[index].classList.add('mb');
};

// Check Required Fields & Email Validity
function checkRequired(inputArray) {
  inputArray.forEach((input, index) => {
    if(input.value === '') {
      showError(input, index, `${input.placeholder} cannot be empty`);
    } else if (input.validity.typeMismatch) {
      showError(input, index, 'Looks like this is not an email')
    } else {
      showSuccess(input, index);
    };
  });
}; 

// Event Listeners
submit.addEventListener('click', e => {
  e.preventDefault();

  checkRequired(inputArray);
});

