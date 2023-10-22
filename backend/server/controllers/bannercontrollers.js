const Banner= require('../models/banner');
const db = require('../db');

const getBanners = async (req, res) => {
    try {
      const banners = await Banner.find({});
      res.status(200).json(banners);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

const getBannerById = async (req, res) => {
    const { id } = req.params;
    try {
      const banner = await Banner.findById(id);
      if (!banner) {
        return res.status(404).json({ error: 'banner not found' });
      }
      res.status(200).json(banner);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

const createBanner = (req, res) => {
  const bannerData = {
    ...req.body,
    created_by: req.userId, 
  };
    const banner = new Banner(bannerData);
    banner.save()
      .then((savedbanner) => {
        res.status(201).json({statusCode:"200",message :'banner created successfully',savedbanner});
      })
      .catch((err) => {
        res.status(500).json({statusCode:"500", error: err.message });
      });
  };

const updateBanner = async (req, res) => {
    const { id } = req.params;
    try{
        const updatedBanner= await Banner.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({statusCode:"200",message:'updated successfuly...',updatedBanner,userId: req.userId});
    }catch(err){
        return res.status(500).json({statusCode:"500", error: err.message });
    }
};

const deleteBanner = async (req, res) => {
    const { id } = req.params;
    try {
      const banner = await Banner.findByIdAndRemove(id);
      if (!banner) {
        return res.status(404).json({statusCode:"404", error: 'banner not found' });
      }
      return res.status(200).json({statusCode:"200",message:'deleted successfuly...',userId: req.userId}); // Successful deletion, no content to return
    } catch (err) {
      return res.status(500).json({statusCode:"404", error: err.message });
    }
  };

  module.exports = {
    getBanners,
    getBannerById,
    createBanner,
    updateBanner,
    deleteBanner
  };
