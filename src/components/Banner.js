const Banner = ({message}) => {
  return (
    <section id="sign-in-banner">
        <div className="container-fluid flex flex-col mx-auto mb-80 px-1 bg-gradient-to-r from-indigo-600 to-pink-500">
            <div className="flex flex-col mx-auto">
                <h1 className="max-w-md text-xl font-bold text-center text-white ">
                    {message}
                </h1>
            </div>
        </div>
    </section>

  )
}

Banner.defaultProps = {
    message: 'Monitor Game metrics and challenge friends with Frag Pulse',
}


export default Banner