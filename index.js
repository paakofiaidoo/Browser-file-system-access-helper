// @ts-ignore
export const hasFileSystemAccess = () => !!window.showOpenFilePicker;

// Language: javascript

export async function getFile(options = {}) {
    if (hasFileSystemAccess()) {
        let [fileHandle] = await window.showOpenFilePicker(options);
        const file = await fileHandle.getFile();
        return file;
    }
}
