export abstract class HelloWorldApi {
  abstract greeting(name?: string): Promise<string>;
  abstract greetingJson(): Promise<{message: string}>;
}
