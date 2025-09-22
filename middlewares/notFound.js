const notFound = (req, res, next) =>{
  res.status(404).json ({
    error: "404 - Indirizzo non trovato",
    message: "l'indirizzo non è stato trovato"
  })
};

module.exports = notFound;