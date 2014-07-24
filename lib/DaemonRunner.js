/**
 * @class DaemonRunner
 *
 * @author: darryl.west@roundpeg.com
 * @created: 7/24/14 9:14 AM
 */
var DaemonRunner = function(options) {
    'use strict';

    var runner = this,
        log = options.log;

    this.start = function(command, opts) {
        log.info('start the script: ', command);

    };

    this.stop = function(pid) {
        log.info('kill the process: ', pid);

    };

    // constructor validations
    if (!log) throw new Error('socket server must be constructed with a log');
};

module.exports = DaemonRunner;
