import axios, { AxiosPromise } from 'axios';

// with this interface we can define the properties of <T>
interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  async fetch(id: number): AxiosPromise {
    return await axios.get(`${this.rootUrl}/${id}`);
  }

  // generic types values are hard to define
  save(data: T): AxiosPromise {
    const { id } = data;

    // we should return the data to be able to know the save has happened
    if (id) {
      // put request
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // post request
      return axios.post(this.rootUrl, data);
    }
  }
}
