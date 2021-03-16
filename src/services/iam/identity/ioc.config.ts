import {ContainerConfiguration, Scope} from 'typescript-ioc';
import {IamIdentityApi} from './iam-identity.api';
import {IamIdentityService} from './iam-identity.service';

const config: ContainerConfiguration[] = [
  {
    bind: IamIdentityApi,
    to: IamIdentityService,
    scope: Scope.Singleton
  }
];

export default config;