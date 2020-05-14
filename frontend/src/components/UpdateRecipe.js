import React, {useState, useEffect} from 'react';
import axios from 'axios';




const UpdateRecipe = (props) => {

    const [state, setState] = useState({
        recipeTitle: '',
        recipeContent: '',
        slug: ''
    })

    

    const {recipeTitle, recipeContent, slug} = state

 
        useEffect(() => {
            axios.get(`${process.env.REACT_APP_API}/${props.match.params.slug}`)
            .then(response => {
                const {recipeTitle, recipeContent, slug} = response.data;
                setState({...state, recipeTitle, recipeContent, slug}) 
            }) 
            .catch(error => alert('Error loading single recipe'))
        }, []);  

        const handleChange = (name) => (event) => {          
            setState({...state, [name]: event.target.value}) 
        }

            const handleSubmit = event => {
                event.preventDefault()  
                axios
                .put(`${process.env.REACT_APP_API}/${slug}`, {recipeTitle,recipeContent})
                .then(response => {
                    console.log(response)  
                    const {recipeTitle, recipeContent, slug} =  response.data      
                    setState({...state, recipeTitle, recipeContent})
                    alert(`Recipe titled ${recipeTitle} is updated.`)
                })
                .catch(error => {
                    console.log(error.response)
                    alert(error.response.data.error);
                }) 
        }  


        const showUpdateForm = () => (
            <form onSubmit={handleSubmit}>
    
                  <div className="form-group" >
                      <label className="text-muted">Recipe title</label>
                      <input onChange={handleChange('recipeTitle')} value={recipeTitle} type="text" className="form-control" placeholder="Recipe Title" required />
                  </div>
              
                  <div className="form-group" >
                      <label className="text-muted">Recipe</label>
                      <input onChange={handleChange('recipeContent')} value={recipeContent} type="text" className="form-control" placeholder="Recipe" required />
                  </div>
          
                  <div>
                      <button className="primary">Update Recipe</button>
                  </div>
            </form>      
        )
          



    return (
        <div className="container pb-5">
           {/* {JSON.stringify(props)} */}

          <br />
              <h1>Update Recipe</h1>
               {showUpdateForm()}
        </div>
        )
}

export default UpdateRecipe;
