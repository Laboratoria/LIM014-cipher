const submitButton = document.getElementById('submit-button');
const user = {
  name: 'alice1975',
  password: 'becky123',
}


submitButton.addEventListener('click', () => {

  let userNameValue = document.getElementById('user-name').value;
  let userPasswordValue = document.getElementById('user-password').value;
  let messageError = document.getElementById('messageError');

  if (userNameValue === user.name && userPasswordValue === user.password) {
    sessionStorage.setItem('nameUser', userNameValue);
    window.location.assign('./dashboard.html');
    messageError.innerHTML='';

  }
  else {

    messageError.classList.add('warning');
    messageError.innerHTML = 'ACCESO NEGADO USUARIO O CONTRASEÑA INCORRECTO';
  }

})