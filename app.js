const express = require('express');
const app = express();
const port = 3000;
const indexRouter = require('./routers/indexRouters.js');

app.use( express.urlencoded( {extended :  false} ) );
app.use( express.json());
app.use( express.static("public"));// get access to pubic folder
app.set( "views","views" );
app.set( "view engine","ejs");// set view engine is ejs 

app.use("/",indexRouter);


app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});