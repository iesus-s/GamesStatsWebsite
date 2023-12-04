
const AccountBio = ({userBio}) => {
  return (
    <div class="p-3 ">
        <h2>Bio</h2>
        <p>{userBio}</p>
    </div>
  )
}

AccountBio.defaultProps = {
    userBio: '🎮 Gaming Enthusiast | 🌟 Esports Competitor | 🕹️ FPS Specialist Mastering virtual battlegrounds | Competitive gaming is my passion | Join me on my quest for victory!'
}

export default AccountBio