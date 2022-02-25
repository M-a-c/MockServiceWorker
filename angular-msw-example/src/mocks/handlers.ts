// src/mocks/handlers.js
import { rest } from 'msw'
import { Book } from 'src/models/Book'
export const handlers = [
  rest.get('/books', (req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json<Array<Book>>(
        [
        { title:'mock 1',price:'0.01' },
        { title:'mock 2',price:'0.02' },
        { title:'mock 3',price:'0.03' }
        ]
      ),
    )
  }),
]
