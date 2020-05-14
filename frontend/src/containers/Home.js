import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Logo from './logo-img.jpeg'


const App = () => {
  const [recipes, setRecipes] = useState([]);


  const fetchRecipes = () => {
    axios.get(`${process.env.REACT_APP_API}/list`)
      .then(response => {
        console.log(response)
        setRecipes(response.data)
      })
      .catch(error => alert('Error fetching recipes'))
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  const deleteConfirm = (slug) => {
    let answer = window.confirm('Are you sure you want to delete this delicius recipe?')
    if (answer) {
      deleteRecipe(slug)
    }
  }

  const deleteRecipe = (slug) => {
    axios
      .delete(`${process.env.REACT_APP_API}/recipe/recipe/${slug}`)
      .then(response => {
        alert(response.data.message)
        fetchRecipes()
      })
      .catch(error => alert('error deleting this amazing recipe'))
  }


  return (
    <div className="container pb-5">

      <br />
      <br />
      <h1 style={{ textAlign: 'center' }}>Getting fat in lockdown</h1>
      <br />
      <br />
      {/* <img src={Logo} alt="logo" className="logo-img" /> */}
      <hr />
      {/* {JSON.stringify(posts)} */}
      {
        recipes.map((recipe, i) => (
          <div className="row" key={recipe._id} style={{ borderBottom: '1px solid silver' }}>
            <div className="col pt-3 pb-2">

              <div className='row'>

                <div className="col-md-10">
                <Link to={`/recipe/${recipe.slug}`}> <h2>{recipe.recipeTitle}</h2></Link>
           
                </div>

               
                  <div className="col-md-2">
                  <Link to={`/recipe/update/${recipe.slug}`} className="btn btn-sm btn-outline-warning">
                      Update Recipe
                      </Link>

                <button onClick={() => deleteConfirm(recipe.slug)} className="btn btn-sm btn-outline-danger ml-1">Delete Recipe</button>

                  </div>
              

              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}


export default App;

