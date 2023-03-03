import axios from "axios";

import API from '../api'

jest.mock("axios");

describe('API', () => {
  it('Should get a list of files', async () => {
    const files = ["file1.csv", "file2.csv", "file3.csv"];

    axios.get.mockResolvedValueOnce({ data: { data: files, message: 'Ok' } });

    const { data } = await API.get('/files/list');

    expect(axios.get).toHaveBeenCalled();
    expect(data).toEqual(files);
  })
})