
import './App.css';
import { useState, useEffect } from 'react'
import video from "./food.mp4"
import Recipe from './Recipe';
import Filters from './Filters';

function App() {
const ID = "40f2b769"
const MY_KEY = "3674ba27ed69dfec7ff3225648f376ca"
const [searchTerm, setSearchTerm] = useState("chicken")
const [recipes, setRecipes] = useState([]);

const updateSearchTerm= (input) =>{
  setSearchTerm(input);
}
const searchRecipes = (e) => {
e.preventDefault();
const input = document.querySelector('.search');
setSearchTerm(input.value);


}
useEffect( () => {
  async function fetchData() {
    const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${ID}&app_key=${MY_KEY}`
    )
    const data = await response.json();
    const temp = [...data.hits]
    setRecipes(temp);
   
}
   fetchData();
  }, [searchTerm])

  return (
  <div className="App">

<div className="container">

    <video autoPlay="autoPlay" muted="muted" loop="loop">

        <source src={video} type="video/mp4"/>

    </video>

</div>
<h1>Find a Recipe</h1>
<div className="container">

<form onSubmit={(e)=>{searchRecipes(e)}} >
<input type="text" 
placeholder="what do you have in a fridge" 
className="search"
// onChange={(e)=>{updateSearchTerm(e)}}
// value ={searchTerm} 
 ></input>
</form>
</div>
<Filters propUpdateSearchTerm={updateSearchTerm} />
<div className="recipesContainer">
     <Recipe propRecipes={recipes}  />
</div>
    </div>
  );
}

export default App;
