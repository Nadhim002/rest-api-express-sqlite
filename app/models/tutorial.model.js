import DB from "../config/db.js"

// constructor
export class Tutorial {
  constructor(tutorial) {
    this.title = tutorial.title
    this.description = tutorial.description
    this.published = tutorial.published
  }

  static retrieveAll(result) {
    const sqlQuery = "select * from tutorials "

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

    DB.get(sqlQuery,[id] , function (err, row ) {
        
      if (err) {
        result(err, null)
        return
      }

      result(null, row )
    }
)


  }

  UpdatePost(idToUpdate, updatedTutorial, result) {}

  static deletePost(idToDelete, result) {}

  static retrieveAllPublished(result) {}

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
