const posts= require('../data/arraypost')


const getposts = (req, res) =>{
    res.json(posts)

};

const createpost = (req, res) =>{
    res.send("Creare un nuovo post")
};

const updatepost = (req,res) =>{
    const id= parseInt(req.param.id);
    res.send("Aggiornamento del post " + id)
};

const deletepost = (req,res) =>{
    const id= parseInt(req.param.id);
    res.send("Cancellazione del post " + id)
};
const getpostsById = (req, res) => {
    const id = parseInt(req.params.id);
    const foundPost = posts.find(p => p.id === id);

    if (foundPost) {
        res.json(foundPost);
    } else {
        res.status(404).json({ error: "Post non trovato" });
    }
};


module.exports= {
    getposts,
    getpostsById,
    updatepost,
    deletepost,
    createpost,
};