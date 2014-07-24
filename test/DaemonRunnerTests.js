/**
 * @class DaemonRunnerTests
 *
 * @author: darryl.west@roundpeg.com
 * @created: 7/24/14 9:15 AM
 */
var should = require('chai').should(),
    dash = require('lodash'),
    log = require('simple-node-logger' ).createSimpleLogger(),
    DaemonRunner = require('../lib/DaemonRunner');

describe('DaemonRunner', function() {
    'use strict';

    var createOptions = function() {
        var opts = {};

        opts.log = log;

        return opts;
    };

    describe('#instance', function() {
        var runner = new DaemonRunner( createOptions() ),
            methods = [
                'start',
                'stop'
            ];

        it('should be an instance of DaemonRunner', function() {
            should.exist( runner );

            runner.should.be.instanceof( DaemonRunner );
        });

        it('should have all known methods by size and type', function() {
            dash.methods( runner ).length.should.equal( methods.length );

            methods.forEach(function(method) {
                runner[ method ].should.be.a('function');
            });
        });
    });
});