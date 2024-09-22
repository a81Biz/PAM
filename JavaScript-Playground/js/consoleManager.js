import { ConsoleTitles } from './enums/consoleManagerEnum.js';
import { ElementIds } from './enums/indexEnum.js';

const ConsoleManager = () => {
    let _self = {};

    _self = {
        runCode: (code) => {
            const outputElement = document.getElementById(ElementIds.OUTPUT);
            outputElement.innerHTML = '';  // Clear previous output

            // Redirect console methods to the output div
            const originalConsoleLog = console.log;
            const originalConsoleError = console.error;
            const originalConsoleWarn = console.warn;
            const originalConsoleInfo = console.info;
            const originalConsoleDebug = console.debug;
            const originalConsoleAssert = console.assert;
            const originalConsoleGroup = console.group;
            const originalConsoleGroupEnd = console.groupEnd;
            const originalConsoleTable = console.table;
            const originalConsoleTime = console.time;
            const originalConsoleTimeEnd = console.timeEnd;
            const originalConsoleTrace = console.trace;
            const originalConsoleClear = console.clear;

            console.log = function(message) {
                outputElement.innerHTML += `${ConsoleTitles.LOG} ${message}<br>`;
                originalConsoleLog.apply(console, arguments);
            };

            console.error = function(message) {
                outputElement.innerHTML += `${ConsoleTitles.ERROR} ${message}<br>`;
                originalConsoleError.apply(console, arguments);
            };

            console.warn = function(message) {
                outputElement.innerHTML += `${ConsoleTitles.WARN} ${message}<br>`;
                originalConsoleWarn.apply(console, arguments);
            };

            console.info = function(message) {
                outputElement.innerHTML += `${ConsoleTitles.INFO} ${message}<br>`;
                originalConsoleInfo.apply(console, arguments);
            };

            console.debug = function(message) {
                outputElement.innerHTML += `${ConsoleTitles.DEBUG} ${message}<br>`;
                originalConsoleDebug.apply(console, arguments);
            };

            console.assert = function(assertion, message) {
                if (!assertion) {
                    outputElement.innerHTML += `${ConsoleTitles.ASSERT} ${message}<br>`;
                }
                originalConsoleAssert.apply(console, arguments);
            };

            console.group = function(message) {
                outputElement.innerHTML += `${ConsoleTitles.GROUP} ${message}<br>`;
                originalConsoleGroup.apply(console, arguments);
            };

            console.groupEnd = function() {
                outputElement.innerHTML += `${ConsoleTitles.GROUP_END}<br>`;
                originalConsoleGroupEnd.apply(console, arguments);
            };

            console.table = function(data) {
                outputElement.innerHTML += `${ConsoleTitles.TABLE} ${JSON.stringify(data)}<br>`;
                originalConsoleTable.apply(console, arguments);
            };

            console.time = function(label) {
                outputElement.innerHTML += `${ConsoleTitles.TIME} ${label}<br>`;
                originalConsoleTime.apply(console, arguments);
            };

            console.timeEnd = function(label) {
                outputElement.innerHTML += `${ConsoleTitles.TIME_END} ${label}<br>`;
                originalConsoleTimeEnd.apply(console, arguments);
            };

            console.trace = function(message) {
                outputElement.innerHTML += `${ConsoleTitles.TRACE} ${message}<br>`;
                originalConsoleTrace.apply(console, arguments);
            };

            console.clear = function() {
                outputElement.innerHTML = '';
                originalConsoleClear.apply(console, arguments);
            };

            let result;
            try {
                result = eval(code);
                if (result !== undefined) {
                    outputElement.innerHTML += `${ConsoleTitles.RESULT} ${result}<br>`;
                }
            } catch (e) {
                outputElement.innerHTML += `${ConsoleTitles.ERROR} ${e.message}<br>`;
            }

            // Restore original console methods
            console.log = originalConsoleLog;
            console.error = originalConsoleError;
            console.warn = originalConsoleWarn;
            console.info = originalConsoleInfo;
            console.debug = originalConsoleDebug;
            console.assert = originalConsoleAssert;
            console.group = originalConsoleGroup;
            console.groupEnd = originalConsoleGroupEnd;
            console.table = originalConsoleTable;
            console.time = originalConsoleTime;
            console.timeEnd = originalConsoleTimeEnd;
            console.trace = originalConsoleTrace;
            console.clear = originalConsoleClear;
        },

        clearOutput: () => {
            document.getElementById(ElementIds.OUTPUT).innerText = '';
        }
    };

    return _self;
};

export default ConsoleManager;
