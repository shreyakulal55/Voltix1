const Testimonial= require('../models/testimonial');

const getTestimonials = async (req, res) => {
    try {
      const testimonials = await Testimonial.find({});
      res.status(200).json(testimonials);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

const getTestimonialById = async (req, res) => {
    const { id } = req.params;
    try {
      const testimonial = await Testimonial.findById(id);
      if (!testimonial) {
        return res.status(404).json({ error: 'Testimonial not found' });
      }
      res.status(200).json(testimonial);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    };

const createTestimonial = (req, res) => {
    const testimonial = new Testimonial(req.body);
    testimonial.save()
      .then((savedTestimonial) => {
        res.status(201).json({statusCode:"200",message:"testimonial saved successfully",savedTestimonial});
      })
      .catch((err) => {
        // res.status(500).json({ error: err.message });
        res.status(500).json({statusCode:"500", error: err.message });
      });
  };

const updateTestimonial = async (req, res) => {
    const { id } = req.params;
    try{
        const updatedTestimonial= await Testimonial.findByIdAndUpdate(id, req.body, {new:true});
        return res.status(200).json({statusCode:"200",message:"testimonial updated successfully",updatedTestimonial});
}catch(err){
    // return res.status(500).json({error:err.message});
    return res.status(500).json({statusCode:"500", error: err.message });
}
};

const deleteTestimonial = async (req, res) => {
    const { id } = req.params;
    try{
        const testimonial= await Testimonial.findByIdAndRemove(id);
        if(!testimonial){
            return res.status(404).json({statusCode:"404",error:'Testimonial not found'});
        }
        // return res.status(204).send();
        return res.status(200).json({statusCode:"200",message:"testimonial deleted successfully"});
    }catch(err){
        return res.status(500).json({statusCode:"500",error:err.message});
    }
};

module.exports = {
    getTestimonials,
    getTestimonialById,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial
};

