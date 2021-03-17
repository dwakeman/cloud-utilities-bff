import {Application} from 'express';
import { ApiServer } from 'src/server';
import * as request from 'supertest';

import {buildApiServer} from '../../../helper';

describe('iam-identity.controller', () => {

  let app: Application;
  let apiServer: ApiServer;

  beforeEach(() => {
    apiServer = buildApiServer();

    app = apiServer.getApp();
  });




  test('canary validates test infrastructure', () => {
    expect(true).toBe(true);
  });

  describe('Given /identity/token', () => {
    test('should return 200 status', () => {
      return request(app).post('/identity/token?apikey=ffdsfasfsaf').expect(200);
    });

  });

});
