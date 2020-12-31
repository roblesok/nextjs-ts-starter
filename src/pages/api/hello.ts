import { NextApiRequest, NextApiResponse } from 'next'

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({
    title: 'Next.js + Typescript Starter',
    subtitle: 'Be creative and build awesome websites',
  })
}
