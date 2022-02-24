import got, { Got } from 'got';
import { nanoid } from 'nanoid';

export class Requester {
  private requester: Got;

  constructor(url: string) {
    this.requester = got.extend({ prefixUrl: url });
  }

  public async get(path?: string): Promise<unknown> {
    try {
      const response = await this.requester.get(path || '').json();
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(new Error(error.message));
    }
  }

  public async post(payload: Record<string, any>): Promise<unknown> {
    try {
      const id = nanoid();
      payload['id'] = id;
      const response = await this.requester.post({ json: payload }).json();
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(new Error(error.message));
    }
  }
}
