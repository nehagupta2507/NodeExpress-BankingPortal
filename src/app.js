const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');

//Configure the View Directory and Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');//configuration property for the view engine

//serve static files-- css and js files
app.use(express.static(path.join(__dirname,'public')));

//read content of the file accounts.json/ account data
const accountData = fs.readFileSync(
  path.join(__dirname,'json','accounts.json'),'utf-8'
);

//stores above javascript object
const accounts = JSON.parse(accountData);

//read content of the file users.json/ account data
const userData = fs.readFileSync(
  path.join(__dirname,'json','users.json'),'utf-8'
)
const users= JSON.parse(userData);





//render the index in view
app.get('/', (req,res) => res.render('index',{title:'Index'}));



app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
});
