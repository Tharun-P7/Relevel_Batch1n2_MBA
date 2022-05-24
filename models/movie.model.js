/**
 * This file will represent the Movie Entity
 * 
 * name | description | casts | trailer URL | posterURL
 * 
 * language | release Date |releaseStatus
 */

const movieSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    cast : {  
        type : [String],
        required : true
    },
    director : {
        type : String,
        required : true
    },
    trailerUrls : {
        type : [String],
        required : true
    },
    posterUrls : {
        type : [String],
        required : true
    },
    language : {
        type : String,
        required : true,
        default : "HINDI"  //TODO put this in Utis folder and have support for enums
    },
    releaseDate : {
        type : Date
    },
    releaseStatus : {
        type : String,
        required : true,
        default : "RELEASED" // This has to be defined in Utils, and enum has to be used
    },
    createdAt : {
        type : Date,
        default : () => {
            return Date.now();
        },
        immutable : true
    },
    updatedAt : {
        type : Date,
        default : () => {
            return Date.now();
        }
    },
    imdbRating : {  //Aggregate rating of the movie
        type : Number
        
    }

})