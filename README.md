# Background Service Runner
- - -

A daemon runner utility for node and shell script services.

## Overview

## Installation

	npm install background-service-runner --save

## Use

    var runner = require('background-service-runner').createDaemonRunner(),
        command = __dirname + '/Job.js',
        pid = runner.start( command );

## Examples

## Tests

- - -
<p><small><em>Copyright © 2014, rain city software | Version 0.90.10</em></small></p>
