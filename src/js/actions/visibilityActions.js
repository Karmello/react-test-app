export const SHOW = (component) => {
  return {
    type: 'SHOW',
    meta: { component: component }
  }
}

export const HIDE = (component) => {
  return {
    type: 'HIDE',
    meta: { component: component }
  }
}