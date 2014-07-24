#!/usr/bin/env node

var runner = require('../lib/DaemonRunner').createDaemonRunner(),
    command = __dirname + '/TestJob.js',
    child = runner.start( command, [ 'foo', 'bar' ]);

setTimeout(function() {
    // console.log( child );
    console.log('running pid: ', child.pid );
    console.log('child log file is in ', __dirname + '/job.log' );

    process.exit();
}, 500);

