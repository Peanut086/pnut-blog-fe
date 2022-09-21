import {PnutAxiosClass} from './pnutAxiosClass';
import {BASE_URL, TIME_OUT} from "./config";

const PnutAxiosInstance = new PnutAxiosClass({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {}
})
export default PnutAxiosInstance;
