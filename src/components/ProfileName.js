
const ProfileName = ({username}) => {
  return (
    <div className="pb-1 mx-4">
        <h2 id="Profile_Name">{username}</h2>
    
    </div>
  )
}

ProfileName.defaultProps = {
    username: 'Profile Name',
}

export default ProfileName