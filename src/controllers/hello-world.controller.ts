import {GET, Path, PathParam} from 'typescript-rest';
import {Inject} from 'typescript-ioc';
import {HelloWorldApi} from '../services';
import {LoggerApi} from '../logger';

@Path('/hello')
export class HelloWorldController {

  @Inject
  service: HelloWorldApi;
  @Inject
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child('HelloWorldController');
  }

  @GET
  async sayHelloToUnknownUser(): Promise<string> {
    this.logger.info('Saying hello to someone');
    return this.service.greeting();
  }

  @Path('/json') //<-- full path ends up being '/hello/json'.  actually, it doesn't!  It things json is a name parameter.
  @GET
  async sayHelloWithJson(): Promise<{message: string}> {
    this.logger.info('Saying hello to someone using JSON payload');
    return this.service.greetingJson();
  }

  @Path('/users/:name')
  @GET
  async sayHello(@PathParam('name') name: string): Promise<string> {
    this.logger.info(`Saying hello to ${name}`);
    return this.service.greeting(name);
  }
}
