import AccountBadge from "./AccountBadge"
import AccountBio from "./AccountBio"
import ProfileImage from "./ProfileImage"
import ProfileName from "./ProfileName"

const AccountProfile = () => {
  return (
    <section className="text-center text-sm-start p-5 ">
        <div className="container-sm">
            <div className="d-sm-flex align-items-start justify-content-center pt-5 ">
                <ProfileImage />
            </div>
            <div className="d-sm-flex justify-content-center">
                <ProfileName />
                <AccountBadge />
            </div>
            <div className="d-sm-flex align-items-end justify-content-center">
                <AccountBio />
            </div>
        </div>
    </section>

  )
}

export default AccountProfile