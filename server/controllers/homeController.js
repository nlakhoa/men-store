const { trusted } = require("mongoose");

const Nguoimua = require("../models/Nguoimua");
const Nguoiban = require("../models/Nguoiban");
const Dangkysuachua = require("../models/Dangkysuachua");
const Thietbi = require("../models/Thietbi");
const Hoadon = require("../models/Hoadon");
const { MongooseObject, mutiMongooseObject } = require("../util/Mongoose");

class HomeController {
 

  // new
  async createNewUser(req, res, next) {
    console.log("req.body", req.body);
    req.body = new Nguoimua(req.body);
    req.body
      .save()
      .then(() =>
        res.json({
          success: true,
        })
      )
      .catch(next);
  }

  async createNewAdmin(req, res, next) {
    req.body = new Nguoiban(req.body);
    req.body
      .save()
      .then(() =>
        res.json({
          success: true,
        })
      )
      .catch(next);
  }

  async createNewDevice(req, res, next) {
    req.body = new Thietbi(req.body);
    req.body
      .save()
      .then(() =>
        res.json({
          success: true,
        })
      )
      .catch(next);
  }

  async createNewHoadon(req, res, next) {
    req.body = new Hoadon(req.body);
    req.body
      .save()
      .then(() =>
        res.json({
          success: true,
        })
      )
      .catch(next);
  }

  async createNewDangkysuachua(req, res, next) {
    req.body = new Dangkysuachua(req.body);
    req.body
      .save()
      .then(() =>
        res.json({
          success: true,
        })
      )
      .catch(next);
  }
  //   GET

  async getAll(req, res, next) {
    console.log("co chay cai nay");
    Promise.all([
      Nguoimua.find({}),
      Nguoiban.find({}),
      Thietbi.find({}),
      Hoadon.find({}),
      Dangkysuachua.find({}),
    ])
      .then(([nguoimua, nguoiban, thietbi, hoadon, dangkysuachua]) => {
        res.json({
          nguoimua: mutiMongooseObject(nguoimua),
          nguoiban: mutiMongooseObject(nguoiban),
          thietbi: mutiMongooseObject(thietbi),
          hoadon: mutiMongooseObject(hoadon),
          dangkysuachua: mutiMongooseObject(dangkysuachua),
        });
      })
      .catch(next);
  }

  //   Update
  updateNguoimua(req, res, next) {
    console.log("chay vao dayyy");
    Promise.all([Nguoimua.updateOne({ _id: req.params.id }, req.body)])
      .then(() => {
        return res.json({ success: true });
      })
      .catch(next);
  }

  deleteHoadon(req, res, next) {
    Promise.all([Hoadon.deleteOne({ _id: req.params.id })])
      .then(() => {
        res.json({
          success: true,
        });
      })
      .catch(next);
  }

  destroy(req, res, next) {
    Promise.all([Dangkysuachua.delete({ _id: req.params.id })])
      .then(() => {
        res.json({
          success: true,
        });
      })
      .catch(next);
  }
}
module.exports = new HomeController();
