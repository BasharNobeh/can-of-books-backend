'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/books' , {useNewUrlParser :true,
useUnifiedTopology:true });



const bookSchema = new mongoose.Schema({
  title: String,
  description:String,
  states:String,
});

const Book = mongoose.model('books', bookSchema);


async function seedData (){
const firstBook = new Book({
title : "In Search of Lost Time",
description:"Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work",
states:"Available"


})
const secondBook = new Book({
  title : "Ulysses",
  description:"Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses).",
  states:"Available"
  
  
  })
  const thirdBook = new Book({
    title : "Don Quixote",
    description:"Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry.",
    states:"Available"
    
    
    })
    const fourthBook = new Book({
      title : "One Hundred Years of Solitude",
      description:"One of the 20th century's enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world, and the ultimate achievement in a Nobel Prize–winning car...",
      states:"Available"
      
      
      })
    await  firstBook.save();
    await  secondBook.save();
    await  thirdBook.save();
    await  fourthBook.save();




}
// seedData();


app.get('/Books', getTheBestBooks );


function getTheBestBooks(req,res){
  Book.find({},(err,result) =>{
    if(err){
      console.log(err)
    }
    else 
    {
      res.send(result)
    }
  })



}





app.get('/', (request, response) => {

  response.send('test request received')

})


















app.listen(PORT, () => console.log(`listening on ${PORT}`));
