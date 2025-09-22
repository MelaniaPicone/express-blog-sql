// importo express
const express = require('express');

// variabile app che contiene istanza express
const app = express();

// definizione porta
const port = 3000;

// importo postRouter
const postsRouter = require('./routes/postRouter');

// importo middleware notFound
const notFound = require('./middlewares/notFound.js');

// importo middleware errorsHandler
const errorsHandler = require('./middlewares/errorsHandler.js');

// File statici
app.use(express.static('public'));

// utilizzo il body parser json
app.use(express.json());

// definizione rotte dei posts
app.use('/posts', postsRouter);

// definizione rotta base
app.get('/', (req, res) =>
{
  res.send("Il mio blog");
});

// uso middleware notFound
app.use(notFound);

// uso middleware errorsHandler
app.use(errorsHandler);

// Il server rimane in ascolto
app.listen(port,() => console.log(`Server in ascolto sulla porta ${port}`));
