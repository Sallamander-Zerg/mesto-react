import { Link } from 'react-router-dom';
import React from 'react';
function SignUp(props){
  const [email, setEmail] = React.useState(''); 
    const [password,setPassword] = React.useState('');
      function handleChangeEmail(e) {
        setEmail(e.target.value);
      }
      function handleChangePassword(e) {
        setPassword(e.target.value);
      }
  const linkMarkup = (
    <p className="sign__text">Уже зарегистрированы? <Link to="/sign-in">Войти</Link></p>
  )
  function handleSubmit(evt) {
    evt.preventDefault();
    props. onRegistration({
      password: password,
      email: email,
    });
  }
    return(
    <div 
     className='sign'
     data-modal="edituser">   
    <div className="sign__contaner">
        <form className="sign__form " name={`${props.name}`} id="formEdit" onSubmit={handleSubmit}>
        <h2 className="sign__title">{props.title}</h2>
        <input
            value={email||''}
            name="name"
            type="email"
            className="sign__field field-name"
            placeholder="Email"
            minLength="2"
            maxLength="40"
            required
            onChange={handleChangeEmail}
          />
          <p className="sign__error-block">
            <span className="sign__field-error fieldName-error"></span>
          </p>
          <input
           value={password||''}
            name="description"
            type="password"
            className="sign__field field-job"
            placeholder="пароль"
            minLength="2"
            maxLength="200"
            required
            onChange={ handleChangePassword}
          />
          <p className="sign__error-block">
            <span className="sign__field-error fieldJob-error"></span>
          </p>
        <button type="submit"  className="sign__save-button" name={`${props.name}`} id="saveform">{props.buttonTitle}</button>
        {linkMarkup && linkMarkup}
        </form>
    </div>
  </div>
  );
}
export default SignUp