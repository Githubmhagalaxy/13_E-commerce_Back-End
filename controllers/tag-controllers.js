const { Tag, Product, ProductTag } = require('../models');

module.exports = {
    getAllTags: async (req, res) => {
        // find all tags
        // be sure to include its associated Product data
        try {
            const tags = await Tag.findAll({
                include: [Product]
            });
            res.json(tags);
        } catch (e) {
            res.json({
                status: `Error with message ${e.message}`
            });
            return Promise.reject(e.message);
        }
    },
    getTagById: async (req, res) => {
        // find a single tag by its `id`
        // be sure to include its associated Product data
        try {
            const tag = await Tag.findByPk(req.params.id, {
                include: [Product]
            });
            res.json(tag);
        } catch (e) {
            res.json({
                status: `Error with message ${e.message}`
            });
            return Promise.reject(e.message);
        }
    },
    postNewTag: async (req, res) => {
        // create a new tag
        try {
            const tag = await Tag.create({
                tag_name: req.body.tag_name
            })
            res.json(tag);
        } catch (e) {
            res.json({
                status: `Error with message ${e.message}`
            });
            return Promise.reject(e.message);
        }
    },
    putUpdateTagNameById: async (req, res) => {
        // update a tag's name by its `id` value
        try {
            await Tag.update({
                tag_name: req.body.tag_name
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.json({
                status: "Success"
            })
        } catch (e) {
            res.json({
                status: `Error with message ${e.message}`
            });
            return Promise.reject(e.message);
        }
    },
    deleteTagById: async (req, res) => {
        // delete on tag by its `id` value
        try {
            await Tag.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.json({
                status: "Success"
            })
        } catch (e) {
            res.json({
                status: `Error with message ${e.message}`
            });
            return Promise.reject(e.message);
        }
    },
}
