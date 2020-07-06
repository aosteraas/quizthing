import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ApiClient, Api } from '../api';

const mock = new MockAdapter(axios);

describe('ApiClient tests', () => {
  let api: Api = ApiClient;

  // beforeEach(() => {
  //   api = new ApiClient();
  // });

  afterEach(() => {
    mock.resetHistory();
  });

  test('get returning 200 to no base executes correctly', async () => {
    mock.onGet('/').reply(200);
    await api.get<any>('/');

    Object.entries(mock.history)
      .filter(([key, _]) => key !== 'get')
      .forEach(([_, val]) => {
        expect(val).toHaveLength(0);
      });

    expect(mock.history['get']).toHaveLength(1);
  });
});
