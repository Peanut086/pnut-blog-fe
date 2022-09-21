let BASE_URL: string
let TIME_OUT: number

if (process.env.NODE_ENV === 'development') {
  console.log('Pnut ========> ', process.env.NODE_ENV)
  BASE_URL = '/api'
  TIME_OUT = 5000
} else {
  BASE_URL = '还不知道'
  TIME_OUT = 5000
}

export {
  BASE_URL,
  TIME_OUT
}
