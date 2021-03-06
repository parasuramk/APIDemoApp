
module.exports = function(RefreshCache) {

/**
 * This Api will be used to refresh the cache
 * @param {string} Accept_Language List of acceptable human languages for response in ISO format
 * @param {string} uuid A 128 bit universally unique identifier (UUID) that you generate for every request and is used for tracking. It is recommended to use the output from Java UUID class or an equivalent
 * @param {string} citiUuid Unique UUID generated by APIM for every request
 * @param {string} sid User session Id
 * @param {string} Accept Content types that are acceptable for the response. Currently we support application/json
 * @param {string} Content_Type Content types that are acceptable for the request. Currently we support application/json. This is present only for PUT/POST Methods
 * @param {string} channelId Channel Id of the incoming request
 * @param {string} businessCode 3 character business code
 * @param {string} countryCode 2 character ISO format country code
 * @param {string} hostConnect AgentId, Agent access level (Only populated for IBS Assisted Channel), IBS Region, Customer Region; all values pipe delimited
 * @param {string} consumerOrgName Consumer dev org name defined in Gateway
 * @param {RefreshCacheRequest} refreshCacheRequest Request body for refresh the gemfire cache.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {any} result Result object
 */
RefreshCache.refershCache = function(Accept_Language, uuid, citiUuid, sid, Accept, Content_Type, channelId, businessCode, countryCode, hostConnect, consumerOrgName, refreshCacheRequest, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('<table><tr><td>Type</td><td>Code</td><td>Details</td><td>More Info</td></tr><tr> <td> error </td><td>invalidRequest</td> <td> Missing or invalid Parameters </td></tr></table>');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('<table><tr><td>Type</td><td>Code</td><td>Details</td><td>More Info</td></tr><tr><td>error</td><td>accessNotConfigured</td><td>The request operation is not configured to access this resource</td><td>Channel/Country/Business provided in the request is not supported currently</td></tr></table>');
  err1.statusCode = 403;
  return cb(err1);
  */ 
  /*
  var err2 = new Error('<table><tr><td>Type</td><td>Code</td><td>Details</td></tr><tr><td>error</td><td>resourceNotFound</td><td>The requested resource was not found</td></tr></table>');
  err2.statusCode = 404;
  return cb(err2);
  */ 
  /*
  var err3 = new Error('<table><tr><td>Type</td><td>Code</td><td>Details</td></tr><tr><td>fatal</td><td>serverUnavailable</td><td>The request failed due to an internal error/server unavailability</td></tr></table>');
  err3.statusCode = 500;
  return cb(err3);
  */ 
}




RefreshCache.remoteMethod('refershCache',
  {
  isStatic: true,
  accepts: [
    {
      arg: 'Accept-Language',
      type: 'string',
      description: 'List of acceptable human languages for response in ISO format',
      required: false,
      http: { source: 'header' }
    },
    {
      arg: 'uuid',
      type: 'string',
      description: 'A 128 bit universally unique identifier (UUID) that you generate for every request and is used for tracking. It is recommended to use the output from Java UUID class or an equivalent',
      required: true,
      http: { source: 'header' }
    },
    {
      arg: 'citiUuid',
      type: 'string',
      description: 'Unique UUID generated by APIM for every request',
      required: false,
      http: { source: 'header' }
    },
    {
      arg: 'sid',
      type: 'string',
      description: 'User session Id',
      required: false,
      http: { source: 'header' }
    },
    {
      arg: 'Accept',
      type: 'string',
      description: 'Content types that are acceptable for the response. Currently we support application/json',
      required: true,
      http: { source: 'header' }
    },
    {
      arg: 'Content-Type',
      type: 'string',
      description: 'Content types that are acceptable for the request. Currently we support application/json. This is present only for PUT/POST Methods',
      required: true,
      http: { source: 'header' }
    },
    {
      arg: 'channelId',
      type: 'string',
      description: 'Channel Id of the incoming request',
      required: true,
      http: { source: 'header' }
    },
    {
      arg: 'businessCode',
      type: 'string',
      description: '3 character business code',
      required: true,
      http: { source: 'header' }
    },
    {
      arg: 'countryCode',
      type: 'string',
      description: '2 character ISO format country code',
      required: true,
      http: { source: 'header' }
    },
    {
      arg: 'hostConnect',
      type: 'string',
      description: 'AgentId, Agent access level (Only populated for IBS Assisted Channel), IBS Region, Customer Region; all values pipe delimited',
      required: false,
      http: { source: 'header' }
    },
    {
      arg: 'consumerOrgName',
      type: 'string',
      description: 'Consumer dev org name defined in Gateway',
      required: false,
      http: { source: 'header' }
    },
    {
      arg: 'refreshCacheRequest',
      type: 'RefreshCacheRequest',
      description: 'Request body for refresh the gemfire cache.',
      required: undefined,
      http: { source: 'body' }
    }
  ],
  returns: [],
  http: {
    verb: 'put',
    path: '/crud/v1/na/creditCards/accounts/refreshCache'
  },
  description: 'This Api will be used to refresh the cache'
}
);

}
