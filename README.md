# House of X Assignment

## Implemented Backend Features
- Save news articles
- Choose Favourite Category
- Explore news feed (Get news from all categories)
- Favourite news feed (Get news from favourite categories)

## Implemented Frontend Features
- Explore news feed

## Techstack
- Frontend : React-native
- Backend: Nodejs, express, mongoDB, mongoose (ORM/ODM)

## Features that could have been better
- Assigning unique ID to all news articles
- Regularly fetching news articles using Crontab and saving them into DB
- Dark mode in APP

## Architecture
### Backend Architecture
```
App.js is the entry point of the backend server. I have tried to keep the code as modular as possible. 
For this purpose, there are 3 layers in the backend architecture, namely: routes, controllers, models. 

All the API endpoints are written in routes folder. Everything related to business logic is written 
into controllers and all the DB schemas are written into models folder.
```

