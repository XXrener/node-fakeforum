const mongoose = require('mongoose')
const config = require('../config')

mongoose.Promise = global.Promise

const IS_PROD = ['production','prod','pro'].includes(process.env.NODE.ENV)