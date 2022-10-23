<p align="center">
  <img src="./assets/logo-pg-sample.png"/>
</p>

<h3 align='center'>...Looking for a unique and special culinary experience? Look no further than Private Gourmet App! We'll help you find the perfect chef for your needs, and book them right away so you can focus on what's important"</h3>
<br />
<br />

## Description
***Private Gourmet*** - An app that allows you to find and book the best private chefs in town. And able you to experience fine dining in your home kitchen.
<br />

- Deployed Link using Heroku: [Private Gourmet App](https://privategourmet.herokuapp.com/)
- Features:
    - Reservation Page 
    - User's Sign-in and Create an account page
<br />
<br />

## Table of Contents
1. [Demo](#demo)
    1. [Live url demo](#live-url-demo)
2. [Featured functionalities](#featured-functionalities)
3. [Framework and Packages](#framework-and-packages)
4. [Future Development](#future-development)
5. [Feedback or Contribute](#feedback-or-contribute)
6. [License](#license)
7. [Reference](#reference)
8. [Credits](#credits)
<br />

## Demo
```
- Demonstration of the app, that allows users to explore the different navigation of Private Gourmet app.
```
#### Live url demo

- For a non-user page, featuring: HOME | ABOUT | CHEFS | RESERVATION(A protected route for registered users only)
<br />
![Non-user-page](assets/private-gourmet-a.gif)
<br />
<br />

- For a registered users page, featuring: HOME | ABOUT | CHEFS | RESERVATION(Which allows you to make a booking)
<br />
![Registered-user-page](assets/private-gourmet-b.gif)
<br />
<br />

## Featured functionalities
<details>
<summary>Responsive UI</summary>

- pages with 4 main routh path and nested routes.
</details>

<details>
<summary>Protected routes</summary>

- Reservation page that only allowed registered user to make a booking.
</details>

<details>
<summary>Ability to save user's data</summary>

- Data was able to pass through those input fields (Reservation page & Create an account page) and saved it in their specific collection fields. 
- Password was converted to hash strings
- Reservation set of fields was saved as an objectID to the users collection
</details>

<details>
<summary>GraphQL concept</summary>

- used queries and useMutation to post data 
- schemas for the typeDefs and resolvers
</details>

<details>
<summary>Server-side</summary>

- Using MongoDB and Mongoose for the Database
- Using apollo server to create queries and mutations to interact with the API
- Include JWT (Json Web Token) for authentication
</details>

<details>
<summary>Added service worker functionality</summary>

- (not sure if its working)
</details>
<br />

## Framework and Packages
<details>
<summary>Client-side</summary>

- React 18
- Material UI (css library)
- Customised CSS (file.module.css)
- Datepicker (Material UI + dependencies)
</details>

<details>
<summary>Server-side</summary>

- Nodejs
- Expressjs
- MongoDB Atlas
- Apollo server express
- bcrypt
- jsonwebtoken (JWT)
- Auth middleware
- nodemon
</details>

<details>
<summary>Deployment</summary>

- Heroku
  - changed to localhost:5000
  - Procfile
  - added scripts for client-side and server-side package.json
</details>
<br />

## Future development
<details>
<summary>Minor features</summary>

- For datepicker: have to pass the data as a string not null
- For ChefSelection: have to pass the data from the selected chefs
- Polish the navigation routes 
</details>

<details>
<summary>Major features</summary>

- user's 2-way verification
- Have an admin & client's login page
- users login: update their profile
- admin page: be able to have a dashboard (a list of booking dates)
- search field converts to search category (premium & budget)
- able to send the reservation once submitted: client(to receive confirmation of the reservation details) and chefs(to receive a reservation email booked by the client)
</details>
<br />

## Feedback or Contribute
<details>
<summary>Hello World 🚀</summary>

- This past 6 months was been a rollercoaster journey, I didn't think of myself that I will be able to build something different out of my comfort zone. An awesome learning experience, with frustrations and some continuous graveyard shifts just to code and learn through applying what I've learned.

If you want to keep in touch and fork my private gourmet app, I'm grateful to collaborate and learn from your expertise. 

Hello World! My friend 🚀 
</details>

***I'm looking forward to hear from your feedback or suggestion*** email: codingowl898@gmail.com
<br />

## License
All rights reserved. Under the of<br />![apache-2.0](https://img.shields.io/badge/license-Apache--2.0-green)
<br />

## Reference
<details>
<summary>React Router (Sandbox)</summary>

- https://v5.reactrouter.com/web/guides/quick-startx
</details>
<details>
<summary>Apollo Sandbox</summary>

- https://studio.apollographql.com/sandbox
</details>
<details>
<summary>Pexels & Adobe Stock</summary>

- for the images used for this app
</details>
<details>
<summary>Documentations</summary>

- https://mui.com/material-ui/getting-started/overview/
- https://graphql.org/learn/schema/#the-query-and-mutation-types
- https://reactrouter.com/en/main
- stackoverflow contributions by the other developers
- and many more..
</details>
<br />

## Credits
<details>
<summary>Thank you 👨‍🚀🍦🍕</summary>

- Thank you so much Sam 🍦🍕 & James for the patience and effort for us to grasp and understand what we are suppose to be doing.
- And to Trilogy Education..
</details>
