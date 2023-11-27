import type { NextApiRequest, NextApiResponse } from 'next';
import Agent from '../../../models/Agent';
import mongoose from 'mongoose';
import dbConnect from '../../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const { agentId } = req.query;

  if (!mongoose.Types.ObjectId.isValid(agentId as string)) {
    return res.status(400).json({ message: 'Invalid Agent ID' });
  }

  if (req.method === 'PUT') {
    // Update an agent
    const updatedAgent = await Agent.findByIdAndUpdate(agentId, req.body, { new: true });
    res.status(200).json(updatedAgent);
  } else if (req.method === 'DELETE') {
    // Delete an agent
    await Agent.findByIdAndDelete(agentId);
    res.status(204).end();
  }
}
