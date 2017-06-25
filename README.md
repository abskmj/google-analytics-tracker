# Google Analytics Tracker for Nodejs

This has a functionality to pass client details to GA server for geographic and other demographics.

```
         client ip & ua                 client ip & ua
CLIENT ------------------ NODE SERVER ------------------- GA SERVER

```

## Traditional Server side GA trackers

```
         client ip & ua                 server ip & ua
CLIENT ------------------ NODE SERVER ------------------- GA SERVER

```

All the tracking requests to GA server is via node server. Hence, geographic demograhics will have server details only.

# Example

```javascript
var options = {
    debug: true
};

var tracker = require('@abskmj/google-analytics-tracker')('UA-XXXXXXXX-X', options);

var event = {
    category: 'click',
    action: 'search',
    label: 'google',
    value: 10
};

var override = {
    ip: '2XX.X.1X3.X'
};

tracker.trackEvent(event, override, function (error, response) {
    console.log(response.body);
});
```