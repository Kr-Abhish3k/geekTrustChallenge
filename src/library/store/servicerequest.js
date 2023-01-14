import request from 'library/js/request';
import { FETCH_DATA } from './constants';

/**
 *
 * @param {Object} options request options
 * @returns {Promise} response Promise
 */
const serviceRequest = (options = {}) => request.get(FETCH_DATA, options);
export default serviceRequest;
