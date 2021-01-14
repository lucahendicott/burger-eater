# Eat-The-Burger  

## Description  
CRUD Application using a mysql database, express and express-handlebars. User's can add names of cheeseburgers which will appear under the "ready-to-eat" list. Any burger added will have a "DEVOUR" button that the user can click to send the burger on over to the "Devoured List".     

## Table of Contents  
* [Installation](#installation)  
* [Usage](#usage) 
* [Credits](#credits)  
* [Deployed App](#deployed-app)
* [Questions](#questions)  

## Installation  
Application runs as is in the browser. No downloads or installs neccessary.  

## Usage  
![eat-the-burger-usage-gif](public/assets/images/bruger-eater.gif)

This app is using various js files, bootstrap, custom CSS and handlebars for the HTML. Using mysql for the database, the users entries are inserted into a brugers table which generates an id, burger name and "devoured" set to default false for each entry. Once the user enters a burger, that burger is displayed on the left side of the page. They then have a button to "devour" each burger entered. Once "devour" is clicked, it sets the devoured boolean to true, and displays that burger on the right side of the page, under the devoured list. 

The burgers entered are added to the html using express-handlebars. They are sent to the proper list with their id and name this way. The mysql queries are created in an orm.js file that uses functions to call the queries with express in burgers_controller.js with get, post and put methods. These functions are also called in burger.js to export the burgers with proper columns and values.

index.js adds event listeners to the buttons, to navigate which burgers go where. 

connection.js is using process.env.JAWSDB_URL to create the connection to JAWSBD for deploymnet on Heroku.

This app is using bootstrap as a framework, but also a lot of custom CSS to really stylize and add color. The custom CSS and bootstrap combined allows the lists, input and buttons to display evenly and be spaced proplerly depending on the user screen size. All fonts are using google fonts.
  
## Credits   
[CSS color palettes](https://flatuicolors.com/)   

## Deployed App
[EAT_THE_BURGER](https://murmuring-badlands-36701.herokuapp.com/)

## Questions  
Contact information for any questions about this application:
* https://github.com/lucahendicott  
* lucahdavid88@gmail.com  
