
const RememberLogin = () => {
  return (
    <div className="inline-flex sm:w-1/2 space-x-3">
        <input className="form-check-input" type="checkbox" id="rememberLogin"></input>
        <label className="form-check-label" for="rememberLogin">
            Remember Login
        </label>
    </div>
  )
}

export default RememberLogin