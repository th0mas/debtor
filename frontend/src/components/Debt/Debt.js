import React, {useEffect} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'
import Arrow from '@material-ui/icons/ArrowForward'
import UserAvatar from '../UserAvatar'

import styles from './styles.scss'

const submitDebt = (event, debt, debtor, creditor, goBack, saveDebt) => {
  event.preventDefault()
  let newDebt = {...debt, ...{creditor_id: creditor, debtor_id:debtor}}
  newDebt.amount = Math.floor(parseFloat(newDebt.amount) * 100 )
  saveDebt(newDebt)
  goBack()

}

const getUserById = (userId, users) => {
  return users.find(user => user.id === userId)
}

export const Debt = ({ users, debt, goBack, saveDebt, updateDebtState, match }) => {

  if (users.length > 0) {
    const debtorUserID = parseInt(match.params.debtor)
    const creditorUserID = parseInt(match.params.creditor)

    useEffect(() => {
      return () => updateDebtState({target: {
        name: 'description',
        value: null
      }
      })
    }, [creditorUserID, debtorUserID])
    
    return (
      <Card className={styles.debtCard} style={{flexDirection: 'row'}}>
        <CardContent>
          <h2>Add Debt </h2>
          <div className={styles.avatarHolder}>
            <UserAvatar user={getUserById(debtorUserID, users)} /> 
            <Arrow className={styles.arrow}/> 
            <UserAvatar user={getUserById(creditorUserID, users)} />
          </div>
          <form className={styles.formHolder} 
            onSubmit={(e) => (submitDebt(e, debt, debtorUserID, creditorUserID, goBack, saveDebt))}>
            <TextField
              label='Amount'
              id='amount'
              name='amount'
              type='number'
              onChange={updateDebtState}
              InputProps={{
                startAdornment: <InputAdornment position="start">£</InputAdornment>,
              }}
              inputProps={{ /* eslint react/jsx-no-duplicate-props: off */
                min: 0.01,
                max: 1000,
                step: 0.01
              }}
              style={{flexDirection: 'initial'}}
            />
            <TextField
              onChange={updateDebtState}
              label='Description'
              name='description'
              style={{flexDirection: 'column'}}
              inputProps={{maxLength: 200}}
              multiline
            />
            <CardActions>
              <Button type='submit'>Create</Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    )
  } else {
    return <h1>Loading...</h1>
  }
}