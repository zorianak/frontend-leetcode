import * as React from "react";
import * as problemsData from '../content/problems.json';
import { FileNode } from "../structures/fileTree";

export default function LinkedSubmenuComponent() {
    const { problems } = problemsData;
    const { name, description, tags, difficulty, providedContent } = problems[2];

    const flattenTree = (node: FileNode) => {

    }

    return(
        <div>
            <h2>{name}</h2>
            <div className="metadata">
                <span className="tags">{tags.join(', ')}</span>
                <span className="difficulty">{difficulty}</span>
            </div>
            <div className="description">{description}</div>

            <div className="linked-submenu">
                
            </div>
        </div>
    )
};