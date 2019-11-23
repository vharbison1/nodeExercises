// Load the Shuffle Method from lodash
var shuffle = require('lodash/shuffle');

var numbers = [3,4,5,6,7];
//console.log(shuffle(numbers));


//Sum, Max, or Mean
var sum = require('lodash/sum');
var max = require('lodash/max');
var mean = require('lodash/mean');

//console.log(sum(numbers));
//console.log(max(numbers));
//console.log(mean(numbers));

//Filter function 
var users = [{name: 'Joe', age: 5}, { name : 'John', age: 10}];

var filter = require('lodash/filter');
//console.log(filter(users, person => person.name === 'John')); //Returns all the objects data

//
/*
Wallpaper is a module that lets you change your desktop background programatically. Axios is a
 module that let's you send and receive HTTP requests. Download File is a module that lets you 
 download a file to your computer from the internet.

Write a program that, when run, will set your desktop background to a random dog image
Use Axios to fetch a random dog image url from the Dog.ceo API
Download that image to your computer using the url you just fetched and Download File
Once the image is on your filesystem, you can then use Wallpaper to set the desktop background
*/
const axios = require('axios');
const download = require('download-file');
const wallpaper = require('wallpaper');

//Get Image using Axios API
const imageUrl = 'https://dog.ceo/api/breeds/image/random';


axios.get(imageUrl)
.then(function (response)
{
    return response.data.message;
})
.then(function (response)
{
    var options = {
        directory: "./images/dogs/", //Directory to store changes
        filename: "dog.gif" //Save As
    }
     
    download(response, options, function(error){
        if (error) 
        {
            throw error;
        }
        (async () => {
            await wallpaper.set(options.directory+options.filename);
         
            await wallpaper.get();
            //=> '/Users/sindresorhus/unicorn.jpg'
        })();
        console.log("woof")
    });  
});


