import MonacoEditor from './monacoEditor.js';
import Editor from './editor.js';
import ConsoleManager from './consoleManager.js';
import FileManager from './fileManager.js';
import { ElementIds, EventListeners } from './enums/indexEnum.js';

const init = () => {
    const monacoEditor = MonacoEditor();
    monacoEditor.init();

    const editor = Editor();
    editor.init();

    const consoleManager = ConsoleManager();
    const fileManager = FileManager(editor);

    document.getElementById(ElementIds.RUN_BUTTON).addEventListener(EventListeners.RUN, () => {
        consoleManager.runCode(editor.getValue());
    });

    document.getElementById(ElementIds.CLEAR_BUTTON).addEventListener(EventListeners.CLEAR, () => {
        consoleManager.clearOutput();
    });

    document.getElementById(ElementIds.SAVE_BUTTON).addEventListener(EventListeners.SAVE, () => {
        fileManager.saveCode();
    });
};

window.addEventListener('load', init);
