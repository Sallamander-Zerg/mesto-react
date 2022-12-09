import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(''); 
    const [description,setDescription] = React.useState('');
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 
      function handleChangeName(e) {
        setName(e.target.value);
      }
      function handleChangederecton(e) {
        setDescription(e.target.value);
      }
      function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
          name: name,
          about: description,
        });
      } 

  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.onOpen ? "popup_active" : ""
      }`}
      data-modal="edituser"
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-butoon"
          data-modal="edituser"
          onClick={props.isClose}
        ></button>
        <form className="popup__form " name={`${props.name}`} id="formEdit"  onSubmit={handleSubmit}>
          <h2 className="popup__title">{props.title}</h2>
          <input
          defaultValue={currentUser.name}
            value={name}
            name="fieldName"
            type="text"
            className="popup__field field-name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
            onChange={handleChangeName}
          />
          <p className="popup__error-block">
            <span className="popup__field-error fieldName-error"></span>
          </p>
          <input
          defaultValue={currentUser.name}
            value={description}
            name="fieldJob"
            type="text"
            className="popup__field field-job"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
            onChange={handleChangederecton}
          />
          <p className="popup__error-block">
            <span className="popup__field-error fieldJob-error"></span>
          </p>
          <button
            type="submit"
            className="popup__save-button"
            name={`${props.name}`}
            id="saveform"
          >
            {props.buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditProfilePopup;
