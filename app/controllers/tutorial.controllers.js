import { Tutorial } from "../models/tutorial.model.js"

export function retrieveAll(req, res) {
  Tutorial.retrieveAll((err, data) => {
    if (err) {
      console.log(err.message)
      res.json({})
      return
    }

    console.log(data)
    res.json(data)
  })
}

export function createPost(req, res) {
  console.log(req.body)

  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: Number(req.body.published),
  })

  tutorial.createPost((err, data) => {
    if (err) {
      console.log(err.message)
      res.json({})
      return
    }

    console.log(data)
    res.json({})
  })
}

export function findPost(req, res) {
  const id = parseInt(req.params?.id)

  if (id) {
    Tutorial.findPost(id, (err, row) => {
      if (err) {
        console.log(err)
        res.json({})
        return
      }

      if (row) {
        console.log(row)
        res.json({ row })
        return
      }

      res.json({ msg: "No match Found" })
    })
  }
}

export function UpdatePost(req, res) {
  const id = parseInt(req.params?.id)

  if (id) {
    Tutorial.deletePost(id, (err, message) => {
      if (err) {
        console.log(err)
        res.json({})
        return
      }

      if (message) {
        console.log(message)
        res.json({ msg: message })
        return
      }

      res.json({ msg: "No match Found to Update" })
    })
  }
}

export function deletePost(req, res) {
  const id = parseInt(req.params?.id)

  if (id) {
    Tutorial.deletePost(id, (err, message) => {
      if (err) {
        console.log(err)
        res.json({})
        return
      }

      if (message) {
        console.log(message)
        res.json({ msg: message })
        return
      }

      res.json({ msg: "No match Found to delete" })
    })
  }
}

export function deleteAll(req, res) {
  Tutorial.deleteAll(function (err, data) {
    if (err) {
      console.log(err.message)
      res.json({})
      return
    }

    console.log(data)
    res.json({})
  })
}

export function retrieveAllPublished(req, res) {
  Tutorial.retrieveAllPublished((err, data) => {
    if (err) {
      console.log(err.message)
      res.json({})
      return
    }

    console.log(data)
    res.json(data)
  })
}
