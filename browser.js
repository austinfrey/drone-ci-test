const yo = require('yo-yo')

const root = document.body.appendChild(document.createElement('div'))

update()

function update() {
  yo.update(root, yo`
    <h1>Hello</h1>
  `)
}
