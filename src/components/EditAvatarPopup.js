import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
function EditAvatarPopupp(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [avatar, setlink] = React.useState(''); 
    React.useEffect(() => {
        setlink(currentUser.avatar);
      }, [currentUser]); 
      function handleChangelink(e) {
        setlink(e.target.value);
      }
      function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({
            avatar: avatar
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
              name="fieldAvatarSrc"
              type="url"
              defaultValue={currentUser.avatar}
              className="popup__field field-avatr-src"
              placeholder="Ссылка на картинку"
              value={avatar}
              onChange={handleChangelink}
              required
            />
            <p className="popup__error-block">
              <span className="popup__field-error fieldAvatarSrc-error"></span>
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
export default EditAvatarPopupp;
