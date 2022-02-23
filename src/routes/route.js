const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/movies', function(req, res) {
   res.send('["Roja","Bombay","Rangeela","Dilse","Sathiya"]')
})

router.get('/movies/:movieid', function(req,res){

    let movi=["Roja","Bombay","Rangeela","Dilse","Sathiya"]
    let num = req.params.movieid
    if(num>movi.length-1){
        res.send("invalid input")
    }else{
        res.send(movi[num])
    }
})

router.get('/films/:filmid', function(req,res){
    let movies=[ {id: 1, name: 'The Volverine'}, {id: 2, name: 'Terminator'}, {id: 3,name: 'Matrix'}, {id: 4, name: 'Ironman'}]
     let num = req.params.filmid
     let cnt = false;

     for(let i =0 ; i<movies.length ; i++){

        if(movies[i].id == num){
            cnt = true;
            res.send(movies[i])
            break;
        }
     } 
     if(cnt = false){
         res.send("invalid input");
     }
})


module.exports = router;
