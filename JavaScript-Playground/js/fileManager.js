const FileManager = (editor) => {
    let _self = {};

    _self = {
        saveCode: () => {
            const code = editor.getValue();
            const blob = new Blob([code], { type: 'text/javascript' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'code.js';
            a.click();
            URL.revokeObjectURL(url);
        }
    };

    return _self;
};

export default FileManager;
