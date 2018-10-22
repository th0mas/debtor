import React from 'react'
import Select from '@material-ui/core/Select'
import Menuitem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'

import styles from './styles.scss'

export const SortBySelect = ({ sortBy, setSortBy }) => {
  return (
    <FormControl className={styles.sortBy}>
      <Select
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
        input={
          <Input
            name="sort-by"
            id="sort-by"
          />
        }
      >
        <Menuitem value={'created'}>Date created</Menuitem>
        <Menuitem value={'amount'}>Amount Owed</Menuitem>
        <Menuitem value={'name'}>Name</Menuitem>
      </Select>
      <FormHelperText>Sort By</FormHelperText>
    </FormControl>
  )
}