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
  async getToken(@QueryParam('apikey') apikey: string): Promise<TokenResponse | {error: any}> {
    this.logger.info(`retrieving token for Api Key  ${apikey.substr(0,5)}******`);
    const retrievedData = await this.service.getAuthToken(apikey);
    console.log('the retrieved data is ' + JSON.stringify(retrievedData));
    return retrievedData;
  }
}
