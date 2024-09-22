import { EditorDefaults, Paths } from './enums/editorEnum.js';
import { ElementIds, Uri } from './enums/indexEnum.js';

const MonacoEditor = () => {
    let _self = {};

    let init = () => {

        window.MonacoEnvironment = {
            baseUrl: Uri.URLBASE
        };

        require.config({
            baseUrl: window.MonacoEnvironment.baseUrl,
            paths: {  [Paths.VS.KEY] : Paths.VS.VALUE}
        });

        require([Paths.EDITOR_MAIN], function () {
            monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);

            monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
                target: monaco.languages.typescript.ScriptTarget.ES6,
                allowNonTsExtensions: true
            });

            monaco.languages.typescript.javascriptDefaults.addExtraLib(`
                declare var console: {
                    log(message?: any): void;
                    error(message?: any): void;
                    warn(message?: any): void;
                    info(message?: any): void;
                };
            `, 'ts:filename/console.d.ts'); 
        });
    }
        
    _self = {
        init: init
    };

    return _self;
};

export default MonacoEditor;
