// =====================================================
// web server
// =====================================================

const express = require('express')
const app = express()
const PORT = 5000

app.use(express.static('./build/'))

app.listen(PORT, () => {
  console.log('running on ' + PORT)
})

// =====================================================
// ts > transpiled code execution
// =====================================================

const path = require('path')
require(path.resolve(__dirname, '../js_transpiled/index')).default()
