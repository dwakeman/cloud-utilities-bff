import { Container } from "typescript-ioc";

export * from './ibm-resources.api';
export * from './ibm-resources.service';

import config from './ioc.config';

Container.configure(...config);