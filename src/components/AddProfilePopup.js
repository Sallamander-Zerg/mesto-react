import React from 'react';
function AddProfilePopup(props) {
    const [link, setLink] = React.useState(''); 
    const [name,setName] = React.useState('');
      function handleChangeName(e) {
        setName(e.target.value);
      }
      function handleChangeLink(e) {
        setLink(e.target.value);
      }
      function handleSubmit(e) {
        e.preventDefault();
        props.onAddCard({
          name: name,
          link: link,
        });
       
      } 
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_active" : ""
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
              defaultValue=""
              value={name}
              name="fieldMesto"
              type="text"
              className="popup__field field-alt"
              placeholder="Название"
              pattern="[0-9А-Яа-яa-zA-Z- ]{2,}"
              minLength="2"
              maxLength="30"
              required
              onChange={handleChangeName}
            />
            <p className="popup__error-block">
              <span className="popup__field-error fieldMesto-error"></span>
            </p>
            <input
              defaultValue=""
              value={link}
              name="fieldSrc"
              type="url"
              className="popup__field field-src"
              placeholder="Ссылка на картинку"
              required
              onChange={handleChangeLink}
            />
            <p className="popup__error-block">
              <span className="popup__field-error fieldSrc-error"></span>
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
export default AddProfilePopup;
