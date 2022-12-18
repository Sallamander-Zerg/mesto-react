// import { Link } from 'react-router-dom';
import React from 'react';
function PopupWithForm(props){
  const linkMarkup = (
    <p className="sign__text" to="sign-in">Уже зарегистрированы? Войти</p>
  )
  function handleSubmit(evt) {
    evt.preventDefault();
    onRegistration(values);
    resetForm();
  }
    return(
    <div 
     className='sign'
     data-modal="edituser">   
    <div className="sign__contaner">
        <form className="sign__form " name={`${props.name}`} id="formEdit" submit={handleSubmit}>
        <h2 className="sign__title">{props.title}</h2>
        <input
            name="name"
            type="email"
            className="sign__field field-name"
            placeholder="Email"
            minLength="2"
            maxLength="40"
            required
          />
          <p className="sign__error-block">
            <span className="sign__field-error fieldName-error"></span>
          </p>
          <input
            name="description"
            type="password"
            className="sign__field field-job"
            placeholder="пароль"
            minLength="2"
            maxLength="200"
            required
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
export default PopupWithForm