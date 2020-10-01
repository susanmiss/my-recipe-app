# my-recipe-app

## Susan Missaglia

### Technologies

- MongoDB
- React
- Node.js
- Express
- Bootstrap

## Quick Look

![Recepi cover](./frontend/public/recepi-cover.png)

### How to Use

- There are 2 folders inside this repo. Clone the repo.
- Create .env files to backed and frontend folders and paste as follow:

```
- - -  Information to paste in .env files - - -
- Backend, use:

DATABASE = mongodb+srv://susan:su2004@my-recipe-app-yk3qu.mongodb.net/test?retryWrites=true&w=majority
PORT = 8000

- Frontend use:
REACT_APP_API=http://localhost:8000/recipe

```

- After run npm install to ech folder and then npm start to each folder
- To run the tests, open the frontend folder, open terminal and run npm test

```
  npm install
  npm start
  npm test

```

### About the Recipe App

- It's a CRUD functional application. You can create a recipe, delete, and update.
- All backend has been tested in POSTMAN before start frontend.

### What challenges I/we overcame

- Need to read the mongoose documentation to find the correct methods to use on the backend
- I've lost a lot of time because I forgot to import axios in all components that I need to fetch.
- To update the recipe, I didn't realize that need fetch to get the post before put. Took a while.

### What I/we struggled with

- Since I had difficulty understanding how to get the id in UUID, I used the slugify package to use the recipe title as id.
- Struggle to update in frontend the recipe.
- Couldn't make my backend tests run properly.

### With more time

- Implement a better form to post/update the recipe
- Use UUID and not slug
- Implement images to each recipe
- Do more tests
- Implement better validations in the backend.
