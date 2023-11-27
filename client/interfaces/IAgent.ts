export interface IRole {
	roleId: string;
	roleName: string;
	description: string;
	tasks: string[];
  }
  
  export interface IFunctionality {
	functionalityId: string;
	name: string;
	description: string;
  }
  
  export interface IIntegration {
	integrationId: string;
	service: string;
	usage: string;
  }
  
  export interface IUpdateLog {
	updateId: string;
	updateDate: Date;
	description: string;
  }
  
  export interface IAgent {
	_id: string;
	name: string;
	version: string;
	createdAt: Date;
	updatedAt: Date;
	roles: IRole[];
	capabilities: string[];
	functionalities: IFunctionality[];
	apiIntegrations: IIntegration[];
	communicationProtocols: string[];
	uiSupported: boolean;
	interactionModes: string[];
	authenticationRequired: boolean;
	dataPrivacyPolicies: string[];
	maintenanceSchedule: string;
	updateLogs: IUpdateLog[];
  }
  