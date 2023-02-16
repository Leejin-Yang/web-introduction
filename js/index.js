const visitorNameInput = document.querySelector('#visitor-name');
const movieCheckboxes = document.querySelectorAll('.movie-checkbox');
const registerButton = document.querySelector('#visitor-register-button');
const resetButton = document.querySelector('#visitor-reset-button');

const onClickRegisterButton = () => {
  const name = visitorNameInput.value;
  const movieCheckedCount = [...movieCheckboxes.values()]
    .map((checkbox) => checkbox.checked)
    .filter(Boolean).length;

  alert(`${name}님, 저와 ${movieCheckedCount}개의 취향이 같으시네요!`);
};

const onClickResetButton = () => {
  visitorNameInput.value = '';
  movieCheckboxes.forEach((checkbox) => (checkbox.checked = false));
};

registerButton.addEventListener('click', onClickRegisterButton);
resetButton.addEventListener('click', onClickResetButton);
