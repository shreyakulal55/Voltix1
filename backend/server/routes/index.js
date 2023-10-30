const express = require('express');
const router = express.Router();
const { getProjects,getProjectById, createProject, updateProject, deleteProject } = require('../controllers/projectcontrollers');
const { getTestimonials, getTestimonialById, createTestimonial, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialcontrollers');
const { getServices, getServiceById, createService, updateService, deleteService } = require('../controllers/servicesControllers');
const { getBanners, getBannerById, createBanner, updateBanner, deleteBanner } = require('../controllers/bannercontrollers');
const {getSocialfeeds, getSocialfeedById, createSocialfeed, updateSocialfeed, deleteSocialfeed} = require('../controllers/socialfeedscontrollers');
const { getUsers, getUserById, register, updateUser, deleteUser } = require('../controllers/userControllers');
const { getContacts, addContact } = require('../controllers/contactControllers');
const uploadController = require('../controllers/uploadControllers');
const authController = require('../controllers/authControllers');
const authMiddleware = require('../middlewares/authMiddlewares');

router.get('/projects', getProjects);
router.get('/projects/:id', getProjectById);
router.post('/projects',authMiddleware.verifyToken, createProject);
router.put('/projects/:id',authMiddleware.verifyToken, updateProject);
router.delete('/projects/:id',authMiddleware.verifyToken, deleteProject)

router.get('/testimonials', getTestimonials);
router.get('/testimonials/:id', getTestimonialById);
router.post('/testimonials',authMiddleware.verifyToken, createTestimonial);
router.put('/testimonials/:id',authMiddleware.verifyToken, updateTestimonial);
router.delete('/testimonials/:id',authMiddleware.verifyToken, deleteTestimonial);

router.get('/services', getServices);
router.get('/services/:id', getServiceById);
router.post('/services',authMiddleware.verifyToken, createService);
router.put('/services/:id',authMiddleware.verifyToken, updateService);
router.delete('/services/:id',authMiddleware.verifyToken, deleteService);

router.get('/banners', getBanners);
router.get('/banners/:id',getBannerById);
router.post('/banners',authMiddleware.verifyToken, createBanner);
router.put('/banners/:id',authMiddleware.verifyToken, updateBanner);
router.delete('/banners/:id',authMiddleware.verifyToken, deleteBanner);

router.get('/socialfeeds', getSocialfeeds);
router.get('/socialfeeds/:id', getSocialfeedById);
router.post('/socialfeeds',authMiddleware.verifyToken, createSocialfeed);
router.put('/socialfeeds/:id',authMiddleware.verifyToken, updateSocialfeed);
router.delete('/socialfeeds/:id',authMiddleware.verifyToken, deleteSocialfeed);

router.get('/users',authMiddleware.verifyToken, getUsers);
router.get('/users/:id',authMiddleware.verifyToken, getUserById);
router.post('/register', register);
router.put('/users/:id',authMiddleware.verifyToken, updateUser);
router.delete('/users/:id',authMiddleware.verifyToken, deleteUser);

router.post('/login', authController.login);
router.post('/refresh', authController.refreshAccessToken)
router.post('/logout', authController.logout);

router.get('/contacts', getContacts);
router.post('/contacts', addContact);

router.post('/upload', uploadController);
// add similar routes for other entities

module.exports = router;