import { register } from "../Model/User"

export const getCount = async (req, res) => {
    try{
        const count = await register.countDocuments();

        return res.status(200).json({
            message : 'Live Counting Regitation' , 
            totalCount:count,
            success : ''})
    }   
}