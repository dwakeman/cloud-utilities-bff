export type TokenResponse = {
  access_token: string;
  refresh_token?: string;
  delegated_refresh_token?: string;
  token_type: string;
  expires_in: number;
  expiration: number;
}

export abstract class IamIdentityApi {
  abstract getAuthToken(apikey: string): Promise<TokenResponse | {error: any}>;
  

}