import { createAgent, getAllAgents } from './agentControllers';
import dbConnect from '../lib/mongodb';
import Agent from '../models/Agent';

// Mock data for testing
const mockAgentData = {
  name: 'Test Agent',
  version: '1.0',
  // ... other necessary fields
};

beforeAll(async () => {
  await dbConnect();
});

// Tests for createAgent
describe('createAgent', () => {
  it('should create a new agent', async () => {
    const req = {
      body: mockAgentData,
    } as any; // Mocking NextApiRequest
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    } as any; // Mocking NextApiResponse

    await createAgent(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      name: 'Test Agent',
      version: '1.0',
    }));
  });
});

// ... other tests
