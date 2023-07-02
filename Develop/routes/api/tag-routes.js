const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
try {
  const tagsData = await Tag.findAll({
    include: {model: Product, through: ProductTag},
  });
  res.json(tagsData);
}
  catch (err) {
    console.log(err);
    res.status(500).json(err);
   } 
 });

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findByPk(req.params.id,
      {
        include: Product, ProductTag
      });
    res.json(tagsData);
  }
  catch (err) {
    console.log(err);
    res.status(404).json({message:'Tag not found'});
   }  
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body);
    res.json(tag);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({message:'Something went wrong creating tag'});
   }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
try {
  const updateTag = await Tag.update(
    {tag_name: req.body.tag_name},
    {where: { id: req.params.id}}
  )
res.json(updateTag);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
   }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({
      where: { id: req.params.id}
    }
  )  
    res.json(deleteTag);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
   }  
    });

module.exports = router;