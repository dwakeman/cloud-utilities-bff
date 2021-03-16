import {POST, Path, QueryParam} from 'typescript-rest';
import {Inject} from 'typescript-ioc';
import {IamIdentityApi, TokenResponse} from '../../../services/iam/identity';
import {LoggerApi} from '../../../logger';

@Path('/identity')
export class IamIdentityController {

  @Inject
  service: IamIdentityApi;
  @Inject
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child('IbmResourcesController');
  }

  @Path('/token') 
  @POST
  async getToken(@QueryParam('apikey') apikey: string): Promise<TokenResponse> {
    this.logger.info(`retrieving resource ${apikey}`);
    return this.service.getAuthToken(apikey);
  }
}
