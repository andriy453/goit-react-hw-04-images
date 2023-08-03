import  { useState } from 'react'
import Notiflix from 'notiflix';

import './Searchbar.css'

const Searchbar =  ({onSubmit}) =>{
const [ inputvalue ,setInputvalue] = useState('');

 const hendleSubmit = (e)=>{
  e.preventDefault () 
  if( inputvalue.trim() === ''){
     Notiflix.Notify.failure('please writing value ');
  }
  onSubmit(inputvalue);
  setInputvalue('')
}

 const hendleChange = (e) =>{
  setInputvalue( e.currentTarget.value.toLowerCase())
}
return (
  <header className="searchbar">
  <form  onSubmit={ hendleSubmit}   className="form">
    <input  
    onChange={hendleChange}
      className="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
      <button type="submit" className="button">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1200px-Search_Icon.svg.png" width="30px" height="30px" alt=""/>
    </button>
  </form>
</header>
)

}

export default Searchbar
