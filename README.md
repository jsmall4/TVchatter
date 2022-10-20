# Title of Project: TVChatter

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents:

- [Project Description](#description)
- [License](#license)
- [Command to install](#command-to-install)
- [Instructions for users](#instructions-for-users-of-the-app)
- [Features of the project](#features-of-the-project)
- [Link to GitHub Repo](#Link-to-Git-hub-repo.)
- [Screenshot of Application](#Screenshot-of-Application)
- [Bugs](#bugs)
- [Version History](#Version-history)
- [Link to deployed Heroku App](#Link-to-deployed-Heroku-App)
- [How to contribute](#how-to-contribute)
- [Questions](#questions)

## Description

The motivation behind this project was to build a blog website where TV fans can post and comment on their favourite series. They can also judge whether a series is worth watching after reading comments.

AS a TV show fan,
I WANT a blog site
SO THAT I can make and comment on posts, and share my thoughts and opinions, when I am logged in.

GIVEN a blog site

WHEN I visit the site for the first time

- THEN I am presented with the homepage, which includes a carousel of images of the latest popular series. There are also navigation links to sign up, to log in, to view my dashboard, and to log out.

WHEN I click on the link to Sign Up

- THEN I am taken to the sign up page and am prompted to input my email, username and password.
  WHEN I have signed up
- Then my user credentials are saved.
  WHEN they are saved,
- THEN I have to log in.
  WHEN I have logged in with my username and password
- THEN I can access any part of the website.

WHEN I click on any of the image links in the homepage I am taken to that TVShow page, where I can view other user comments.

WHEN I choose to input my own post with post title and post name on the TVShow page,

- THEN my post appears on the TV Show page.

WHEN I choose to reply to other user comments

- THEN my comment appears under their post.

WHEN I navigate to the dashboard page,

- THEN my previous post history is laid out.

WHEN I choose to log out and click the button on the nav bar,

- THEN I am logged out.

## License

MIT

## Command to install

npm i.

## Instructions for users of the app

Clone the application, install dependencies: Express, express-handlebars, express-session, MySQL2, Dotenv, Sequelize, connect-session-sequelize, nodemon and bcrypt.package. Run the schema and then seeds.sql files. Seeding can be done through 'npm run seed' Then run the app using node server.js using 'npm start' or allow nodemon to work if installed.

## Features of the project

When a user signs up with their email and password, they can then log in. When they log in they can go to the homepage, click on a TV series image and be taken to the TVShow page. Here they can write their own posts and comment on others. They can view their post history in the dashboard.

## Link to Git-hub repo.

[Link to repo](https://github.com/jsmall4/TVchatter)

## Screenshot of application:

[Screenshot of website](https://github.com/jsmall4/TVchatter/issues/53#issue-1410170431)

## Bugs

- The handlebars were not connected to the database. Resolved.
- Connection failed to work. Resolved.
- Not able to post comments or reply.

## Version history

- 0.1 .env file configured, dependencies installed.
- 0.2 Created connection and finished models and seeds.
- 0.3 Created handlebars.
- 0.4 Created routes.

# Link to deployed Heroku App

- [Deployed Heroku App](https://tvchatter.herokuapp.com/)

## How to contribute

Git clone the repo, work on the code, then make a pull request.
