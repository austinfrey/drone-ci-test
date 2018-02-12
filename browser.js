const yo = require('yo-yo')

const root = document.body.appendChild(document.createElement('div'))

update()

function update() {
  yo.update(root, yo`
    <div>
      <h1>Hello</h1>
    </div>
  `)
}
