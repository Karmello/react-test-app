export const show = (component) => {
  return {
    type: 'SHOW',
    meta: { component: component }
  }
}

export const hide = (component) => {
  return {
    type: 'HIDE',
    meta: { component: component }
  }
}