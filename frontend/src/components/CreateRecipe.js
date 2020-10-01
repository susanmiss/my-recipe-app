import React, {useState} from 'react';
import axios from 'axios';




const CreateRecipe = () => {

    const [state, setState] = useState({
        recipeTitle: '',
        recipeContent: ''

    })


    const {recipeTitle, recipeContent} = state 

    const handleChange = (name) => (event) => {
        //console.log('name', name, 'event', event.target.value)
        setState({...state, [name]: event.target.value})
    }

    //HANDLE SUBMIT
    const handleSubmit = event => {
        event.preventDefault() 
        axios.post(`${process.env.REACT_APP_API}/create`, {recipeTitle, recipeContent})
        .then(response => {
            console.log(response)
            setState({...state, recipeTitle: '', recipeContent: ''});
            // setContent('');
            alert(`Recipe title ${response.data.title} is created.`)
        })
        .catch(error => {
            console.log(error.response)
            alert(error.response.data.error);
        })
    }


    return (
        <div className="container p-5">
          <br />
          <h1>Add Your Favorite Fat Recipe:</h1>
          <br />
          {/* {JSON.stringify(state)} */}
          <form onSubmit={handleSubmit}>

              <div className="form-group" >
                  <label className="text-muted">Recipe Title</label>
                  <input onChange={handleChange('recipeTitle')} value={recipeTitle} type="text" className="form-control" placeholder="Title Recipe" required />
              </div>

              <div className="form-group" >
                  <label className="text-muted">Recipe Title</label>
                  <textarea onChange={handleChange('recipeContent')} value={recipeContent} type="text" className="form-control txt-rec" placeholder="Recipe" required ></textarea>
              </div>
      
        
              <div>
                  <button className="primary">Create your Recipe</button>
              </div>
          </form>
        </div>
      )
}
export default CreateRecipe;
