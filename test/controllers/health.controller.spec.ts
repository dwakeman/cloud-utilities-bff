import {Application} from 'express';
import { ApiServer } from 'src/server';
import * as request from 'supertest';

import {buildApiServer} from '../helper';

describe('health.controller', () => {

  let app: Application;
  let apiServer: ApiServer;

  beforeEach(() => {
    apiServer = buildApiServer();

    app = apiServer.getApp();
  });

  // Dave added this code to try and fix the Jest error about not exiting after 1 second.  It doesn't help :-(
  afterEach(async done => {
    await apiServer.stop();
    done();
});


  test('canary validates test infrastructure', () => {
    expect(true).toBe(true);
  });

  describe('Given /health', () => {
    test('should return 200 status', () => {
      return request(app).get('/health').expect(200);
    });

    test('should return {status: "UP:}', () => {
      return request(app).get('/health').expect({status: 'UP'});
    });
  });

});
