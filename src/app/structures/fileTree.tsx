export interface FileNode {
    name: string;
    isDirectory: boolean;
    children?: FileNode[];
}

export function createFileNode(name: string, isDirectory: boolean, children: FileNode[] | undefined): FileNode {
    return {
        name,
        isDirectory,
        children
    }
}
export default createFileNode;