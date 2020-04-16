/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
const express = require('express');
const { Review } = require('../services/database');

const router = express.Router();

/**
 * get all movie
 */
// router.get('/', async (_, res) => {
//   const pets = await Review.findAll();

//   const petsData = pets.map(pet => {
//     if (pet.dataValues) {
//       return pet.dataValues;
//     }
//   });

//   return res.status(200).json(petsData);
// });

/**
 * Get reviews for a specific movie
 */
router.get('/:movieid', async (req, res) => {
  try {
    const {
      params: { movieid },
    } = req;

    if (!movieid) {
      return res.status(200).json({ error: 'Missing movie ID parameter.' });
    }

    const reviews = await Review.findAll({
      where: {
        movieid,
      },
    });

    console.log(`Movie ${movieid} reviews:`, reviews);

    return res.status(200).json(reviews);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: `Server error: ${e}` });
  }
});

/**
 * Create a review for specific movie
 */
router.post('/:movieid', async (req, res) => {
  try {
    const {
      params: { movieid },
      body: { review },
    } = req;

    if (!movieid) {
      return res.status(400).json({ error: 'Missing movie ID parameter.' });
    }
    if (!review) {
      return res.status(400).json({ error: 'Missing movie review.' });
    }

    const newReview = await Review.create({ movieid, review });

    await newReview.save();
    await newReview.reload();

    return res.status(200).json(newReview);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: `Server error: ${e}` });
  }
});

/**
 * Update a movie review
 */
router.put('/:movieid/:reviewid', async (req, res) => {
  try {
    const {
      params: { movieid, reviewid },
      body: { review },
    } = req;

    if (!movieid) {
      return res.status(400).json({ error: 'Missing movie ID parameter.' });
    }
    if (!reviewid) {
      return res.status(400).json({ error: 'Missing review ID parameter.' });
    }
    if (!review) {
      return res.status(400).json({ error: 'Missing movie review.' });
    }

    const targetReview = await Review.findByPk(reviewid);

    if (!targetReview) {
      return res
        .status(404)
        .json({ error: `Review ${reviewid} for movie ${movieid} not found.` });
    }

    await targetReview.update({ review });
    await targetReview.save();
    await targetReview.reload();

    return res.status(200).json(targetReview);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: `Server error: ${e}` });
  }
});

/**
 * Delete a movie review
 */
router.delete('/:movieid/:reviewid', async (req, res) => {
  try {
    const {
      params: { movieid, reviewid },
    } = req;

    if (!movieid) {
      return res.status(400).json({ error: 'Missing movie ID parameter.' });
    }
    if (!reviewid) {
      return res.status(400).json({ error: 'Missing review ID parameter.' });
    }

    const targetReview = await Review.findByPk(reviewid);

    if (!targetReview) {
      return res
        .status(404)
        .json({ error: `Review ${reviewid} for movie ${movieid} not found.` });
    }

    await targetReview.destroy();
    const deleteResponse = await targetReview.save();

    console.log('deleteResponse', JSON.stringify(deleteResponse));
    console.log('deleteResponse', deleteResponse.id);

    const oldRecord = await Review.findByPk(deleteResponse.id);
    console.log('oldRecord', oldRecord);

    if (oldRecord == null) {
      return res.status(200).json({
        success: true,
        msg: `Deleted review ${reviewid} for movie ${movieid} `,
      });
    }

    return res.status(500).json({ error: `Failed to delete review.` });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: `Server error: ${e}` });
  }
});

module.exports = router;
