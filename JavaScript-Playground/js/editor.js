import { EditorDefaults, Paths } from './enums/editorEnum.js';
import { ElementIds } from './enums/indexEnum.js';

const Editor = () => {
    let _self = {};

    let init = () => {
        require([Paths.EDITOR_MAIN], function () {
            window.editor = monaco.editor.create(document.getElementById(ElementIds.EDITOR_CONTAINER), {
                value: EditorDefaults.INITIAL_CONTENT,
                language: EditorDefaults.LANGUAGE,
                theme: EditorDefaults.THEME,
                automaticLayout: true
            });
        });
    };

    let getValue = () => {
            return window.editor.getValue();
        }

    _self = {

        init : init,        

        getValue: getValue
    };

    return _self;
};

export default Editor;
