import * as React from "react";
import * as problemsData from '../content/problems.json';
import { createTrie, Trie } from '../structures/trie';

export default function AutocompleteComponent() {
    const { problems } = problemsData;
    const { name, description, tags, difficulty, providedContent } = problems[3];
    const [suggestions, setSuggestions] = React.useState<string[]>([]);
    const [inputValue, setInputValue] = React.useState<string>('');

    // memoize the trie for performance, cache its value
    const trie = React.useMemo(() => createTrie(), []);

    // prevent unnecessary re-renders
    React.useEffect(() => {
        // @ts-ignore -- TODO to add unionized type for providedContent per-problem
        providedContent.forEach((item: { word: string }) => {
            trie.insert(item.word);
        });
    }, []); 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            const words = trie.getWordsWithPrefix(value);
            setSuggestions(words.length > 0 ? words : []);
        } else {
            setSuggestions([]);
        }
    };

    const Suggestion = ({ word }: { word: string }) => {
        const handleClick = () => {
            setInputValue(word);
            setSuggestions([]);
        }
        return <li><button onClick={handleClick}>{word}</button></li>;
    }

    return (
        <div>
            <h2>{name}</h2>
            <div className="metadata">
                <span className="tags">{tags.join(', ')}</span>
                <span className="difficulty">{difficulty}</span>
            </div>
            <div className="description">{description}</div>

            <div className="linked-submenu">
                <input type="text" value={inputValue} placeholder="Search for a problem..." onChange={handleChange} />
                <ul>
                    {suggestions.map((suggestion, idx) => (
                        <Suggestion key={idx} word={suggestion} />
                    ))}
                </ul>
            </div>
        </div>
    );
}