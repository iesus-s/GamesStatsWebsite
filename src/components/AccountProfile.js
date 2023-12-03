import Card from 'react-bootstrap/Card';
import AccountBadge from "./AccountBadge"
// import AccountBio from "./AccountBio"
// import ProfileImage from "./ProfileImage"
// import ProfileName from "./ProfileName"

const AccountProfile = () => {
  return (
    // <section className="text-center text-sm-start p-5 ">
    //     <div className="container-sm">
    //         <div className="d-sm-flex align-items-start justify-content-center pt-5 ">
    //             <ProfileImage />
    //         </div>
    //         <div className="d-sm-flex justify-content-center">
    //             <ProfileName />
    //             <AccountBadge />
    //         </div>
    //         <div className="d-sm-flex align-items-end justify-content-center">
    //             <AccountBio />
    //         </div>
    //     </div>
    // </section>
    <Card className='mx-auto my-10' style={{ width: '20rem' }}>
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