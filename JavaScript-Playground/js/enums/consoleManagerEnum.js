let consoleTitle = (title) => {
    return `<span class="${title.replace("_", '-').toLowerCase()}-title">${title.toUpperCase()}:</span>`
};


export const ConsoleTitles = {
    LOG: consoleTitle('LOG'),
    ERROR: consoleTitle('ERROR'),
    WARN: consoleTitle('WARN'),
    INFO: consoleTitle('INFO'),
    RESULT: consoleTitle('RESULT'),
    DEBUG: consoleTitle('DEBUG'),
    ASSERT: consoleTitle('ASSERT'),
    GROUP: consoleTitle('GROUP'),
    GROUP_END: consoleTitle('GROUP_END'),
    TABLE: consoleTitle('TABLE'),
    TIME: consoleTitle('TIME'),
    TIME_END: consoleTitle('TIME_END'),
    TRACE: consoleTitle('TRACE')
};
