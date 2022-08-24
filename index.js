export const hasFileSystemAccess = () => !!window.showOpenFilePicker;

// Language: javascript

export async function getFile(options = {}) {
    if (hasFileSystemAccess()) {
        let [fileHandle] = await window.showOpenFilePicker(options);
        return { fileHandle, file: await fileHandle.getFile(), kind: fileHandle.kind, writeTo: await fileHandle.createWritable, moveTo: await fileHandle.move, name: fileHandle.name };
    }
}
