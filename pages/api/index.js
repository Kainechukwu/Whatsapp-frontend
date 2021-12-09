// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
import cors from 'cors'

const handler = nc()

  .use(cors())

  .get((req, res) => {
    res.json({ message: "get request" })
  })


  .post((req, res) => {
    res.json({ message: "post request" })
  });

export default handler;
