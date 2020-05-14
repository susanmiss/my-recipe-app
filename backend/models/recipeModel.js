const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema//ObjectId is embed in Scheema



const recipeSchema = new mongoose.Schema({
    id:{
        type: String,
        unique: true,
        index: true,
        lowercase: true
    },
    recipeTitle: {
        type: String,
        trim: true, //when the user type space it will cut off
        min: 3,
        max: 160,
        required: true
    },
    slug: { //is the identifire of the post Ex: www/babab/react-slug, we need to make sure will not have spaces between -  will not will use id.
        type: String,
        unique: true, //need to be unique, because will be the route later on.
        index: true, 
        lowercase: true //if pass the Uppercase, we will have lowercase by default
    },
    recipeIngredients: {
        type: String, 
        required: true
    },
    recipeContent: {
        type: String,
        required: true
    },
    
}); 


module.exports = mongoose.model('Recipe', recipeSchema)