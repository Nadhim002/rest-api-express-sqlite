import { red } from "colors/index.js"
import DB from "../config/db.js"

// constructor
export class Tutorial {

  constructor(tutorial) {
    this.title = tutorial.title || "Empty Title" , 
    this.description = tutorial.description || "Empty Description" ,
    this.published = tutorial.published || 0
  }

  static retrieveAll(result) {
    const sqlQuery = "select * from tutorials"

    DB.all(sqlQuery, function (err, rows) {
      if (err) {
        result(err, null)
        return
      }

      result(null, rows)
    })
  }

  createPost(result) {
    const sqlQuery =
      "insert into tutorials (  title , description , published ) values( ? , ? , ? )"
    DB.run(
      sqlQuery,
      [this.title, this.description, this.published],
      function (err) {
        if (err) {
          result(err, null)
          return
        }

        result(null, this.lastID)
      }
    )
  }

  static findPost(id, result) {
    const sqlQuery = "select * from tutorials where id = ?"

    DB.get(sqlQuery, [id], function (err, row) {
      if (err) {
        result(err, null)
        return
      }

      if (row) {
        result(null, row)
        return
      }

      result(null, null)
    })
  }

  UpdatePost( idToUpdate, updatedTutorial, result ) {

    const sqlQuery = `update table tutorials set title = ? , description = ?  , published = ?  where id = ?`

    DB.run(sqlQuery , [  this.title , this.description , this.published , idToUpdate] , function (err) {

        if (err) {
          result(err, null)
          return
        }
  
        if (this.changes) {
          result(null, this.changes)
          return
        }
  
        result(null, null)
        
      } )

  }

  partiallyUpdatePost(idToUpdate, updatedTutorial, result) {

    let columns = []
    let values = []
    
    Object.keys(updatedTutorial).forEach((key) => {
      if (!updatedTutorial[key]) {
        columns.push(`${key} = ? `)
        values.push(updatedTutorial[key])
      }
    })

    if (columns.length < 0) {
      result(null, null)
      return
    }

    columns = columns.join(",")
    values.push(idToUpdate)

    const sqlQuery = `update table tutorials set ${columns} where id = ?`

    DB.run(sqlQuery , values , )


  }

  static deletePost(idToDelete, result) {
    const sqlQuery = " delete from tutorials where id = ? "

    DB.run(sqlQuery, [idToDelete], function (err) {
      if (err) {
        result(err, null)
        return
      }

      if (this.changes) {
        result(null, this.changes)
        return
      }

      result(null, null)
    })
  }

  static retrieveAllPublished(result) {
    const sqlQuery = "select * from tutorials where published = 1"

    DB.all(sqlQuery, function (err, rows) {
      if (err) {
        result(err, null)
        return
      }

      result(null, rows)
    })
  }

  static deleteAll(result) {
    const sqlQuery = " drop table tutorials "

    DB.run(sqlQuery, function (err) {
      if (err) {
        result(err, null)
        return
      }

      result(null, "Table Deleted Sucessfully")
    })
  }
}
