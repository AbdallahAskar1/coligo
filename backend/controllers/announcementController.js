import Announcement from '../models/announcement.js';
export const createAnnouncement = async (req, res) => {
  try {
    const { username, group, text, avatar } = req.body;
    const announcement = new Announcement({ username, group, text, avatar });
    const savedAnnouncement = await announcement.save();
    res.json(savedAnnouncement);
  } catch (error) {
    res.status(500).json({ error: 'Error creating the announcement' });
  }
};
export const getAllAnnouncements = async (_req, res) => {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching announcements' });
  }
};
export const getAnnouncementById = async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.announcementId);
    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }
    res.json(announcement);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the announcement' });
  }
};
export const updateAnnouncement = async (req, res) => {
  try {
    const { username, group, text, avatar } = req.body;
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      req.params.announcementId,
      { username, group, text, avatar },
      { new: true }
    );
    res.json(updatedAnnouncement);
  } catch (error) {
    res.status(500).json({ error: 'Error updating the announcement' });
  }
};
export const deleteAnnouncement = async (req, res) => {
  try {
    await Announcement.findByIdAndRemove(req.params.announcementId);
    res.json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the announcement' });
  }
};
