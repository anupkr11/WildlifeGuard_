import wildlifedata from "../models/wildlifeData.js";

export const getWildlifeData = async (req, res) => {
    try {
        const data = await wildlifedata.find({});
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch wildlife data", error: error.message });
    }
};
