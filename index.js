import { get, set } from 'idb-keyval';

export const hasFileSystemAccess = () => !!window || !!window.showOpenFilePicker;

// Language: javascript

export async function getFile(options = {}) {
    if (hasFileSystemAccess()) {
        const [fileHandle] = await window.showOpenFilePicker(options);
        return file(fileHandle);
    }
}

export const file = async (fileHandle) => {
    const file = await fileHandle.getFile();
    return {
        // fileHandle,
        name: fileHandle.name,
        kind: fileHandle.kind,
        size: file.size,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        text: () => {
            return file.text();
        },
        stream: () => {
            return file.stream();
        },
        arrayBuffer: () => {
            return file.arrayBuffer();
        },
        // writeIn is to allow the user to write in the file
        write: async (data) => {
            // await stream . write({ type: "write", position: position, data: data })
            const writableStream = await fileHandle.createWritable();
            await writableStream.write(data);
            await writableStream.close();
        },
        seek: async (position) => {
            const writableStream = await fileHandle.createWritable();
            await writableStream.seek(position);
            await writableStream.close();
        },
        truncate: async (size) => {
            const writableStream = await fileHandle.createWritable();
            await writableStream.truncate(size);
            await writableStream.close();
        },
    };
};

//create a file
export async function createFile(options = {}) {
    let opt = {
        types: [
            {
                description: "Text Files",
                accept: {
                    "text/plain": [".txt"],
                },
            },
        ],
        ...options,
    };
    if (hasFileSystemAccess()) {
        const fileHandle = await window.showSaveFilePicker(opt);
        // const file = await fileHandle.createFile();
        return file(fileHandle);
    }
}

export async function getDirectories(options = {}) {
    if (hasFileSystemAccess()) {
        let [fileHandle] = await window.showOpenFilePicker(options);
        return {
            // fileHandle,
            file: await fileHandle.getFile(),
            kind: fileHandle.kind,
            // writeIn is to allow the user to write in the file
            write: async (input) => {
                const writableStream = await fileHandle.createWritable();
                await writableStream.write(input);
                await writableStream.close();
            },
            name: fileHandle.name,
        };
    }
}
