const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connections');

const sess = {
    secret: process.env.SESS_SECRET,
    cookie: {
        maxAge: 60 * 60 * 1000, 
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }), 
};

const app = express();
const PORT = process.env.PORT || 3001;