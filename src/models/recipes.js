const { ObjectId } = require('mongodb');

const connection = require('./connection');

const create = async (recipe) => {
  const { name, ingredients, preparation, userId } = recipe;
  const db = await connection();
  const newRecipe = await db
    .collection('recipes')
    .insertOne({ name, ingredients, preparation, userId });
  return newRecipe;
};

const getAll = async () => {
  const db = await connection();
  const allRecipes = db.collection('recipes').find({}).toArray();
  return allRecipes;
};

const getById = async (id) => {
  const db = await connection();
  const recipe = await db.collection('recipes').findOne(new ObjectId(id));
  return recipe;
};

const updateRecipe = async (recipe) => {
  const db = await connection();
  const { _id, name, ingredients, preparation } = recipe;
  const updatedRecipe = await db
    .collection('recipes')
    .updateOne({ _id: ObjectId(_id) }, { $set: { name, ingredients, preparation } });
  return updatedRecipe;
};

const exclude = async (id) => {
  const db = await connection();
  await db.collection('recipes').deleteOne({ _id: ObjectId(id) });
};

const addImage = async (id, path) => {
  const db = await connection();
  const updatedRecipe = await db
    .collection('recipes')
    .updateOne({ _id: ObjectId(id) }, { $set: { image: `localhost:3000/${path}` } });
  
  return updatedRecipe;
};

module.exports = {
  create,
  getAll,
  getById,
  updateRecipe,
  exclude,
  addImage,
};
