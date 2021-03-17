import {Container} from 'typescript-ioc';
import { ResourceInstancesList  } from '../../../../src/services/ibm/ResourceController/ibm-resources.api'
import {IbmResourcesService} from '../../../../src/services/ibm/ResourceController';
import {ApiServer} from '../../../../src/server';
import {buildApiServer} from '../../../helper';

describe('Resource Controller service', () =>{

  let app: ApiServer;
  let service: IbmResourcesService;
  beforeAll(() => {
    app = buildApiServer();

    service = Container.get(IbmResourcesService);
  });

  test('canary test verifies test infrastructure', () => {
    expect(service).not.toBeUndefined();
  });

  describe('Given getResources()', () => {
    context('when retrieving all resources', () => {
      //const apikey = 'Juan';

      const resources: ResourceInstancesList = {
        next_url: "",
        resources: [],
        rows_count: 0
      }

      test('then return a ResourceInstancesList', async () => {
        expect(await service.getResources()).toHaveProperty('next_url');
      });
    });
  });

  describe('Given getResource()', () => {
    context('when retrieving a single resource', () => {
      let id = '123456789';


      test('then return a ResourceInstance', async () => {
        expect(await service.getResourceInstance(id)).toHaveProperty('guid');
      });
    });
  });

});
