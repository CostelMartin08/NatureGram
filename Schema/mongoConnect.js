const mongoose = require('mongoose');
require('dotenv').config();


mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://admin-costel-nature:${process.env.MONGO_CODE}@cluster0.xtynubh.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => {
        console.log('Conectat la baza de date MongoDB');
    })
    .catch(error => {
        console.error('Eroare la conectarea la baza de date MongoDB:', error);
    });

module.exports = mongoose;