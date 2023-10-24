import express from 'express';
import * as announcementController from '../controllers/announcementController.js';

const router = express.Router();

router.post('/', announcementController.createAnnouncement); 
router.get('/', announcementController.getAllAnnouncements); 
router.get('/:announcementId', announcementController.getAnnouncementById); 
router.put('/:announcementId', announcementController.updateAnnouncement); 
router.delete('/:announcementId', announcementController.deleteAnnouncement); 

export default router;
