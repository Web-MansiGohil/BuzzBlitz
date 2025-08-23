import { judges } from "../Model/Judges.js";

// add new judge
export const judge_data = async (req, res) => {
    try {

        const { judges_id, photo_path, Name, Email, Contect_no, Manage_event, Designation, Schedule_day } = req.body

        const judge_id = Math.floor(Math.random() * 100000);

        let data = await judges.findOne({ Email });
        if (data)
            return res.status(400).json({
                message: 'Judges is Exists...',
                success: 'false'
            });

        data = await judges.create({
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
        const getData = await judges.find();

        if (!judge_data)
            return res.status(400).json({
                message: 'Judge is not in lost',
                success: false
            });

        return res.status(200).json({
            message: "Judges data is found",
            judge_data: getData,
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

        const getData = await judges.findById(id);

        if (!judge_data)
            return res.status(400).json({
                message: 'Judge is not in lost',
                success: false
            });

        return res.status(200).json({
            message: "Judges data is found by id",
            judge_data: getData,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            error: error.message,
            success: 'false'
        });
    }
}