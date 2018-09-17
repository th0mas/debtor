import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import ActivityCard from '../ActivityCard'
import { TopBar } from './TopBar'

import styles from './styles.scss'

export class RecentActivity extends React.PureComponent {
  componentDidMount() {
    this.props.getDebts(this.props.user)
  }


  getDebts(all = false) {
    let debts = all
      ? this.props.debts.filter(item => item.debtor.id === this.props.user)
      : this.props.debts.filter(item => item.debtor.id === this.props.user && item.paid === false)
    return debts
  }
  getCredits(all = false) {
    let credits = all === true
      ? this.props.debts.filter(item => item.creditor.id === this.props.user)
      : this.props.debts.filter(item => item.creditor.id === this.props.user && item.paid === false)
    return credits

  }

  render() {
    const classes = `${this.props.userProfile ? styles.userProfilePadding : null}`
    if (this.props.accounts) {
      return (
        <div className={classes}>
          <TopBar debts={this.getDebts()} credits={this.getCredits()} />

          <div className={styles.toggleSlider}>
            <FormControlLabel
              control={
                <Switch
                  checked={this.props.viewAll}
                  onChange={this.props.toggleViewAll}
                  value="viewAll"
                />
              }
              label="View All"
            />
          </div>
          <div className={styles.activityHolder}>

            <div className={styles.activityList}>
              {this.getDebts(this.props.viewAll).map((debt, i) => <ActivityCard activity={debt} type={'debt'} key={i} />)}
            </div>
            <div className={styles.activityList}>
              {this.getCredits(this.props.viewAll).map((credit, i) => <ActivityCard activity={credit} type={'credit'} key={i} />)}
            </div>
          </div>
        </div>
      )
    } else {
      return <h2>loading...</h2>
    }
  }
}