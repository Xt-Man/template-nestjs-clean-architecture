import config from '@rocketseat/eslint-config/node.mjs'
import globals from 'globals'

export default [
  ...config,
  {
    ignores: ['.node_modules/*', '.dist/*'],
  },
  {
    languageOptions: {
      globals: globals.vitest,
    },
  },
]
