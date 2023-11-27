// jest.setup.ts
import { MongoMemoryServer } from 'mongodb-memory-server';
import dotenv from 'dotenv';
mongoServer = await MongoMemoryServer.create();
process.env.MONGODB_URI = mongoServer.getUri();
dotenv.config({ path: '.env.test' });
let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  process.env.MONGODB_URI = mongoServer.getUri();
});

afterAll(async () => {
  if (mongoServer) {
    await mongoServer.stop();
  }
});
