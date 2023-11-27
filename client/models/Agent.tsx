import mongoose from 'mongoose';
import { IAgent } from '../interfaces/IAgent'; // Assume interfaces are in a separate file

const roleSchema = new mongoose.Schema({
  roleId: mongoose.Schema.Types.ObjectId,
  roleName: String,
  description: String,
  tasks: [String]
});

const functionalitySchema = new mongoose.Schema({
  functionalityId: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String
});

const integrationSchema = new mongoose.Schema({
  integrationId: mongoose.Schema.Types.ObjectId,
  service: String,
  usage: String
});

const updateLogSchema = new mongoose.Schema({
  updateId: mongoose.Schema.Types.ObjectId,
  updateDate: Date,
  description: String
});

const agentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  version: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  roles: [roleSchema],
  capabilities: [String],
  functionalities: [functionalitySchema],
  apiIntegrations: [integrationSchema],
  communicationProtocols: [String],
  uiSupported: Boolean,
  interactionModes: [String],
  authenticationRequired: Boolean,
  dataPrivacyPolicies: [String],
  maintenanceSchedule: String,
  updateLogs: [updateLogSchema]
});

const Agent = mongoose.model<IAgent>('Agent', agentSchema);

export default Agent;
