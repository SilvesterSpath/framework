import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';

export class Sync {
  constructor(public rootUrl: string) {}

  async fetch(id: number | string): AxiosPromise {
    return await axios.get(`${this.rootUrl}/${id}`);
  }

  // we should return the data to be able to know the save has happened
  save(data: UserProps): AxiosPromise {
    const { id } = data;

    if (id) {
      // put request
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // post request
      return axios.post(this.rootUrl, data);
    }
  }
}
