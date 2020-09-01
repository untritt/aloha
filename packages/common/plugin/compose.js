const compose = (hooks) => {
  return (args) => {
    hooks.forEach((hook) => {
      hook(args)
    })
  }
}
module.exports = compose
