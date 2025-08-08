import { Event } from "../Model/Event.js";

export const newEvent = async (req, res) => {
    try {
        const { Event_name, Event_type, start_time, end_time, Start_date, End_date, Description, Play_games, Rules_regulations, Location } = req.body

        if (!Event_name || !Event_type || !start_time || !end_time || !Description || !Play_games || !Rules_regulations || !Location) {
            return res.status(404).json({
                message: "All fields are required",
                success: false
            });
        }

        let event = await Event.findOne({ Event_name })
        if (event)
            return res.status(404).json({
                message: 'This Event is already exits..',
                success: 'false'
            });

        event = await Event.create({
            Event_name,
            Event_type,
            start_time,
            end_time: start_time < end_time ? end_time : start_time,
            Start_date,
            End_date,
            Description,
            Play_games,
            Rules_regulations,
            Location
        });
        return res.status(200).json({
            message: 'Event Add successfullt..!',
            event,
            success: 'true'
        });
    }
    catch (error) {
        return res.status(400).json({
            message: 'Some Error',
            error: error.message,
            success: 'false'
        });
    }
}