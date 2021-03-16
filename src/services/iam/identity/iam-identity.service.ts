import { IamIdentityApi, TokenResponse } from './iam-identity.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../../../logger';

export class IamIdentityService implements IamIdentityApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('IamIdentityService');
  }



  async getAuthToken(apikey: string): Promise<TokenResponse> {

    const testResponse = {
      "access_token": "fake_tYW5AdXMuaWJtLmNvbSIsImlhbV9pZCI6ImlhbS0xMTAwMDBKNlZBIiwibmFtZSI6IkRhdmUgV2FrZW1hbiIsImdpdmVuX25hbWUiOiJEYXZlIiwiZmFtaWx5X25hbWUiOiJXYWtlbWFuIiwiZW1haWwiOiJkd2FrZW1hbkB1cy5pYm0uY29tIn0sImFjY291bnQiOnsidmFsaWQiOnRydWUsImJzcyI6IjlkNWQ1MjhhYTc4NmFmMDFjZTk5NTkzYTgyN2NkNjhhIiwiaW1zX3VzZXJfaWQiOiI3MDIwMDU5IiwiZnJvemVuIjp0cnVlLCJpbXMiOiIxNTc4MDg1In0sImlhdCI6MTYxNTg1MjE1NywiZXhwIjoxNjE1ODU1NzU3LCJpc3MiOiJodHRwczovL2lhbS5jbG91ZC5pYm0uY29tL2lkZW50aXR5IiwiZ3JhbnRfdHlwZSI6InVybjppYm06cGFyYW1zOm9hdXRoOmdyYW50LXR5cGU6YXBpa2V5Iiwic2NvcGUiOiJpYm0gb3BlbmlkIiwiY2xpZW50X2lkIjoiZGVmYXVsdCIsImFjciI6MSwiYW1yIjpbInB3ZCJdfQ.ECjfBMqUuteFt9_8DPYiho1Hyjoyh6W3oug90mWmIrBI-iDE1pl4NfEKbuVZO0kLSUO1cIJbtFifB8q0t8utQ_G76nvTT9NFDWpSsj71hEUnWA9hoeFV6fue8ckeyPiRjL4GzmArHkf0_JRfWnmr1xsc7NphxFQcrhvUARdfuZ52Dhi3kWecRO5pv7ourTgjg-h7CGqGXTaSAWWI8D7VPJDIG-QR9Y8Ty7V5ho1UduIkTGKg91mI_p3C2OUSKgHFv6SCfkONt7eYNFEzFLdqgbsimLbfwx5k9I3PNo2PksjMNkciuY86Y4ZSl81FEx7LPKR6u17hIFsKL5I6nKsPsQ",
      "refresh_token": "not_supported",
      "ims_user_id": 7020059,
      "token_type": "Bearer",
      "expires_in": 3600,
      "expiration": 1615855757,
      "scope": "ibm openid"
  }
    

    this.logger.info(`Retrieving auth token`);
    return testResponse;
  }
}
