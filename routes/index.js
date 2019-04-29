const Sequelize = require("sequelize");

var express = require('express');
var router = express.Router();
var db = require('../postgresdb');


/* GET home page. */
router.get(['/', '/index'], async function (req, res, next) {
    let staffs = await db.Staff.findAll();
    res.render('index', {title: 'Staffs', staffs: staffs});
});


// // CREATE
// router.post(['/', '/index'], async function (req, res, next) {
//     await db.Staff.create({
//         name: req.body.name,
//         sirname: req.body.sirname,
//         email: req.body.email,
//         password: req.body.password,
//     })
//     res.redirect('/index')
// });
router.post(['/', '/index'], async function (req, res, next) {
    await db.Staff.create({
        name: req.body.name,
        sirname: req.body.sirname,
        email: req.body.email,
        password: req.body.password,
    })
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
// router.get('/edit/:id', async function (req, res, next) {
//     let editStaff = await db.Staff.findOne({
//         where: {
//             id: req.params.id
//         },
//         raw: true
//     });
//     console.log(editStaff);
//     let staffs = await db.Staff.findAll();
//     res.redirect('/');
// });

//
// router.post('/edit/:id',async function (req, res, next) {
//     let editStaff = await db.Staff.update({
//         name: req.body.name,
//         sirname: req.body.sirname,
//         email: req.body.email,
//         password: req.body.password
//     }, { where: {id: req.params.id}});
//     res.redirect('/');
// });
//


router.use('/edit/', async function (req, res) {
    var id = parseInt(req.body.id)
    await db.Staff.update({
            name: req.body.name,
            sirname: req.body.sirname,
            email: req.body.email,
            password: req.body.password
        },
        {
            where: {
                id: id
            }
        })
    res.redirect('/')
})

module.exports = router;
