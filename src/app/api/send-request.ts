// pages/api/send-request.ts

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { data } = req.body;

    // Simulate a POST request handling
    if (data) {
      res.status(200).json({ message: 'Request processed successfully!' });
    } else {
      res.status(400).json({ message: 'Invalid data' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
