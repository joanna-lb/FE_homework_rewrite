import axios from 'axios';
import {BASE_URL, fetchAgents, updateResourceAction} from '../src/server/server'


jest.mock('axios')


describe('agents request', () => {
  test('should fetch agent list', () => {
    fetchAgents()
    expect(axios.get).toHaveBeenCalledWith(BASE_URL)
  })

  test('should patch request when call updateResourceAction ', () => {

    const mockId = 1;
    const mockResources = [
      "Firefox",
      "Safari",
      "Ubuntu",
      "Chrome"]

    updateResourceAction(mockId, mockResources)
    expect(axios.patch).toHaveBeenCalled()
  })
});
