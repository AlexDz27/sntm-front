// TODO: make it env.ts with the code equiv like in node.js

export const APP_ENVIRONMENT = 'dev'

export let BACKEND_URL
if (APP_ENVIRONMENT === 'dev') {
  BACKEND_URL = 'http://localhost:3001'
} else if (APP_ENVIRONMENT === 'prod') {
  BACKEND_URL = 'http://localhost.prod:3001'
}