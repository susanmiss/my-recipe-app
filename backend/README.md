# Name of Exercise

## Susan Missaglia 

### Technologies
- MondoDB
- React
- Node.js
- Express
- Bootstrap


### How to Use
- There are 2 folders inside this repo. After the clone, run npm install to each and then npm start to each folder.
- To run the tests, run 'npm test' in terminal

```
    npm install
    npm start

    npm test
```

- Information in .env file:
```
- Backend, use:
DATABASE = mongodb+srv://susan:su2004@my-recipe-app-yk3qu.mongodb.net/test?retryWrites=true&w=majority
PORT = 8000

- Frontend use:
REACT_APP_API=http://localhost:8000/recipe
```

### About the Recipe App
- It's a CRUD functional application. You can create a recipe, delete, and update.


### What challenges I/we overcame
- Need to read the mongoose documentation to find the correct methods to use on the backend
- I've lost a lot of time because I forgot to import axios in all components that I need to fetch.
- To update the recipe, I didn't realize that need fetch to get the post before put. Took a while.

### What I/we struggled with
- Since I had difficulty understanding how to get the id in UUID, I used the slugify package to use the recipe title as id.
- Struggle to update in frontend the recipe.


### With more time
- Implement a better form to post/update the recipe
- Use UUID and not slug
- Implement images to each recipe
- Do more tests
-Implement better validations in the backend.
