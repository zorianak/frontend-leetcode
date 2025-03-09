import * as React from "react";
import * as problemsData from '../content/problems.json';
import { FileNode } from "../structures/fileTree";
import { nodeServerAppPaths } from "next/dist/build/webpack/plugins/pages-manifest-plugin";

export default function LinkedSubmenuComponent() {
    const { problems } = problemsData;
    const { name, description, tags, difficulty, providedContent } = problems[2];
    let root = providedContent[0].nodes[0];

    const flattenTree = ( node: FileNode, key: number = 0) => {
        if (!node) return null;
        return (
            <li key={key}>
                {node.name}
                {node.isDirectory && node.children && (
                    <ul>
                        {node.children.map((child, idx) => flattenTree(child, key * 10 + idx))}
                    </ul>
                )}
                </li>
        )
    }

    const createdList = flattenTree(root);
    console.log('theList', createdList);

    return(
        <div>
            <h2>{name}</h2>
            <div className="metadata">
                <span className="tags">{tags.join(', ')}</span>
                <span className="difficulty">{difficulty}</span>
            </div>
            <div className="description">{description}</div>

            <div className="linked-submenu">
                {createdList}
            </div>
        </div>
    )
};