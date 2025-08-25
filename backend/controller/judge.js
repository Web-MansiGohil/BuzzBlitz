import { Judges } from "../Model/Judges.js";


// add new judge
export const judge_data = async (req, res) => {
    try {

        const { judges_id, photo_path, Name, Email, Contect_no, Manage_event, Designation, Schedule_day } = req.body

        const judge_id = Math.floor(Math.random() * 100000);

        let data = await Judges.findOne({ Email });
        if (data)
            return res.status(400).json({
                message: 'Judges is Exists...',
                success: 'false'
            });

        data = await Judges.create({
            judges_id: judge_id,
            photo_path,
            Name,
            Email,
            Contect_no,
            Manage_event,
            Designation,
            Schedule_day
        });

        return res.status(200).json({
            message: 'Juge information is added',
            judge_info: data,
            success: 'true'
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message,
            success: 'false'
        });
    }

}

// get all judges

export const getJudges = async (req, res) => {
    try {
        const getAllData = await Judges.find();
        if (!getAllData) {
            return res.status(400).json({
                message: 'Judge not found',
                success: false
            });
        }

        return res.status(200).json({
            message: 'Get judge data successfully',
            judge: getAllData,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message,
            success: false
        });
    }
}

// get judge data by id
export const getIdJudges = async (req, res) => {
    try {
        const id = req.params.id;

        const getDataById = await Judges.findById(id);

        if (!getDataById)
            return res.status(400).json({
                message: 'Judge cannot be found by id',
                success: false
            });

        return res.status(200).json({
            message: "Judges data is found by id",
            judge_data: getDataById,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message,
            success: false
        });
    }
}