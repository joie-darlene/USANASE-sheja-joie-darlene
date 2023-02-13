const express = require('express');
 const app = express();
  const port = 5011;
   app.listen(port, () => {
      console.log(`my Calculator app is listening at http://localhost:${port}`); }); 
      app.get('/addition', (req, res) => { 
          const numbers = req.query.numbers; 
          let sum = 0; for (let i = 0; i < numbers.length; i++) { 
               sum += parseInt(numbers[i]); } 
               res.send({ sum }); });

               app.get('/multiplication', (req, res) => { 
                    const numbers = req.query.numbers; 
                    let product = 1; 
                    for (let i = 0; i < numbers.length; i++) {
                          product *= parseInt(numbers[i]); } 
                          res.send({ product }); }); 