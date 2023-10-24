import Announcement from './Announcement.jsx'; 
import Card from '../Card.jsx';
const AnnouncementsContainer = ({ announcements }) => {
  return (
    <Card>
      <div className="announcements-container">
        <h1 className="announcements-header">Announcements</h1>
        <h2 className="announcements-subheader">Check out latest announcements</h2>
        {announcements.map((announcement, index) => (
          <Announcement key={index} user={announcement} />
        ))}
      </div>
    </Card>
  );
};

export default AnnouncementsContainer;
