 var conversion = require("phantom-html-to-pdf")({
     /* number of allocated phantomjs processes */
     numberOfWorkers: 2,
     /* timeout in ms for html conversion, when the timeout is reached, the phantom process is recycled */
     timeout: 5000,
     /* directory where are stored temporary html and pdf files, use something like npm package reaper to clean this up */
     tmpDir: "os/tmpdir",
     /* optional port range where to start phantomjs server */
     portLeftBoundary: 1000,
     portRightBoundary: 2000,
     /* optional hostname where to start phantomjs server */
     host: '127.0.0.1',
     /* use rather dedicated process for every phantom printing
       dedicated-process strategy is quite slower but can solve some bugs
       with corporate proxy */
     strategy: "phantom-server | dedicated-process",
     /* optional path to the phantomjs binary
        NOTE: When using phantomjs 2.0, be aware of https://github.com/ariya/phantomjs/issues/12685 */
     phantomPath: "{path to phantomjs}",
     /* the collected console.log messages are trimmed by default */
     maxLogEntrySize: 1000
 });

 conversion({

     url: "report.html", //set direct url instead of html 
     printDelay: 0, //time in ms to wait before printing into pdf 
     fitToPage: false, //whether to set zoom if contents don't fit on the page 
     customHeaders: [],
     cookies: [{
         name: 'cookie-name',
         value: 'cookie-value',
         path: '/',
         domain: '' //Leave blank when working on localhost - "." will get prepended to domain 
     }],
     injectJs: [], // injects javascript files in the page 
     settings: {
         javascriptEnabled: true,
         resourceTimeout: 1000
     },
     // see phantomjs docs - http://phantomjs.org/api/webpage/property/viewport-size.html 
     viewportSize: {
         width: 600,
         height: 600
     },
     format: {
         quality: 100
     }
 }, function(err, pdf) {
     console.log(pdf.logs);
     console.log(pdf.numberOfPages);
     pdf.stream.pipe(res);
 });