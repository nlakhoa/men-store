var express = require('express')
var router = express.Router()
const homeController = require('../controllers/homeController')

router.put('/admin/:id/nguoimua', homeController.updateNguoimua)
router.post('/admin/create-new-user', homeController.createNewUser)
router.post('/admin/create-new-admin', homeController.createNewAdmin)
router.post('/admin/create-new-device', homeController.createNewDevice)
router.post('/admin/create-new-hoadon', homeController.createNewHoadon)
router.post('/admin/create-new-dangkysuachua', homeController.createNewDangkysuachua)
router.delete('/admin/:id/destroy', homeController.destroy)
router.get('/admin/get-all', homeController.getAll)


module.exports = router;