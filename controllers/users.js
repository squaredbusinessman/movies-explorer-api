const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const errorsCodes = require('../errors/errorCodes');
