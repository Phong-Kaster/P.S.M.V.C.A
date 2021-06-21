/* ============= LIBRARY =============*/
const axios = require('axios');
const API_KEY = "9c3cb98520f309bd159e77512e8e5e28";


/* ============= MODEL =============*/
const isEmpty = require('../models/indexModel.js');
const categoryModel = require('../models/categoryModel.js');

/* ============= MODULES =============*/
module.exports.renderHomePage = (req,res) =>{
    categoryModel.findAllCategory();
    let category2 = categoryModel.findCategoryAndDelete();
    let category3 = categoryModel.findCategoryById();
    
    console.log("category2 : " + category2);
    console.log("category3 : " + category3);
    res.render("index.ejs",{ messenge : "" });
}

module.exports.getWeather = (req,res) =>{
    let cityName = req.body.cityName;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`; 
    let Empty = isEmpty(cityName);
    

    
    
    if( Empty == false )
    {
        res.render("index.ejs",{ messenge : "Please , enter a city name" });
    }
    else
    {
        axios.get(url)
            .then( ( req )=>{
                let temperature = req.data.main["temp"];
                let country = req.data.sys["country"];
                let city = req.data.name;

                res.render("index.ejs",{messenge : `It is ${temperature} °C  in ${city},${country}`});
            })
            .catch( (error) =>{
                console.log(error);
            })
    }
}