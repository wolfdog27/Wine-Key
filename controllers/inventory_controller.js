const router = require("express").Router();
const db = require("../models");

invArr = [];
router.get('/', (req, res) => {
    db.Inventory.findAll({})
    .then(inventoryData => {
        invArr.push(inventoryData);
        res.json(inventoryData)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})
module.exports.invArr = this.invArr
// router.get("/withdata",(req, res) => {
//     db.Inventory.findAll({
//         //find all inventories that include restaurant and wine
//         include:[db.Restaurant, db.Wine],
//     }).then(inventoryData => {
//         res.json(inventoryData)
//     }).catch(err => {
//         console.log(err);
//         res.status(500).end()
//     })
// })
// router.get("/withrestaurants",(req, res) => {
//     db.Inventory.findAll({
//         include:[db.Restaurant]
//     }).then(inventoryData => {
//         res.json(inventoryData)
//     }).catch(err => {
//         console.log(err);
//         res.status(500).end()
//     })
// })

// router.post('/', (req, res) => {
//     db.Inventory.create({
//         quantity: req.body.quantity,
//         restaurantId: req.body.restaurantId,
//         wineId: req.body.wineId
//     }).then(inventoryData => {
//         res.json(inventoryData)
//     }).catch(err => {
//         console.log(err);
//         res.status(500).end()
//     })
// })

router.get('/:id', (req, res) => {
    db.Inventory.findOne({
        where: {
            id: req.params.id
        }
    }).then(inventoryData => {
        res.json(inventoryData)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})
// router.get('/withdata/:wineId', (req, res) => {
//     db.Inventory.findAll({
//         where: {
//             wineId: req.params.wineId
//         },
//         include:[db.Restaurant, db.Wine]
//     }).then(inventoryData => {
//         res.json(inventoryData)
//     }).catch(err => {
//         console.log(err);
//         res.status(500).end()
//     })
// })

router.delete('/:id', (req, res) => {
    db.Inventory.destroy({
        where: {
            id: req.params.id
        }
    }).then(inventoryData => {
        res.json(inventoryData)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
})
router.put('/:id', (req, res) => {
    db.Inventory.update({
        quantity: req.body.quantity
    }, {
        where: {
            id: req.params.id
        }
    }).then(inventoryData => {
        res.json(inventoryData)
    }).catch(err => {
        console.log(err);
        res.status(500).end()
    })
});



module.exports = router;