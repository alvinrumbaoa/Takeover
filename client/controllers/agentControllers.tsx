import Agent from '../models/Agent';
import { NextApiRequest, NextApiResponse } from 'next';
import { IAgent } from '../interfaces/IAgent';

// Create a new agent
export const createAgent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newAgent = new Agent(req.body as IAgent);
    const savedAgent = await newAgent.save();
    res.status(201).json(savedAgent);
  } catch (error) {
	if (error instanceof Error) {
	  res.status(400).json({ message: error.message });
	} else {
	  res.status(500).json({ message: 'An unknown error occurred' });
	}
  }
};

// Get a list of all agents
export const getAllAgents = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
	if (error instanceof Error) {
	  res.status(400).json({ message: error.message });
	} else {
	  res.status(500).json({ message: 'An unknown error occurred' });
	}
  }
};

// Get a single agent by ID
export const getAgentById = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const agent = await Agent.findById(req.query.id);
    if (!agent) return res.status(404).json({ message: 'Agent not found' });
    res.status(200).json(agent);
  } catch (error) {
	if (error instanceof Error) {
	  res.status(400).json({ message: error.message });
	} else {
	  res.status(500).json({ message: 'An unknown error occurred' });
	}
  }
};

// Update an agent
export const updateAgent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const updatedAgent = await Agent.findByIdAndUpdate(req.query.id, req.body, { new: true });
    res.status(200).json(updatedAgent);
  } catch (error) {
	if (error instanceof Error) {
	  res.status(400).json({ message: error.message });
	} else {
	  res.status(500).json({ message: 'An unknown error occurred' });
	}
  }
};

// Delete an agent
export const deleteAgent = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await Agent.findByIdAndDelete(req.query.id);
    res.status(204).end();
  } catch (error) {
	if (error instanceof Error) {
	  res.status(400).json({ message: error.message });
	} else {
	  res.status(500).json({ message: 'An unknown error occurred' });
	}
  }
};
