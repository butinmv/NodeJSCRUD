const Sequelize = require("sequelize");

var express = require('express');
var router = express.Router();
var db = require('../postgresdb');


/* GET home page. */
router.get(['/', '/index'], async function (req, res, next) {
    let staffs = await db.Staff.findAll();
    res.render('index', {title: 'Staffs', staffs: staffs});
});

// CREATE
router.post(['/', '/index'], async function (req, res, next) {
    await db.Staff.create({
        name: req.body.name,
        sirname: req.body.sirname,
        email: req.body.email,
        password: req.body.password,
    });
    let staffs = await db.Staff.findAll();
    res.render('tableajax', {staffs: staffs})
});


// DELETE
router.get('/delete/:id', function (req, res, next) {
    db.Staff.destroy(
        {
            where: {
                id: req.params.id
            }
        }).then(res.redirect('/'));
});

// EDIT
router.post('/edit', async function (req, res, next) {
    let editStaff = await db.Staff.update({
        name: req.body.name,
        sirname: req.body.sirname,
        email: req.body.email,
        password: req.body.password
    }, {where: {id: req.body.id}});
    let staffs = await db.Staff.findAll();
    res.render('tableajax', {staffs: staffs})
});

module.exports = router;
