import {Tutorial} from "../models/tutorial.model.js" 

export  function retrieveAll( req , res ){ 

    Tutorial.retrieveAll( (err , data) => {

        if (err){
            console.log( err.message )
            res.json({})
            return
          }
   
          console.log( data )
          res.json( data )

    } 
)}

export  function createPost( req , res ){

    console.log( req.body )

    const tutorial = new Tutorial( { title : req.body.title , description : req.body.description  , published : Number(req.body.published) } )

    tutorial.createPost( ( err , data ) => {

       if (err){
         console.log( err.message )
         res.json({})
         return
       }

       console.log( data )
       res.json({})
       

    } )


 }

export  function findPost( req , res ){ 

    // const id = req.

}

export  function UpdatePost( req , res ){ }

export  function deletePost( req , res ){ }

export  function deleteAll( req , res ){

    Tutorial.deleteAll( function(err ,data ){ 

        if (err){
            console.log( err.message )
            res.json({})
            return
        }

        console.log( data )
        res.json({})

    } )

 }

export function retrieveAllPublished( req , res ){ }
