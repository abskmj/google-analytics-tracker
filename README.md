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
var GA = require('./index');

var ga = new GA({
    debug: true,
    trackingId: 'UA-xxxxxxx-x'
});

ga.trackEvent({
    category: 'click',
    action: 'search',
    label: 'google',
    value: 10
},
{
    ip: '2xx.x.1x3.x'
},
function (error, response) {
    console.log('===CALLBACK===');
    console.log(response.body);
});
```