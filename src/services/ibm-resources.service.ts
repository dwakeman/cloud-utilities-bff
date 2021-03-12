import {IbmResourcesApi, ResourceInstance, ResourceInstancesList} from './ibm-resources.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';
import * as mockResources from './data/ibmResources.json';
import * as mockResource from './data/mock-resource.json'


export class IbmResourcesService implements IbmResourcesApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('IbmResourcesService');
  }


  async getResources(): Promise<ResourceInstancesList> {

    

    this.logger.info('Retrieving resource instances');
    return mockResources;
  }

  async getResourceInstance(id: string): Promise<ResourceInstance> {

    

    this.logger.info(`Retrieving resource with id ${id}`);
    return mockResource;
  }
}
