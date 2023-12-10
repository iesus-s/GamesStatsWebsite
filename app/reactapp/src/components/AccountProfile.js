import Card from 'react-bootstrap/Card';
import AccountBadge from "./AccountBadge"
// import AccountBio from "./AccountBio"
// import ProfileImage from "./ProfileImage"
// import ProfileName from "./ProfileName"

const AccountProfile = () => {
  return (

    <Card className='mx-auto my-35' style={{ width: '20rem' }}>
      <Card.Img Variant="top" src={require("../images/default_user_profile_pic.jpg")}/>
      <Card.Body>
          <Card.Title >Profile Name</Card.Title>
          <Card.Text>
          <AccountBadge />
          🎮 Gaming Enthusiast | 🌟 Esports Competitor | 🕹️ FPS Specialist Mastering virtual battlegrounds | Competitive gaming is my passion | Join me on my quest for victory!
          </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default AccountProfile