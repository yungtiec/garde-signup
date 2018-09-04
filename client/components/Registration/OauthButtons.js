import React from 'react'

export default function OathButtons({signinWithUport}) {
  return (
    <div className="oauth-btns">
      <a href="/auth/google">
        <img
          width="191px"
          height="46px"
          src="/assets/btn_google_signin_dark_normal_web.png"
        />
      </a>
      <a onClick={signinWithUport}>
        <img
          width="191px"
          height="46px"
          src="/assets/btn_uport_signin_dark_normal_web.png"
        />
      </a>
    </div>
  )
}
