import React, { useEffect, useState } from 'react'
import axios from 'axios'


const SingleRecipe = (props) => {
    const [recipe, setRecipe] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/recipe/${props.match.params.slug}`)
        .then(response => setRecipe(response.data)) 
        .catch(error => alert('Error loading your single deliciuos recipe'))
    }, []);  
    
    const showSingleRecipe = () => (
        <div className="row">
            <div className="col-md-8 offset-md-2 pt-3 pb-2">
                <h1>{recipe.recipeTitle}</h1>
                <p>{recipe.recipeIngredients}</p>
                <p>{recipe.recipeContent}</p>
            </div>
        </div>
    )


    return (
          <div className="container pb-5">
            {/* {JSON.stringify(props)} */}

            <br />
             {showSingleRecipe()}  
          </div>
          )
}

export default SingleRecipe; 