import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data  = new FormData(e.target)
    const emailData = Object.fromEntries(data.entries()).email

    if (!validateEmail(emailData)) {
      setError(true)
      setEmail('')
    } else {
      setError(false)
      setSuccess(true)
    }
  }

  return (
    <>
      <div className="brand-mobile">
        <img src="./Brand.jpg" alt="Base Apparel Branding" />
      </div>

      <main>
        <article>
          <div className="brand-desktop">
            <img src="./Brand.jpg" alt="Base Apparel Branding" />
          </div>

          <h1 className='pink'>WE'RE</h1>
          <h1>COMING<br></br>
          SOON</h1>

          <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>

          {!success && (
            <form onSubmit={handleSubmit}>
              <input type="email" placeholder='Email Address' className={error ? 'error' : ''} name={"email"}/>
              {error && (
                <>
                  <img src="./ErrorIcon.svg" alt="Error Icon" className='error-icon'/>
                  <p className='error-text'>Please provide a valid email</p>
                </>
              )}
              <button type="submit" formNoValidate>{'>'}</button>
            </form>
          )}

          {success && (
            <div className="success">
              <p className="success-text">Thank you! We will notify you when the website arrives!</p>   
              <div className="line"></div>
            </div>
          )}
        </article>

        <img src="./Banner.jpg" alt="Girl posing with Base Apparel Clothing" className='girl-picture'/>
      </main>
    </>
  )
}

export default App
