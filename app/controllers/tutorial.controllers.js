import { Tutorial } from "../models/tutorial.model.js"

export function findAll(req, res , next ) {

  const contentToSearch = req.query?.title 

  if( !contentToSearch ){
    res.status(404).json({ msg: `The Parameter Cannot be empty` })
    return
  }

  Tutorial.findAll( contentToSearch , 

    (err, data) => {
      if (err) {
        next(err)
        return
      }

      res.status(200).json(data)

  })
}

export function createPost(req, res) {

  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ msg: `The Input Cannot be empty` })
    return
  }

  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: Number(req.body.published),
  })

  tutorial.createPost((err, data) => {
    if (err) {
      next(err)
      return
    }

    console.log(data)
    res
      .status(200)
      .json({ msg: `The tutorial has been added at ${data} index` })
  })
}

export function findPost(req, res) {

  const id = parseInt(req.params?.id)

  if (isNaN(id)) {
    res.status(400).json({ msg: "id must be a Number" })
    return
  }

  Tutorial.findPost(id, (err, row) => {
    if (err) {
      next(err)
      return
    }

    if (row) {
      res.status(200).json(row)
      return
    }

    res.status(400).json({ msg: "No match Found" })
    
  })
}

export function UpdatePost(req, res) {

  const id = parseInt(req.params?.id)

  if (isNaN(id)) {
    res.status(400).json({ msg: "id must be a Number" })
    return
  }

  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ msg: `The Input Cannot be empty` })
    return
  }

  const tutorial = new Tutorial(req.body)

  tutorial.UpdatePost(id, (err, chnages ) => {

    if (err) {
      next(err)
      return
    }

    if (chnages) {
      res.status(200).json({ msg: "The Data has been updated Sucessfully" })
      return
    }

    res.status(400).json({ msg: "No match Found to Update" })

  })

  }

export function deletePost(req, res) {

  const id = parseInt(req.params?.id)

  if (isNaN(id)) {
    res.status(400).json({ msg: "id must be a Number" })
    return
  }

  Tutorial.deletePost(id, (err, message) => {
    if (err) {
      next(err)
      return
    }

    if (message) {
      res.status(200).json({ msg: `The Data with ${id} has been deleted` })
      return
    }

    res.status(400).json({ msg: "No match Found to delete" })
  })
  
}

export function deleteAll(req, res) {

  Tutorial.deleteAll(function (err, message ) {
    if (err) {
      next(err)
      return
    }

    res.status(200).json({msg : message})
  })

}

export function retrieveAllPublished(req, res) {
  Tutorial.retrieveAllPublished((err, data) => {
    if (err) {
      next(err)
      return
    }

    res.status(400).json(data)
  })
}
