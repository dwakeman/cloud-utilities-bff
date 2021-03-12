import { Container } from "typescript-ioc";

export * from './hello-world.api';
export * from './hello-world.service';

export * from './ibm-resources.api';
export * from './ibm-resources.service';

import config from './ioc.config';

Container.configure(...config);