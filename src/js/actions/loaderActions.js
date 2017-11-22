export const START_LOADER = (name) => {
  return {
    type: 'START_LOADER',
    data: {
      name: name
    }
  }
}

export const STOP_LOADER = (name) => {
  return {
    type: 'STOP_LOADER',
    data: {
      name: name
    }
  }
}