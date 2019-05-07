import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

import styles from './styles.scss'

export class Login extends React.PureComponent {
  handleLoginUser = (e) => {
    e.preventDefault()
    this.loginUser()
  }

  loginUser = () => {
    this.props.loginUser(this.props.loginForm.email, this.props.loginForm.password)
  }

  setCreateAccount = (c) => {
    // Set the create account status
    // We fake a react event so we can re-use the existing `updateLoginForm` method
    this.props.updateLoginForm({ target : {
      name: 'newAccount',
      value: c
    }})
  }

  createAccount = () => {
    this.props.saveAccount(this.props.loginForm)
      .then(() => this.loginUser())
  }

  componentDidMount() {
    this.setCreateAccount(false)
    this.props.setLoginSuccess()
  }

  render() {
    let newAccount = this.props.loginForm && this.props.loginForm.newAccount
    return (
      <div style={{ textAlign: 'center' }}>
        <Card className={styles.card}>
          <CardContent>
            {this.props.loginFailed
              ? <p className={styles.loginFailText}>Username or password incorrect</p>
              : null
            }
            <form className={styles.formHolder} onSubmit={newAccount ? this.props.createUser : this.handleLoginUser}>
              <FormControl className={styles.inputBox}>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <Input fullWidth
                  id='email'
                  name='email'
                  onChange={this.props.updateLoginForm}
                />
              </FormControl>
              <FormControl className={styles.inputBox}>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <Input fullWidth
                  id='password'
                  name='password'
                  type='password'
                  onChange={this.props.updateLoginForm}
                />
              </FormControl>
              {newAccount
                ?
                <>
                  <FormControl className={styles.inputBox}>
                    <InputLabel htmlFor='name'>Name</InputLabel>
                    <Input fullWidth
                      id='name'
                      name='name'
                      type=''
                      onChange={this.props.updateLoginForm}
                    />
                  </FormControl>
                  <FormControl className={styles.inputBox}>
                    <InputLabel htmlFor='name'>Profile Image URL</InputLabel>
                    <Input fullWidth
                      id='profile_img'
                      name='profile_img'
                      type='url'
                      onChange={this.props.updateLoginForm}
                    />
                  </FormControl>
                  <CardActions>
                    <Button onClick={this.createAccount}>Create Account</Button>
                  </CardActions>
                </>
                : <CardActions>
                  <Button type='submit'>Login</Button>
                  <Button onClick={() => this.setCreateAccount(true)}>Create Account</Button>
                </CardActions>}
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }
}