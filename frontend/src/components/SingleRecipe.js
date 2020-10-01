import React, { useEffect, useState } from 'react'
import axios from 'axios'


const SingleRecipe = (props) => {
    const [recipe, setRecipe, id] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/${props.match.params.id}`)
        .then(response => setRecipe(response.data)) 
        .then(() => console.log('id: ', props.match.params.id))
        .catch(error => alert('Error loading your single deliciuos recipe'))
    }, []);  
    
    const showSingleRecipe = () => (
        <div className="row">
            <div className="col-md-8 offset-md-2 pt-3 pb-2">
                <h1>{recipe.recipeTitle}</h1>
                <p>{recipe.recipeContent}</p>
            </div>
        </div>
    )


    return (
          <div className="container pb-5" data-test="component-singleRecipe">
            {/* {JSON.stringify(props)} */}

            <br />
             {showSingleRecipe()}  
          </div>
          )
}

export default SingleRecipe; 