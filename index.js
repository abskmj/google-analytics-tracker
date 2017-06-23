var promise = require('bluebird');
var request = promise.promisify(require('request'));
var queryString = require('querystring');

module.exports = function (options) {
    var baseUrl = 'https://www.google-analytics.com';

    // validate options
    if (options) {
        if (options.debug) {
            baseUrl += '/debug';
        }
    }

    else {
        throw new Error('Please set required options');
    }


    function trackEvent(event, override, callback) {
        var data = {
            v: 1,
            tid: options.trackingId,
            cid: 'cid',
            t: 'event',
            ec: event.category,
            ea: event.action,
            el: event.label,
            ev: event.value
        }

        if (override) {
            if (override instanceof Function) {
                callback = override;
            }
            else {
                data['uip'] = override.ip;
                data['ua'] = override.userAgent;
            }
        }

        return request({
            baseUrl: baseUrl,
            uri: '/collect',
            body: queryString.stringify(JSON.parse(JSON.stringify(data))),
            method: 'POST'
        }).then(function (response) {
            return promise.resolve(response).asCallback(callback);
        }).catch(function (error) {
            return promise.reject(error).asCallback(callback);
        });
    }

    return {
        trackEvent: trackEvent
    }
}