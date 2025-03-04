export type TrieNode = {
    children: { [key: string]: TrieNode};
    isEndOfWord: boolean;
}

export const createTrieNode = (): TrieNode => {
    return {
        children: {},
        isEndOfWord: false
    };
};

export type Trie = {
    root: TrieNode;
    insert: (word: string) => void;
    getWordsWithPrefix: (prefix: string) => string[];
}

export const createTrie = (): Trie => {
    const root = createTrieNode();
    
    const insert = (word: string) => {
        let node: TrieNode | undefined = root;
        word.split('').map((char) => {
            if (node && !node.children[char]) {
              node.children[char] = createTrieNode();
            }
            node = node?.children[char];
        });

        node.isEndOfWord = true;
    };

    const getWordsWithPrefix = (prefix: string): string[] => {
        let node = root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        return getWordsFromNode(node, prefix);
    }

    const getWordsFromNode = (node: TrieNode | undefined, prefix: string): string[] => {
        if (!node) {
            return [];
        }

        const words: string[] = [];

        if (node.isEndOfWord) {
            words.push(prefix);
        }

        for (let char in node.children) {
            words.push(...getWordsFromNode(node.children[char], prefix + char));
        }

        return words;
    }

    return {
        root,
        insert,
        getWordsWithPrefix
    };
};