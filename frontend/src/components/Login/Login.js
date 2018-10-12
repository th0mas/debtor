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
  loginUser = (e) => {
    e.preventDefault()
    this.props.loginUser(this.email.value, this.password.value)
      .then(this.componentDidUpdate())
  }

  componentDidUpdate() {
    if (this.props.loginFailed) {
      this.password.value = ''
    }
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Card className={styles.card}>
          <CardContent>
            { this.props.loginFailed
              ? <p className={styles.loginFailText}>Username or password incorrect</p>
              : null
            }
            <form className={styles.formHolder} onSubmit={this.loginUser}>
              <FormControl className={styles.inputBox}>
                <InputLabel htmlFor='email'>Email</InputLabel>
                <Input fullWidth
                  id='email'
                  type=''
                  inputRef={(element) => this.email = element}
                />
              </FormControl>
              <FormControl className={styles.inputBox}>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <Input fullWidth
                  id='password'
                  type='password'
                  inputRef={(element) => this.password = element}
                />
              </FormControl>
              <CardActions>
                <Button type='submit'>Login</Button>
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }
}