function ImagePopup({card, onClose, onOpen}){
    return(
        <div class={`popup  popup_bagraund-img popup_type_card ${onOpen ? 'popup_active':''}`}  data-modal="ImgCard"> 
        <div class="popup__contaner-img">
          <button type="button" class="popup__close-butoon" id ="closeimg" data-modal="ImgCard" onClick={onClose}></button>
        <div class="popup__conent">
          <img class="popup__img" src={`${card.link}`} alt={`${card.name}`}/>
          <div class="popup__name">{card.name}</div>
        </div>
        </div>
      </div> 
  );
}
export default ImagePopup