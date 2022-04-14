import dotenv from "dotenv";
import Location from "../models/locations.js";

dotenv.config();

export const addLocations = async (req, res) => {

    const { campusId, locationName, address, mapUrl, activeStatus } = req.body;

    try {

        let newLocation = new Location(
            campusId, 
            locationName, 
            address, 
            mapUrl, 
            activeStatus
        );
        
        const result = await newLocation.save();
        
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const getLocations = async (req, res) => {
    try {
        const [data, _] = await Location.fetchAll();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
