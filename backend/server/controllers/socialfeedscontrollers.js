const Socialfeed = require('../models/socialfeed');
const db = require('../db');

const getSocialfeeds = async (req, res) => {
    try {
      const socialfeeds = await Socialfeed.find({});
      res.status(200).json(socialfeeds);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  const getSocialfeedById = async (req, res) => {
    const { id } = req.params;
    try {
      const socialfeed = await Socialfeed.findById(id);
      if (!socialfeed) {
        return res.status(404).json({ error: 'socialfeed not found' });
      }
      res.status(200).json(socialfeed);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    };

const createSocialfeed = (req, res) => {
    const socialfeed = new Socialfeed(req.body);
    socialfeed.save()
      .then((savedsocialfeed) => {
        res.status(201).json({statusCode:"200",message :'socialfeed created successfully',savedsocialfeed});
      })
      .catch((err) => {
        res.status(500).json({statusCode:"500", error: err.message });
      });
  };

  const updateSocialfeed = async (req, res) => {
    const { id } = req.params;
    try{
        const updatesocialfeeds=await Socialfeed.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({statusCode:"200",message:'updated successfuly...',updatesocialfeeds});
    }   
    catch(err){
        return res.status(500).json({statusCode:"500", error: err.message });
    }
};

const deleteSocialfeed = async (req, res) => {
    const { id } = req.params;
    try {
      const socialfeed = await Socialfeed.findByIdAndRemove(id);
      if (!socialfeed) {
        return res.status(404).json({statusCode:"404", error: 'socialfeed not found' });
      }
      return res.status(200).json({statusCode:"200",message:'deleted successfuly...'}); // Successful deletion, no content to return
    } catch (err) {
      return res.status(500).json({statusCode:"404", error: err.message });
    }
  };

  module.exports = {
    getSocialfeeds,
    getSocialfeedById,
    createSocialfeed,
    updateSocialfeed,
    deleteSocialfeed,
  };

        

