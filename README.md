# Background Service Runner
- - -

A daemon runner utility for node, python, shell and other executable services.  Can be configured to run a monitored or detached child process or groups of processes.

## Overview

Background Service Runner provides support for running executables in the background as detached, independent processes or as fully monitored child processes.  The typical use case is to create a short script to run a longer running service like an HTTP web service.  It can also be used to start and stop groups of services with a single script.

## Installation

	npm install background-service-runner --save

## Use

The following demonstrates a minimal run script that runs a job as a detached script.

    var runner = require('background-service-runner').createDaemonRunner(),
        command = __dirname + '/Job.js',
        child = runner.start( command );
        
    console.log('pid: ', child.pid);

## Examples

There is a test runner and executable in the examples directory.  Invoke the test runner and observe the log file examples/job.log to see its entries.

## Tests

Unit tests written in mocha/chai/should and run using grunt.  All code tested with jshint.  

	make test
	
	- or -
	
	make watch
	
## Mocks

The project exposes two mocks for testing.

* MockSpawn
* MockChild

_Note: works in linux/unix but probably not in windows._

- - -
<p><small><em>Copyright © 2014, rain city software | Version 0.90.13</em></small></p>
