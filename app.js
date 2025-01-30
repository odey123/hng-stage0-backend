const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/api', (req, res) => {
    const email = 'ohotujude@gmail.com'
    const githubUrl = 'https://github.com/odey123/hng-stage0-backend'


    const currentDatetime = new Date().toISOString()

    const response = {
        email: email,
        current_datetime: currentDatetime,
        github_url: githubUrl
    }

    res.status(200).json(response)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})