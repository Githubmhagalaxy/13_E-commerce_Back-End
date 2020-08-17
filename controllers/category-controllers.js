const { Category, Product } = require('../models');

module.exports = {
	getAllCategories: async (req, res) => {
		// find all categories
		// be sure to include its associated Products
		try {
			const cats = await Category.findAll({
				include: [Product]
			});
			res.json(cats);
		} catch (e) {
			res.send(e.message);
			return Promise.reject(e.message);
		}
	},
	getCategoryById: async (req, res) => {
		// find one category by its `id` value
		// be sure to include its associated Products
		try {
			const cats = await Category.findByPk(req.params.id ,{
				include: [Product]
			});
			res.json(cats);
		} catch (e) {
			res.send(e.message);
			return Promise.reject(e.message);
		}
	},
	postNewCategory: async (req, res) => {
		// create a new category
		try {
			const cat = await Category.create({
				category_name: req.body.category_name
			});
			res.json(cat);
		} catch (e) {
			res.send(e.message);
			return Promise.reject(e.message);
		}
	},
	putUpdateCategoryById: async (req, res) => {
		// update a category by its `id` value
		try {
			await Category.update({
				category_name: req.body.category_name
			}, {
				where: {
					id: req.params.id
				}
			});
			res.json({
				status: "Success"
			});
		} catch (e) {
			res.send(e.message);
			return Promise.reject(e.message);
		}
	},
	deleteCategoryById: async (req, res) => {
		// delete a category by its `id` value
		try {
			await Category.destroy({
				where: {
					id: req.params.id
				}
			})
			res.json({
				status: "Success"
			});
		} catch (e) {
			res.send(e.message);
			return Promise.reject(e.message);
		}
	},
}