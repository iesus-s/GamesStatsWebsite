
const LoginButton = ({label}) => {
  return (
    <div className="flex flex-col max-w-sm mx-auto mb-5">
        <button type="submit" className="bg-gradient-to-r from-red-500 to-blue-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ">{label}</button>
    </div>
  )
}

LoginButton.defaultProps = {
    label: 'Login in'
}

export default LoginButton