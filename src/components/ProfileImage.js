
const ProfileImage = ({inputSrc, inputAlt, width, height}) => {
  return (
    <div className="profile_image p-5">
        <img src={inputSrc} className="img-responsive img-circle" alt={inputAlt} width={width} height={height}></img>
    </div>
  )
}

ProfileImage.defaultProps = {
    inputSrc: './src/images/deafult_user_profile_pic.jpg',
    inputAlt: 'deafult_user_profile_pic',
    width: '175',
    height: '175',
}

export default ProfileImage  