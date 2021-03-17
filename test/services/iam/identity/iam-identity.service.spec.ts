import {Container} from 'typescript-ioc';

import {IamIdentityService} from '../../../../src/services/iam/identity';
import {ApiServer} from '../../../../src/server';
import {buildApiServer} from '../../../helper';

describe('Hello World service', () =>{

  let app: ApiServer;
  let service: IamIdentityService;
  beforeAll(() => {
    app = buildApiServer();

    service = Container.get(IamIdentityService);
  });

  test('canary test verifies test infrastructure', () => {
    expect(service).not.toBeUndefined();
  });

  describe('Given getAuthToken()', () => {
    context('when "Juan" provided', () => {
      const apikey = 'Juan';
      test('then return error about invalid API Key', async () => {
        expect(await service.getAuthToken(apikey)).toHaveProperty('error.errorCode', "BXNIM0415E");
      });
    });

    context('when no name provided', () => {
      const emptyApiKey = '';
      test('then return the error "apikey either missing or empty"', async () => {
        expect(await service.getAuthToken(emptyApiKey)).toHaveProperty('error.errorCode', 'BXNIM0109E');
      });
    })
  });
});
