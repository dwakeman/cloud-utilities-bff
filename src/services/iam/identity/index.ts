import { Container } from "typescript-ioc";

export * from './iam-identity.api';
export * from './iam-identity.service';

import config from './ioc.config';

Container.configure(...config);