## freeze-dried SoftUni-ReactJS-Project

* React Softuni App is an application that has been developed for the exam at the end of the React course.

Freeze-dried
The application represents a SPA application where users could see/post/edit/delete/buy fruits. For the purpose of Front-End development it was used React.js with a building tool Vite. For the purpose of storing information and authentication/authorization it was used SoftUni-Practice server which is deployed at Firebase.

## Backend

* Using SoftUni practice server which is deployed at Firebase.

## Roles

Non-authenticated users can visit the application and are authorized to see and use:

* Register - allows the user to Register and perform authenticated operations afterwards
* Login - allows the user to Login with an existing account and perform authenticated operations afterwards
* Fruits - allows the user to see all open offers that have not been bought yet
* Fruits details - allows the user to see more details of an offer such as its category, price and details
Authenticated users (non-owners) can visit the application and are authorized to see and use:

* Profile - allows the user to see who is logged in currently as well as the offers that have been bought by the current user
* Fruits - allows the user to see all open offers that have not been bought yet
* Fruits details - allows the user to see more details of a fruit such as its additional information as well as to buy it
* Fruits details buy - functionality that allows the user to buy a specific item. Once bought, this fruits is set as "Purchased" and could be bought again.

* Profile - allows the user to see who is logged in currently as well as the offers that have been bought by the current user

## Routes

* / - Displays home page;
* /catalog - Displays all offers;
* /login - Displays Login page;
* /register - Displays Register page;
* /catalog/:id - Displays specific Fruit's details
* /profile - Displays user's profile data and the offers that have been bought so far;
* /catalog/:id/edit - Displays a form in which the the owner of the fruit could edit the offer's details
* /catalog/:id/delete - Deletes the respective offer (only for owners)
* /catalog/:id/buy - Displays the same fruit with a label that it has been bought already.
* /create - Displays a form in which authenticated users could add a fruit.

## How to run the project
In order to run the project on your own, you need to run the following commands:
* for client side:
-npm install
-npm run dev
* to run the server:
run the terminal inside the server directory and use:
-node server.js

Once the last command has been executed, the terminal will display the port at which you could access the application.

## Firebase hosting

* The applications has also been published on a free hosting provided by Firebase. URL: https://freeze-dried-softuni.web.app/

Please note that the application stored on Firebase might differ from the source code in GitHub as we cannot ensure that the latest version will be available as soon as developed.