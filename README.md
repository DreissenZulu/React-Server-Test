# React Server Test
A React app with a MySQL server component. This test was designed to understand the structure required to use Node.JS and ReactJS in conjunction, by using an SQL server together with a React frontend. Users can write posts and submit them to a persistent database.

## Challenges
This app was similar to apps I've built before. The MVC structure of the server is mostly unchanged, with some exceptions. The app now uses the React client build folder to get the static files necessary. When deploying to Heroku, I had diffculty figuring out how to tell Heroku to compile the production build of the React server when the React app wasn't the root directory. I later found out I needed to add scripts to perform this action to my root package.json, having it change directory to the React frontend.

Another challenge I encountered was in the frontend. When I initially made my database call React would infinitely loop and call for data from the database, even when the state wasn't actually changing. I was able to prevent this by performing a check on the state and the value returned by the database - if they matched then the state will not be rewritten.