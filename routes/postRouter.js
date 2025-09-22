// importo express
const express = require('express');

// istanza della classe router di express
const router = express.Router();

// importo controller
const postController = require('../controllers/postController.js');

// rotte

// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// create
router.post('/', postController.store);

// update
router.put('/:id', postController.update);

// modify
router.patch('/:id', postController.modify);

// delete
router.delete('/:id', postController.destroy);


// esporto router
module.exports = router;