const fetch = require('node-fetch')
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

const triggerTravisBuild = () => {
  const apiToken = fs.readFileSync(
    path.join(__dirname, '/retune-travis-api-token.txt')
  )

  if (!apiToken) {
    console.error('API token cannot be found')
    return
  }

  const org = 'retune'
  const repo = 'retune-main'

  const url = `https://api.travis-ci.com/repo/${org}%2F${repo}/requests`

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Travis-API-Version': '3',
    Authorization: `token ${apiToken}`,
  }

  const body = {
    request: {
      branch: 'master',
    },
  }

  return fetch(url, { method: 'POST', headers, body: JSON.stringify(body) })
}

app.get('/', (req, res) => res.send('UP'))
app.post('/hook', async (req, res) => {
  console.log('Received hook')
  console.log(JSON.stringify(req.body))

  triggerTravisBuild().then(apiResponse => {
    if (apiResponse.ok) {
      res.json({ ok: true }).end()
      console.log('Triggered build ok')
    } else {
      res.json({ bad: true }).end()
      console.log('Error triggering build')
    }
  })
})

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`Webhook receiver listening on port ${port}`)
)
