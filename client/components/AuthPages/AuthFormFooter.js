import React from 'react'
import {Link} from 'react-router-dom'

export default function AuthFormFooter({authMethod}) {
  return (
    <div className="auth-form__form-footer">
      <div className="auth-form__form-footer__left">
        <nav>
          <a
            href="https://thebrooklynproject.consensys.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0"
          >
            <span>About</span>
          </a>
          <a
            href="https://tinyurl.com/y94wspyg"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0"
          >
            <span>privacy policy</span>
          </a>
          <a
            href="https://drive.google.com/open?id=1p4F4UVhCohifqb0R5WzfJ8R1nKJOahIV"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-0"
          >
            <span>terms of use</span>
          </a>
        </nav>
      </div>
      <div className="auth-form__form-footer__right">
        <p id="no-acct-msg" className="message__has-account my-2 text-primary">
          {authMethod === 'signup'
            ? 'Already have an account?'
            : "Don't have an account?"}
          <Link
            className="btn btn-outline-primary ml-2"
            to={`/${authMethod === 'signup' ? 'login' : 'signup'}`}
          >
            {authMethod === 'signup' ? 'Log in' : 'Sign up'}
          </Link>
        </p>
      </div>
    </div>
  )
}
