import type { NextApiRequest, NextApiResponse } from 'next';
import Agent from '../../../models/Agent';
import { createAgent, getAllAgents } from '../../../controllers/agentControllers';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return createAgent(req, res);
    case 'GET':
      return getAllAgents(req, res);
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}