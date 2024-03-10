const mongoose = require('mongoose')

const sampleSchema = new mongoose.Schema({
    id: String,
    description: String
});

const Sample = mongoose.model('Sample', sampleSchema, 'todoappcollection');

module.exports = Sample;