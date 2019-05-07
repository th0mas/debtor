import React from 'react'
import Select from '@material-ui/core/Select'
import Menuitem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

import styles from './styles.scss'

export const SortBySelect = ({ sortBy, setSortBy }) => {
  return (
    <FormControl className={styles.sortBy}>
      <InputLabel
        htmlFor="sort-by"
      >
        Sort By
      </InputLabel>
      <Select style={{display: 'flex'}}
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        <Menuitem value={'id'}>Date created</Menuitem>
        <Menuitem value={'amount'}>Amount Owed</Menuitem>
        <Menuitem value={'name'}>Name</Menuitem>
      </Select>
    </FormControl>
  )
}