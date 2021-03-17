import {Application} from 'express';
import { ApiServer } from 'src/server';
import * as request from 'supertest';

import {buildApiServer} from '../../../helper';

describe('ibm-resources.controller', () => {

  let app: Application;
  let apiServer: ApiServer;

  beforeEach(() => {
    apiServer = buildApiServer();

    app = apiServer.getApp();
  });




  test('canary validates test infrastructure', () => {
    expect(true).toBe(true);
  });

  describe('Given /resources', () => {
    test('should return 200 status', () => {
      return request(app).get('/resources').expect(200);
    });

  });

  describe('Given /resources/123456789', () => {
    test('should return 200 status', () => {
      return request(app).get('/resources/123456789').expect(200);
    });

  });


});
