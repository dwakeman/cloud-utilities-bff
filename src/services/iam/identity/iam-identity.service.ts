import { IamIdentityApi, TokenResponse } from './iam-identity.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../../../logger';
import axios from 'axios';

export class IamIdentityService implements IamIdentityApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('IamIdentityService');
  }

//apiController.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_INSTANCE';

  async getAuthToken(apikey: string): Promise<TokenResponse | {error: any}> {


    this.logger.info(`Retrieving auth token`);

    return new Promise<TokenResponse | {error: any}>((resolve, reject) => {

      let url = `https://iam.cloud.ibm.com/identity/token?grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${apikey}`;

      axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.defaults.headers.common['Accept'] = 'application/json';

      axios.post(url)
        .then(response => {
          console.log('[iam-identity.service.ts] getAuthToken success for user' + response.data.ims_user_id);
          resolve(response.data)
        })
        .catch(err => {
          console.log('[iam-identity.service.ts] getAuthToken failed!');
          console.log('The error is: ' + JSON.stringify(err.response.data));
          console.log('getting ready to reject the promise.....');
          resolve({error: err.response.data});
        })

    })

  }
}
