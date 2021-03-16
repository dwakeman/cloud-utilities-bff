import {ContainerConfiguration, Scope} from 'typescript-ioc';
import {IbmResourcesApi} from './ibm-resources.api';
import {IbmResourcesService} from './ibm-resources.service';

const config: ContainerConfiguration[] = [
  {
    bind: IbmResourcesApi,
    to: IbmResourcesService,
    scope: Scope.Singleton
  },
];

export default config;