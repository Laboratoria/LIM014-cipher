const submitButton = document.getElementById('submit-button');
const formContainer = document.getElementById('form-user');
const user = {
  name: 'alice1975',
  password: 'becky123',
}


submitButton.addEventListener('click', () => {

  let userNameValue = document.getElementById('user-name').value;
  let userPasswordValue = document.getElementById('user-password').value;
  if (userNameValue === user.name && userPasswordValue === user.password) {
    sessionStorage.setItem('nameUser', userNameValue);
    window.location.assign('./dashboard.html');
    formContainer.innerHTML='';

  }
  else {
    let NewMessageError = document.createElement('p');
    NewMessageError.innerHTML = 'ACCESO NEGADO USUARIO O CONTRASEÑA INCORRECTO';
    formContainer.appendChild(NewMessageError);

  }

})