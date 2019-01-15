import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import ActivityCard from '../ActivityCard'
import { SortBySelect } from './SortBy'
import { TopBar } from './TopBar'

import styles from './styles.scss'

export class RecentActivity extends React.PureComponent {
  componentDidMount() {
    this.props.getDebts(this.props.user.id) // Make sure
  }

  getDebts(all = false) {
    let debts = all
      ? this.props.debts.filter(item => item.debtor.id === this.props.user.id)
      : this.props.debts.filter(item => item.debtor.id === this.props.user.id && item.paid === false)
    return debts
  }
  getCredits(all = false) {
    let credits = all === true
      ? this.props.debts.filter(item => item.creditor.id === this.props.user.id)
      : this.props.debts.filter(item => item.creditor.id === this.props.user.id && item.paid === false)
    return credits

  }
  merge = (left, right, attr) => {
    let result = []
    while (left.length && right.length) {
      if (left[0][attr] >= right[0][attr]){
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }

    return result.concat(left).concat(right)

  }
  mergeSort(items, attr) {
    if (items.length < 2) {
      return items
    }

    let middle = parseInt(items.length / 2)
    let left = items.slice(0, middle)
    let right = items.slice(middle, items.length)
    return this.merge(this.mergeSort(left, attr), this.mergeSort(right, attr), attr)
  }

  render() {
    const classes = `${this.props.userProfile ? styles.userProfilePadding : ''}`
    if (this.props.accounts.length > 0) {
      return (
        <div className={classes}>
          {this.props.userProfile ? <h1 className={styles.mobileTitle}>{this.props.user.name}</h1> : null}
          <TopBar debts={this.getDebts()} credits={this.getCredits()} pools={this.props.pools}/>
          <div className={styles.toggleSlider}>
            <SortBySelect sortBy={this.props.sortBy} setSortBy={this.props.setSortBy} />
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
              {this.mergeSort(this.getDebts(this.props.viewAll), this.props.sortBy).map((debt) => <ActivityCard activity={debt} type={'debt'} key={debt.id} />)}
            </div>
            <div className={styles.activityList}>
              {this.mergeSort(this.getCredits(this.props.viewAll), this.props.sortBy).map((credit) => <ActivityCard activity={credit} type={'credit'} key={credit.id} />)}
            </div>
          </div>
        </div>
      )
    } else {
      return <h2>loading...</h2>
    }
  }
}