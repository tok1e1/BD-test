import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};
const getRandom = () => Math.floor(Math.random() * 2);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (getRandom() === 1) {
    res.status(200).json({ message: 'All good' });
  } else {
    res.status(500).json({ message: 'All bad' });
  }
}
