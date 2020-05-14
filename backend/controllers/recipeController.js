const Post = require('../models/recipeModel');
const slugify = require('slugify');




//SHOW ALL RECIPES:
exports.list = (req, res) => {
    Post.find({})
    .limit(10)
    .sort({createdAt: -1}) //to sow the first recipe first (-1 reverse the order)
    .exec((err, recipes) => {  //method from mongoose
        if(err) console.log(err);
            res.json(recipes);
    }) 
}

//CREATE NEW RECIPE:
exports.create = (req, res) =>{
    //console.log(req.body)
    const {recipeTitle, recipeContent} = req.body; 
    const slug = slugify(recipeTitle); //this is going to slugify the title
    //Creating a new Post: method from mongoose:
    Post.create({recipeTitle, recipeContent, slug}, (err, recipes) => {
        if (!recipeTitle){
            return res.status(400).json({error: 'Title for your recipe is required'});
        }else if(!recipeContent){
            return res.status(400).json({error: 'Content for your recipe is required'});
        }
        res.json(recipes);
        
 });
}



//SHOW SINGLE RECIPE:
exports.single = (req, res) => {
    const {slug} = req.params; //it cams with req.body as well
    console.log(req.params.slug)
    Post.findOne({slug: slug})
    .exec((err, recipe) => { 
        if(err) console.log(err);
            res.json(recipe);
    }) 
}


//UPDATE RECIPE:
exports.update = (req, res) => {
    const {slug} = req.params;
    const {recipeTitle, recipeContent} = req.body;
    //new: true is to be able to go back to the post after the update
    Post.findOneAndUpdate({slug}, {recipeTitle, recipeContent}, {new: true}).exec((err, recipe) => {
        if(err) console.log(err)
            res.json(recipe)
    })
}

//DELETE RECIPE:
exports.remove = (req, res) => {
    const {slug} = req.params;
    Post.findOneAndRemove({slug}).exec((err, recipe) => {
        if(err) console.log(err)
            res.json({
                message: 'Recipe Deleted'
        })
    })
 }