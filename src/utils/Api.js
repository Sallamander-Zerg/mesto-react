 function Api(){
    const api = {
      baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52',
      headers: {
        authorization: '1ce13fac-ab02-437f-bb39-64ceea4d3ebd',
        'Content-Type': 'application/json'
      }
    } 
    const cards = () =>{
      fetch(`${api.baseUrl}/cards`, {
      headers: api.headers
    }).then(res => {res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)});
    }
    const user = () =>{
      fetch(`${api.baseUrl}/users/me`, {
      headers: api.headers
    }).then(res => {res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)});
   }
  }
  export default Api