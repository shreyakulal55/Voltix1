const Service = require('../models/Services');
const db = require('../db');
// const { Service } = require('aws-sdk');

const getServices = async (req, res) => {
    try {
        const services = await Service.find({});
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

const getServiceById = async (req, res) => {
    const { id } = req.params;
    try {
        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({ error: 'service not found' });
        }
        res.status(200).json(service);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

const createService = (req, res) => {
    const servicedata={
        ...req.body,
        created_by: req.userId,
    };
    const service = new Service(servicedata);
    service.save()
        .then((savedservice) => {
            res.status(201).json({ statusCode: "200", message: 'service created successfully', savedservice});
        })
        .catch((err) => {
            res.status(500).json({ statusCode: "500", error: err.message });
        });
    }

const updateService = async (req, res) => {
    const {id} = req.params;
    try{
        const updateService= await Service.findByIdAndUpdate(id,req.body,{new:true});
        return res.status(200).json({statusCode:"200",message:'updated successfuly...',updateService,userId:req.userId});
    }catch(err){
        return res.status(500).json({statusCode:"500",error:err.message});
    }
    }

const deleteService = async (req, res) => {
    const {id} = req.params;
    try{
        const deleteService = await Service.findByIdAndDelete(id);
        if (!Service) {
            return res.status(404).json({statusCode:"404", error: 'Service not found' });
          }
          return res.status(200).json({statusCode:"200",message:'deleted successfuly...',userId:req.userId}); // Successful deletion, no content to return
        } catch (err) {
          return res.status(500).json({statusCode:"404", error: err.message });
        }
      };

module.exports = {
    getServices,
    getServiceById,
    createService,
    updateService,
    deleteService,
};