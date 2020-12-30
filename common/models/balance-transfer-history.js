
module.exports = function(BalanceTransferHistory) {

/**
 * API to get the BalanceTransferHistory 
 * @param {string} uuid 128 bit UUID that you generate for every request
 * @param {string} citiuuid Unique UUID generated by APIM for every request
 * @param {string} sid User session id
 * @param {string} Accept Content-Types that are acceptable for the response
 * @param {string} channelId Channel ID used by the user
 * @param {string} businessCode Business Code
 * @param {string} countryCode Country code in 2 character ISO 3166 format
 * @param {string} hostConnect AgentId, Agent access level (Only populated for IBS Assisted Channel), IBS Region, Customer Region; all values pipe delimited
 * @param {BalanceTransferHistoryRequest} BalanceTransferHistoryRequest Balance Transfer History Request
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {BalanceTransferHistoryResponse} result Result object
 */
BalanceTransferHistory.getAllBalanceTransferHistory = function(uuid, citiuuid, sid, Accept, channelId, businessCode, countryCode, hostConnect, BalanceTransferHistoryRequest, callback) {

  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
  /*
  var err0 = new Error('<table><tr><td>Type</td><td>Code</td><td>Details</td></tr><tr><td>error</td><td>invalidRequest</td><td>Missing or invalid Parameters</td></tr></table>');
  err0.statusCode = 400;
  return cb(err0);
  */ 
  /*
  var err1 = new Error('<table><tr><td>Type</td><td>Code</td><td>Details</td></tr><tr><td>error</td><td>unAuthorized</td><td>Authorization credentials are missing or invalid </td></tr></table> ');
  err1.statusCode = 401;
  return cb(err1);
  */ 
  /*
  var err2 = new Error('<table><tr><td>Type</td><td>Code</td><td>Details</td><td>More Info</td></tr><tr><td>error</td><td>accessNotConfigured</td><td>The request operation is not configured to access this resource</td><td>Channel/Country/Business provided in the request is not supported currently</td></tr></table>');
  err2.statusCode = 403;
  return cb(err2);
  */ 
  /*
  var err3 = new Error('<table><tr><td>Type</td><td>Code</td><td>Details</td><td>More Info</td></tr><tr><td>error</td><td>resourceNotFound</td><td>The requested resource was not found</td><td>Empty resource/resource not found</td></tr></table>');
  err3.statusCode = 404;
  return cb(err3);
  */ 
  /*
  var err4 = new Error('<table><tr><td>Type</td><td>Code</td><td>Details</td></tr><tr><td>fatal</td><td>serverUnavailable</td><td>The request failed due to an internal error </td></tr></table> ');
  err4.statusCode = 500;
  return cb(err4);
  */ 
}




BalanceTransferHistory.remoteMethod('getAllBalanceTransferHistory',
  {
  isStatic: true,
  consumes: [ 'application/json' ],
  produces: [ 'application/json' ],
  accepts: [
    {
      arg: 'uuid',
      type: 'string',
      description: '128 bit UUID that you generate for every request',
      required: true,
      http: { source: 'header' }
    },
    {
      arg: 'citiuuid',
      type: 'string',
      description: 'Unique UUID generated by APIM for every request',
      required: true,
      http: { source: 'header' }
    },
    {
      arg: 'sid',
      type: 'string',
      description: 'User session id',
      required: undefined,
      http: { source: 'header' }
    },
    {
      arg: 'Accept',
      type: 'string',
      description: 'Content-Types that are acceptable for the response',
      required: true,
      http: { source: 'header' }
    },
    {
      arg: 'channelId',
      type: 'string',
      description: 'Channel ID used by the user',
      required: true,
      http: { source: 'header' }
    },
    {
      arg: 'businessCode',
      type: 'string',
      description: 'Business Code',
      required: true,
      http: { source: 'header' }
    },
    {
      arg: 'countryCode',
      type: 'string',
      description: 'Country code in 2 character ISO 3166 format',
      required: true,
      http: { source: 'header' }
    },
    {
      arg: 'hostConnect',
      type: 'string',
      description: 'AgentId, Agent access level (Only populated for IBS Assisted Channel), IBS Region, Customer Region; all values pipe delimited',
      required: undefined,
      http: { source: 'header' }
    },
    {
      arg: 'BalanceTransferHistoryRequest',
      type: 'BalanceTransferHistoryRequest',
      description: 'Balance Transfer History Request',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      description: 'Successful operation.',
      type: 'BalanceTransferHistoryResponse',
      arg: 'data',
      root: true
    }
  ],
  http: {
    verb: 'post',
    path: '/crud/v1/na/creditCards/accounts/balanceTransferHistory'
  },
  description: 'API to get the BalanceTransferHistory '
}
);

}