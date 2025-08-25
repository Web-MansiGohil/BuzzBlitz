import { schedule_data, } from "../Model/Schedule.js";

export const scheduleData = async (req, res) => {
    try {
        const { schedule_id, Event_id, Event_name, Event_type, Start_time, End_time, Date, Location } = req.body;

        if (schedule_id == "" || Event_id == "" || Event_name == "" || Event_type == "" || Start_time == "" || End_time == "" || Date == "" || Location == "")
            return res.status(400).json({
                message: 'All filed are requierd', success: false
            });
         const id = Math.floor(Math.random() * 100000);

        const schedule = await schedule_data.create({
            schedule_id: id,
            Event_id,
            Event_name,
            Event_type,
            Start_time,
            End_time,
            Date,
            Location,
        });

        return res.status(200).json({
            message: 'Schedule Data',
            schedule,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Invlid data',
            error_message: error.message,
            success: false
        });
    }
}

export const getAllScheduleData = async (req, res) => {
    try {
        const schedule = await schedule_data.find();
        if (!schedule) {
            return res.status(400).json({
                message: 'Schedule not find',
                success: false
            });
        }

        return res.status(200).json({
            message: 'Get schedule suceessfully',
            data_schedule: schedule,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Invalid data from schedule',
            success: false
        });
    }
}