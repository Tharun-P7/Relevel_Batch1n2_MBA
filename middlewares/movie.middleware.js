const Movie = require("../models/movie.model");
const mongoose = require("mongoose");

const isValidMovieId = async (req,res, next) =>{
    try {

        // check whether TheatreId it is valid or not
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(400).send({
                message: "Movie Id is not valid"
            })
        }
 
        const movie = await Movie.findOne({
            _id: req.params.id
        });
    
        // check whether theatre exists or not
        if (movie == null) {
            return res.status(400).send({
                message: "Movie doesn't exist"
            })
        }
        
        next();
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            message: "Some internal error"
        })
    }
};

const verifyAddMovie = async (req,res, next) =>{
    try {
        if(!req.body.name || req.body.name == ""){
            return res.status(400).send({
                message: "Movie name is required"
            })
        }
        else if(!req.body.description || req.body.description == ""){
            return res.status(400).send({
                message: "Movie description is required"
            })
        }
        else if(!req.body.cast || req.body.city == []){
            return res.status(400).send({
                message: "Movie cast is required"
            })
        }
        else if(!req.body.director || req.body.director == ""){
            return res.status(400).send({
                message: "Movie Director field is required"
            })
        }
        else if(!req.body.trailerUrls || req.body.trailerUrls == []){
            return res.status(400).send({
                message: "Movie trailerUrls is required"
            })
        }
        else if(!req.body.posterUrls || req.body.posterUrls == []){
                return res.status(400).send({
                    message: "Movie posterUrls is required"
                })
        }
        else if(!req.body.releaseStatus || req.body.releaseStatus == []){
            return res.status(400).send({
                message: "Movie posterUrls is required"
            })
    }
    next();
    } catch (err) {
        console.log(err.message);
        return res.status(500).send({
            message: "Some internal error"
        })
    }
};

const verifyMovie = {
    isValidMovieId : isValidMovieId,
    verifyAddMovie : verifyAddMovie
};
module.exports= verifyMovie;
