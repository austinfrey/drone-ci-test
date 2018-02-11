const yo = require('yo-yo')

const root = document.body.appendChild(document.createElement('div'))

update()

function update() {
  yo.update(root, yo`
    <div>
      <h1>Hello</h1>
      <h2>World</h2>
      <h3>Goodbye</h3>
      <h4>Cruel World</h4>
      <h5>Last one</h5>
    </div>
  `)
}
