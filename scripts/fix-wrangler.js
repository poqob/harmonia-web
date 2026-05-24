import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const wranglerPath = join(__dirname, '../.output/server/wrangler.json')

try {
  const content = JSON.parse(readFileSync(wranglerPath, 'utf-8'))
  if (content.assets && content.assets.binding === 'ASSETS') {
    content.assets.binding = 'ASSETS_NAMESPACE'
    writeFileSync(wranglerPath, JSON.stringify(content, null, 2))
    console.log('✓ Fixed ASSETS binding to ASSETS_NAMESPACE')
  }
} catch (e) {
  console.error('Could not fix wrangler.json:', e.message)
}
