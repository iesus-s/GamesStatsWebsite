import {Container, Row} from "react-bootstrap";

const Banner = ({message}) => {
  return (
      <div className="cflex-col flex">
            <div className="container-fluid flex flex-col mx-auto px-1 bg-gradient-to-r from-indigo-600 to-pink-950">
                <div className="flex flex-col mx-auto">
                    <h1 className="max-w-md text-xl font-bold text-center text-white ">
                        {message}
                    </h1>
                </div>
            </div>
      </div>
  )
}

Banner.defaultProps = {
    message: 'Monitor Game metrics and challenge friends with Frag Pulse',
}


export default Banner