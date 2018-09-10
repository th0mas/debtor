import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import ActivityCard from '../ActivityCard'

import styles from './styles.scss'

export class RecentActivity extends React.PureComponent {
  constructor(props) {
    super(props)
    this.user = this.props.user ? this.props.user : this.props.currentUser
  }

  componentDidMount() {
    this.props.getDebts(this.props.user)
  }

  getDebts(all = false) {
    let debts = all
      ? this.props.debts.filter(item => item.debtor.id === this.user)
      : this.props.debts.filter(item => item.debtor.id === this.user && item.paid === false)
    return debts
  }
  getCredits(all = false) {
    let credits = all === true
      ? this.props.debts.filter(item => item.creditor.id === this.user)
      : this.props.debts.filter(item => item.creditor.id === this.user && item.paid === false)
    return credits

  }
  addDebt = () => {
    let debts = this.getDebts()
    let debtTotal = 0
    debts.forEach(element => {
      debtTotal = debtTotal + element.amount
    })
    return (debtTotal / 100).toFixed(2)
  }

  addCredit = () => {
    let credits = this.getCredits()
    let creditTotal = 0
    credits.forEach(element => {
      creditTotal = creditTotal + element.amount
    })
    return (creditTotal / 100).toFixed(2)
  }
  render() {
    return (
      <div>
        <div className={styles.headerCardHolder}>
          <div className={styles.headerItem}>
            <h3 className={styles.bad}>DEBT</h3>
            <h2>
              £{this.addDebt()}
            </h2>
          </div>
          <div className={styles.headerItem}>
            <h3 className={styles.good}>OWED</h3>
            <h2>
              £{this.addCredit()}
            </h2>
          </div>
        </div>
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
  }
}