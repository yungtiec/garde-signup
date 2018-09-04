/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {
  Login,
  Signup,
  RequestPasswordReset,
  ResetPassword,
  RegistrationBackground,
  RegistrationHeader,
  RegistrationCard,
  RegistrationCardFooter,
  RegistrationFooter
} from './Registration'
export {InputEmail, InputPassword, InputText} from './FormsyInputs/Inputs'
export {default as Navbar} from './Navbar'
export {default as AuthWidget} from './AuthWidget'
export {default as LayoutWithNav} from './LayoutWithNav'
export {default as RouteWithLayout} from './RouteWithLayout'
export {default as UserHome} from './user-home'
