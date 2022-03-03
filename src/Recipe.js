import React from "react"

function Recipe({propRecipes}) {
let offSet=10;
return(
    <div >
    {propRecipes.map( (element,index) =>{
     const {recipe} = element;
        return(<div className="ingredientsContainer">
        <div key= {index} className="recipesContainer">
        <h3>{recipe.label}</h3>
        <img src={recipe.image} alt="dish"></img>
        </div>
        <div key={index+400}>  
             <button className="showRecipeBtn"> <a href={recipe.url} target="_blank" rel="noreferrer">Full recipe</a> </button>   
        </div>
        <div key= {index+100} className="ingredientes">
            <ul className="listIngredients">
         {recipe.ingredientLines.map( item => {
              offSet++;
             return(
                 <div key={index+offSet}>
          <li>{item}</li>
          </div>
             )
         })}

            </ul>
        </div>

        </div>
        )
    })}


        </div>
)

}

export default Recipe;