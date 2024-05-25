// backend/controllers/properties.controller.js
import Property from '../models/property.model.js';

// Crear una propiedad nueva
export const createProperty = async (req, res) => {
    try {
      const { title, price, location, bedrooms, bathrooms, squaremeters, description } = req.body;
      const imagePaths = req.files.map(file => {
        const url = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
        return url; // Obtén las rutas de las imágenes
      });  

      const newProperty = new Property({
        title,
        price,
        location,
        bedrooms,
        bathrooms,
        squaremeters,
        description,
        images: imagePaths,
      });
  
      const savedProperty = await newProperty.save();
      res.status(201).json(savedProperty);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Otros controladores...
  export const getProperties = async (req, res) => {
    try {
      const properties = await Property.find();
      res.status(200).json(properties);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  export const getProperty = async (req, res) => {
    try {
      const { id } = req.params;
      const property = await Property.findById(id);
      if (!property) return res.status(404).json({ message: 'Property not found' });
      res.status(200).json(property);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };