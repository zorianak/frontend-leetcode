import * as React from "react";
import * as problemsData from '../content/problems.json';
import { createTrie, Trie } from '../structures/trie';

export default function AutocompleteComponent() {
    const { problems } = problemsData;
    const { name, description, tags, difficulty, providedContent } = problems[3];
    const [suggestions, setSuggestions] = React.useState<string[]>([]);

    // memoize the trie for performance, cache its value
    const trie = React.useMemo(() => createTrie(), []);

    // prevent unnecessary re-renders
    React.useEffect(() => {
        // @ts-ignore -- TODO to add unionized type for providedContent per-problem
        providedContent.forEach((item: { word: string }) => {
            trie.insert(item.word);
        });
    }, [providedContent, trie]); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value) {
            const words = trie.getWordsWithPrefix(value);
            setSuggestions(words.length > 0 ? words : []);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div>
            <h2>{name}</h2>
            <div className="metadata">
                <span className="tags">{tags.join(', ')}</span>
                <span className="difficulty">{difficulty}</span>
            </div>
            <div className="description">{description}</div>

            <div className="linked-submenu">
                <input type="text" placeholder="Search for a problem..." onChange={handleChange} />
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}