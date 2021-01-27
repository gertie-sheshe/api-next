// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }

//       return resolve(result)
//     })
//   })
// }

export default async (req, res) => {
  console.log(req.body) // The request body
  console.log(req.query) // The url query string
  console.log(req.cookies)

  // await runMiddleware(req, res, cors);

  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
