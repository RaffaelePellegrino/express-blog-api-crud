const express= require('express');
const router= express.Router();
const postcontrollers = require('../controllers/postscontroller');

// const getposts = (req, res) =>{
//     res.send("Lista post")

// };

// const getpostsById= (req, res) =>{
//     const id= req.param.id;
//     res.send("Post " + id)
// };

// const createpost = (req, res) =>{
//     res.send("Creare un nuovo post")
// };

// const updatepost = (req,res) =>{
//     const id= req.param.id;
//     res.send("Aggiornamento del post " + id)
// };

// const deletepost = (req,res) =>{
//     const id= req.param.id;
//     res.send("Cancellazione del post " + id)
// };
router.get('/',postcontrollers.getposts);
router.get('/:id',postcontrollers.getpostsById);
router.post('/', postcontrollers.createpost);
router.put('/:id', postcontrollers.updatepost);
router.delete('/:id', postcontrollers.deletepost);

module.exports = router;