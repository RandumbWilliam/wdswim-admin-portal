import dotenv from "dotenv";
import Discounts from "../../models/classSettings/discounts.js";

dotenv.config();

export const addDiscounts = async (req, res) => {

    const { description, percentage } = req.body;

    try {

        let newDiscounts = new Discounts(
            description,
            percentage
        );

        await newDiscounts.save();
        
        const [result] = await Discounts.findOne({description: description});
        const discount = result[0];
        
        res.status(201).json(discount);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const getDiscounts = async (req, res) => {
    try {
        const [data, _] = await Discounts.fetchAll();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
