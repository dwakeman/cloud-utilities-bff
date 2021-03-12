import {ContainerConfiguration, Scope} from 'typescript-ioc';
import {HelloWorldApi} from './hello-world.api';
import {HelloWorldService} from './hello-world.service';
import {IbmResourcesApi} from './ibm-resources.api';
import {IbmResourcesService} from './ibm-resources.service';

const config: ContainerConfiguration[] = [
  {
    bind: HelloWorldApi,
    to: HelloWorldService,
    scope: Scope.Singleton
  },
  {
    bind: IbmResourcesApi,
    to: IbmResourcesService,
    scope: Scope.Singleton
  },
];

export default config;