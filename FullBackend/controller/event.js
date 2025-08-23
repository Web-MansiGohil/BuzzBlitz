import { Event } from "../Model/Event.js";

export const newEvent = async (req, res) => {
    try {
        const { Event_id, Event_name, Event_type, Start_time, End_time, Date, How_it_works,
            Skills_developed, GamePlay, How_to_play, Description, photo_path, Name, Designation, event_image1, event_image2, Rules_regulations, Location } = req.body

        if (!Event_id || !Event_name || !Event_type || !Start_time || !End_time || !Date || !How_it_works ||
             !How_to_play || !Description || !photo_path || !Name || !Designation || !event_image1 || !event_image2 || !Rules_regulations || !Location) {
            return res.status(404).json({
                message: "All fields are required",
                success: false
            });
        }

        let event = await Event.findOne({ Event_name })
        if (event)
            return res.status(404).json({
                message: 'This Event is already exits..',
                success: false
            });

        event = await Event.create({
            Event_id,
            Event_name,
            Event_type,
            Start_time,
            End_time,
            Date,
            Description,
            How_it_works,
            Skills_developed,
            GamePlay,
            How_to_play,
            Rules_regulations,
            photo_path,
            Name,
            Designation,
            event_image1,
            event_image2,
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

export const getAllEvent = async (req, res) => {
    try {
        const it = await Event.find();
        if (!it) {
            return res.status(400).json({
                message: 'Some error for fetching data',
                success: false
            });
        }
        return res.status(200).json({
            message: 'All Event data is get',
            data: it,
            success: true
        })

    } catch (er) {
        return res.status(500).json({
            message: 'Invalid data',
            error_message: er,
            success: true
        });
    }
}