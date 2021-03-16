import {GET, Path, PathParam} from 'typescript-rest';
import {Inject} from 'typescript-ioc';
import {IbmResourcesApi, ResourceInstancesList, ResourceInstance} from '../../../services/ibm/ResourceController';
import {LoggerApi} from '../../../logger';

@Path('/resources')
export class IbmResourcesController {

  @Inject
  service: IbmResourcesApi;
  @Inject
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child('IbmResourcesController');
  }

  @GET
  async getResources(): Promise<ResourceInstancesList> {
    this.logger.info('Saying hello to someone');
    return this.service.getResources();
  }

  @Path(':id') 
  @GET
  async sayHello(@PathParam('id') id: string): Promise<ResourceInstance> {
    this.logger.info(`retrieving resource ${id}`);
    return this.service.getResourceInstance(id);
  }
}
