import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
  username: String,
  group: String,
  text: String,
  avatar: String,
});

const Announcement = mongoose.model('Announcement', announcementSchema);

export default Announcement;
