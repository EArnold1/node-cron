const express = require('express');
const router = express.Router();

//route GET /todos
//@desc get todos
router.get('/', (req, res) => {
    res.json({ msg: 'working' });
});


//route GET /todos
//@desc return param
router.get('/:id', (req, res) => {
    res.json({ val: req.params.id })
});

//route POST /todos
//@desc add todo
router.post('/', (req, res) => {
    const { title } = req.body;

    res.json({ title })

});

module.exports = router;