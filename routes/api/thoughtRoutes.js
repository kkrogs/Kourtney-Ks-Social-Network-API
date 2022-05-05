const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    postNewThought,
    updateThought,
    deleteThought,
    createNewReaction,
    removeReaction
} = require('../../controllers/thoughtController');


// the current route is /api/thoughts

router.route('/').get(getAllThoughts).post(postNewThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createNewReaction).delete(removeReaction)



module.exports = router;