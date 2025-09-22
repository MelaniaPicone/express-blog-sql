// connessione al db
const connection = require('../data/db.js');

// index
const index = (req, res) => {

  const sql = "SELECT * FROM posts";
  connection.query(sql, (err, results) => {
 if (err) 
  return res.status (500).json({error: 'errore'});
  res.json(results)
  });

};

// show
const show = (req, res) => {
const {id} = req.params;

const postSql = "SELECT * FROM posts WHERE id = ?";

connection.query(postSql, [id], (err, resultPost) => 
{

  if(err) return res.status(500).json ({error: "error"});
 if(resultPost.length === 0) return res.status(404).json ({error: "post non trovato"});

 const tagsSql ="SELECT * FROM tags JOIN post_tag ON post_tag.tag_id = tags.id WHERE post_tag.post_id = ?";

 connection.query(tagsSql, [id], (err, resultsTags) => {
   if(err) return res.status(500).json ({error: "error"});

   const postWhithTags = {
    ...resultPost[0],
    tags: resultsTags
   };

  
res.json(postWhithTags);


 });

});

};

// store
const store = (req, res) => {
// definizione id del nuovo oggetto
const newId = post[posts.length - 1].id +1;

// recupero dati del body della richiesta
const {title, content, image, tags} = req.body;

// nuovo oggetto
const newPost = {
id: newId,
title,
content,
image,
tags
};

// pusho nuovo oggetto
posts.push(newPost);

  res.status(201).json(newPost);

};

// update
const update = (req, res) => {
const id = parseInt(req.params.id);

// recupero dati passati dal body
const {
  title,
  content,
  image,
  tags
} = req.body

// recupero post con id passato come parametro
const post = post.find(item => item.id === id);

post.title = title;
post.content = content;
post.image = image;
post.tags = tags;

res.send(post);

};

// modify
const modify = (req, res) => {
const id = parseInt(req.params.id);

res.send(`Modifica parziale dei post con id ${id}`);

};

// destroy
const destroy = (req, res) => {

  const { id } = req.params;
const sql = "SELECT * FROM posts WHERE id = ?";
connection.query(sql, [id], (err, results) => {

  if(err) return res.status(500).json ({error: "errore"});

res.sendStatus(204);

});
};

// esporto

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
};