import { schedule_data } from "../Model/Schedule.js";

export const scheduleData = async (req, res) => {
    try {
        const { schedule_id, Event_id, Event_name, Event_type, Start_time, End_time, Date, Location,user } = req.body;


        if (!schedule_id == "" || !Event_id == "" || !Event_name == "" || !Event_type == "" || !Start_time == "" || !End_time == "" || !Date == "" || !Location == "")
            return res.status(400).json({
                message: 'All filed are requierd', success: false
            });

        const s_id = Math.floor(Math.random() * 100);

        const schedule = await schedule_data.create({
            schedule_id, Event_id,
            Event_name, Event_type, Start_time, End_time, Date, Location,user:req.user // assign user id from auth middleware
        })
        return res.status(200).json({
            message: 'Schedule Data',
            schedule,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Invlid data',
            error_message: error.message,
            success: false
        });
    }
}