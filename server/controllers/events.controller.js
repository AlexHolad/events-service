import Event from "../models/Event.js";
import User from "../models/User.js"


export const getEvents = () => async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch(err) {
    res.status(500).send(err)
  }
};

export const addEvent = () => async (req, res) => {
  const {
    title,
    category,
    description,
    district,
    location,
    date,
    img,
  } = req.body;

  const userId = req.user._id;

try {
  const event = new Event({
    title: title,
    category: category,
    description: description,
    district: district,
    location: location,
    date: date,
    img: img,
    author: userId,
  });
  const savedEvent = await event.save();

  const user = await User.findOne({_id: req.user._id.toString()});

  user.events.push(savedEvent._id)
  
  await user.save()



  res.status(201).json(event)

} catch(e){
  res.status(503).send("Unable to save Event")
}

};

export const updateEvent = () => async (req, res) => {
  const { _id, title, category, description, district, location, date, img } =
    req.body;

  try {
    const saveNonEmptyValues = () => {
      let changesObj = {};

      if (title) {
        changesObj.title = title;
      }
      if (category) {
        changesObj.category = category;
      }
      if (description) {
        changesObj.description = description;
      }
      if (district) {
        changesObj.district = district;
      }
      if (location) {
        changesObj.location = location;
      }
      if (date) {
        changesObj.date = date;
      }
      if (img) {
        changesObj.img = img;
      }

      return changesObj;
    };

    const event = await Event.findByIdAndUpdate(_id, saveNonEmptyValues(), {
      new: true,
    });

    res.status(200).json(event);

  } catch (err) {
    res.status(400).send(err);
  }
};

export const deleteEvent = () => async (req, res) => {
  const { _id } = req.body;
  try {
    await Event.findByIdAndRemove(_id);
    res.status(202).send("Event successfully deleted")
  } catch (err) {
    res.status(404).send("Resource already deleted")
  }
  
};
