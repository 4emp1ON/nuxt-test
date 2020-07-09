import { ApiUser } from '~/api/ApiUser';
import { ApiUserMock } from '~/api/ApiUserMock';
import { HttpClientAxios } from '~/api/HttpClientAxios';

const apiMap = {
  normal: {
    user: ApiUser,
  },
  mock: {
    user: ApiUserMock
  }
}

export default function ({ $axios, isMock = true }, inject) {
  const httpClient = new HttpClientAxios($axios);
  inject('api', {
    user: new apiMap[isMock ? 'mock' : 'normal'].user(httpClient),
  })
}