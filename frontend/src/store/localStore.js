export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

export const saveSate = (state) => {
  const savedAttrs = {
    entities: {
      currentUser: state.entities.currentUser
    }
  }
  try {
    const serializedState = JSON.stringify(savedAttrs)
    localStorage.setItem('state', serializedState)
  } catch(err) {
    return undefined
  }
} 