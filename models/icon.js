"use strict";
const mongoose = require('mongoose');

const iconSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    }
});


const Icon = mongoose.model('Icon', iconSchema);

module.exports = Icon;
