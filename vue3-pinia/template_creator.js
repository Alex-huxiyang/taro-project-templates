const path = require('path')

function createWhenTs (err, params) {
  return !!params.typescript
}

function normalizePath (path) {
  return path.replace(/\\/g, '/').replace(/\/{2,}/g, '/')
}

const SOURCE_ENTRY = '/src'
const PAGES_ENTRY = '/src/pages'

const handler = {
  '/tsconfig.json': createWhenTs,
  '/types/global.d.ts': createWhenTs,
  '/types/vue.d.ts': createWhenTs,
  '/src/pages/index/index.css' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: normalizePath(path.join(PAGES_ENTRY, pageDir, pageName, 'index.css')),
      setSubPkgName: normalizePath(path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.css'))
    }
  },
  '/src/pages/index/index.vue' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: normalizePath(path.join(PAGES_ENTRY, pageDir, pageName, 'index.vue')),
      setSubPkgName: normalizePath(path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.vue'))
    }
  },
  '/src/pages/index/index.config.js' (err, { pageName = '', pageDir = '', subPkg = '' }) {
    return {
      setPageName: normalizePath(path.join(PAGES_ENTRY, pageDir, pageName, 'index.config.js')),
      setSubPkgName: normalizePath(path.join(SOURCE_ENTRY, subPkg, pageDir, pageName, 'index.config.js'))
    }
  },
  '/_eslintrc' () {
    return { setPageName: `/.eslintrc` }
  },
  '/_gitignore' () {
    return { setPageName: `/.gitignore` }
  },
  '/_editorconfig' () {
    return { setPageName: `/.editorconfig` }
  },
}

const basePageFiles = [
  '/src/pages/index/index.css',
  '/src/pages/index/index.vue',
  '/src/pages/index/index.config.js'
]

module.exports = {
  desc: 'Vue3 + Pinia 模板（https://pinia.esm.dev/）',
  handler,
  basePageFiles,
  platforms: ['Vue3']
}
