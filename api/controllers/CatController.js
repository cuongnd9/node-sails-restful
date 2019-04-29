/**
 * CatController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getCats: async (req, res) => {
    Cat.find().exec((err, cats) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server error'
        });
      }
      return res.json(200, { result: cats });
    });
  },
  createCat: async (req, res) => {
    const { name, color } = req.body;
    Cat.create({ name, color }).exec(err => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server error'
        });
      }
      return res.ok({
        success: true,
        message: 'Cat was created'
      });
    });
  },
  getCat: async (req, res) => {
    const { id } = req.params;
    Cat.findOne({ id }).exec((err, cat) => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server error'
        });
      }
      return res.json(200, { result: cat });
    });
  },
  updateCat: async (req, res) => {
    const { id } = req.params;
    const { name, color } = req.body;
    Cat.updateOne({ id }, { name, color }).exec(err => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server error'
        });
      }
      return res.ok({
        success: true,
        message: 'Cat was updated'
      });
    });
  },
  deleteCat: async (req, res) => {
    const { id } = req.params;
    Cat.destroy({ id }).exec(err => {
      if (err) {
        return res.serverError({
          success: false,
          message: 'Server error'
        });
      }
      return res.ok({
        success: true,
        message: 'Cat was deleted'
      });
    });
  }
};
