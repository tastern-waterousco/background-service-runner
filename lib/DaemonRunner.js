/**
 * @class DaemonRunner
 *
 * @author: darryl.west@roundpeg.com
 * @created: 7/24/14 9:14 AM
 */
var dash = require('lodash' ),
    fs = require('fs');

var DaemonRunner = function(options) {
    'use strict';

    var runner = this,
        log = options.log,
        spawn = options.spawn || require( 'child_process' ).spawn,
        stdio = options.stdio || [ 'ignore', 'ignore', 'ignore' ],
        cwd = options.pwd || process.cwd;

    /**
     * start the background process.  command must be the full path to the executable.  if it's a node
     * script it must be self-executing (#!/usr/bin/env node).
     *
     * @param command - full path to the executable
     * @param args - optional arguments
     * @param opts - options options for stdio, pwd, env, etc
     * @returns child
     */
    this.start = function(command, args, opts) {
        var child;

        if (!runner.verifyCommandFile( command )) {
            log.error('command is not found: ', command);
            return null;
        }

        if (!opts) {
            opts = {};
        }

        if (!args) {
            args = [];
        }

        log.info('start the script: ', command, ', args: ', opts.args);

        if (!opts.cwd) {
            opts.cwd = cwd;
        }

        if (!opts.stdio) {
            opts.stdio = stdio;
        }

        if (!opts.env) {
            opts.env = process.env;
        }

        opts.detached = true;

        log.debug('opts: ', opts );

        child = spawn( command, args, opts );

        return child;
    };

    /**
     * verify the executable file
     *
     * @param file - full path to the executable
     * @returns true if the file exists
     */
    this.verifyCommandFile = function(file) {
        var exists = fs.existsSync( file );
        log.debug( 'file: ', file, ' exists? ', exists);

        return exists;
    };

    /**
     *
     * @param pid
     */
    this.stop = function(pid) {
        log.info('kill the process: ', pid);

    };

    this.__protected = function() {
        return {
            stdio:stdio,
            cwd:cwd
        };
    };

    // constructor validations
    if (!log) throw new Error('socket server must be constructed with a log');
};

DaemonRunner.createDaemonRunner = function(opts) {
    'use strict';

    if (!opts) {
        opts = {};
    }

    if (!opts.log) {
        opts.log = require('simple-node-logger' ).createSimpleLogger();
    }

    return new DaemonRunner( opts );
};

module.exports = DaemonRunner;
