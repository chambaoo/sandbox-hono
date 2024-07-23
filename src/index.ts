import { Hono } from 'hono'

const app = new Hono()

// ルートパス
app.get('/', (c) => {
  return c.text('Welcome to my Hono app!')
})

// 名前を受け取って挨拶するパス
app.get('/hello/:name', (c) => {
  const name = c.req.param('name')
  return c.json({
    message: `Hello, ${name}!`
  })
})

// フォームを表示するパス
app.get('/form', (c) => {
  return c.html(`
    <form action="/submit" method="post">
      <input type="text" name="message" />
      <button type="submit">Send</button>
    </form>
  `)
})

// フォームの送信を処理するパス
app.post('/submit', async (c) => {
  const { message } = await c.req.parseBody()
  return c.text(`You submitted: ${message}`)
})

export default app