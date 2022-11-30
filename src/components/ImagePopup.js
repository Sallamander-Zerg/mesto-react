function ImagePopup({card, onClose, onOpen, isOverlay}){
    return(
        <div onClick={isOverlay} className={`popup  popup_bagraund-img popup_type_card ${onOpen ? 'popup_active':''}`}  data-modal="ImgCard"> 
        <div className="popup__contaner-img">
          <button type="button" className="popup__close-butoon" id ="closeimg" data-modal="ImgCard" onClick={onClose}></button>
        <div className="popup__conent">
          <img className="popup__img" src={`${card.link}`} alt={`${card.name}`}/>
          <div className="popup__name">{card.name}</div>
        </div>
        </div>
      </div> 
  );
}
export default ImagePopup