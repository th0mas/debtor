import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import UserAvatar from '../UserAvatar'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import TextField from '@material-ui/core/TextField'
import Select from 'react-select'
import InputAdornment from '@material-ui/core/InputAdornment'

import styles from './styles.scss'
import { Button } from '@material-ui/core'

export class CreatePool extends React.PureComponent {
  updatePicker = value => this.props.updatePoolState({target: {name: 'multi', value}})

  getUser = (id) => this.props.users.find((user) => user.id === id)

  createPool = (e) => {
    e.preventDefault()
    let pool = {
      amount: this.props.pool.amount * 100,
      description: this.props.pool.description,
      owner: this.props.currentUser,
      users: this.props.pool.multi.map(val => val.value)
    }
    this.props.savePool(pool)
      .then(() => this.props.getPools())
      .then(() => this.props.push('/recent'))
  }

  MultiValue = (props) => {
    return (
      <Chip
        avatar={<UserAvatar user={this.getUser(props.data.value)} />}
        tabIndex={-1}
        label={props.children}
        onDelete={props.removeProps.onClick}
      />
    )
  }

  Menu = (props) => {
    return (
      <Paper square className={styles.paper} {...props.innerProps}>
        {props.children}
      </Paper>
    )
  }

  inputComponent = ({ inputRef, ...props }) => {
    return <div ref={inputRef} {...props} />
  }

  Control = (props) => {
    return (
      <TextField
        fullWidth
        InputProps={{
          inputComponent: this.inputComponent,
          inputProps: {
            className: styles.input,
            inputRef: props.innerRef,
            children: props.children,
            ...props.innerProps,
          },
        }}
        {...props.selectProps.textFieldProps}
      />
    )
  }

  ValueContainer = (props) => {
    return <div className={styles.valueContainer}>{props.children}</div>
  }

  render() {
    const userSuggestions = this.props.users.map((user) => ({
      value: user.id,
      label: user.name
    }))

    return (
      <Card className={styles.poolCard}>
        <CardContent>
          <h2>Create Pool</h2>
          <form className={styles.formHolder} onSubmit={this.createPool}>
            <TextField
              label='Amount'
              name='amount'
              type='number'
              InputProps={{
                startAdornment: <InputAdornment position="start">£</InputAdornment>,
              }}
              inputProps={{
                min: 0.01,
                max: 1000000000,
                step: 0.01
              }}

              onChange={this.props.updatePoolState}
              style={{ flexDirection: 'initial' }}
            />
            <TextField
              label='Description'
              name='description'
              style={{ flexDirection: 'column' }}
              value={this.props.pool.description}
              onChange={this.props.updatePoolState}
              multiline
            />
            <Select
              isMulti
              textFieldProps={{
                label: 'People',
                InputLabelProps: { shrink: true }
              }}
              components={{ MultiValue: this.MultiValue, Menu: this.Menu, Control: this.Control, ValueContainer: this.ValueContainer }}
              options={userSuggestions}
              value={this.props.pool.multi}
              onChange={this.updatePicker}
              placeholder='Add people to pool....'
            />
            <CardActions><Button type="submit">Create</Button></CardActions>
            
          </form>
        </CardContent>
      </Card>
    )

  }
}