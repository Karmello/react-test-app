export const SHOW_DIALOG = (name) => {
  return {
    type: 'SHOW_DIALOG',
    data: {
      name: name
    }
  }
}

export const HIDE_DIALOG = (name) => {
  return {
    type: 'HIDE_DIALOG',
    data: {
      name: name
    }
  }
}