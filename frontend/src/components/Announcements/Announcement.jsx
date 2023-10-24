
const Announcement = ({ user }) => {
  return (
    <div className="announcement">
      <div className="user-avatar">
        <img src={user.avatar} alt={`${user.name}'s avatar`} />
      </div>
      <div className="user-info" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="user-details">
          <div className="user-name">{user.name}</div>
          <div className="user-group">{user.group}</div>
        </div>
        <hr className="separator"/>
        <div className="announcement-text">{user.text}</div>
      </div>
  </div>
  );
};

export default Announcement;

