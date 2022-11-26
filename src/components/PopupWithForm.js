function PopupWithForm(props){
    return(
    <div 
     className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_active':''}` }
     onClick={props.Overlay}
     data-modal="edituser">   
    <div className="popup__container">
        <button type="button" className="popup__close-butoon"  data-modal="edituser"  onClick={props.isClose}></button>
        <form className="popup__form " name={`${props.name}`} id="formEdit">
        <h2 class="popup__title">{props.title}</h2>
        {props.childrens}
        <button type="submit"  className="popup__save-button" name={`${props.name}`} id="saveform">{props.ButtonTitle}</button>
        </form>
    </div>
  </div>
  );
}
export default PopupWithForm