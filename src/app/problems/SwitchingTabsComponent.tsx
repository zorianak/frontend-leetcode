import * as React from "react";
import * as problemsData from '../content/problems.json';

export default function SwitchingTabsComponent() {
    const { problems } = problemsData;
    const {name, description, tags, difficulty, providedContent} = problems[0];
    const [activeTab, setActiveTab] = React.useState(0);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const tabId = parseInt(e.currentTarget.id);
        setActiveTab(tabId);
        console.log(activeTab)
    }

    return(
    <div>
        <h2>{name}</h2>
        <div className="metadata">
            <span className="tags">{tags.join(', ')}</span>
            <span className="difficulty">{difficulty}</span>
        </div>
        <div className="description">{description}</div>

        <div className="switching-tabs">
            {React.useMemo(() => {
                return providedContent.map((content, idx) => (
                    <div key={idx} className="tab">
                        <h3><button id={idx.toString()} onClick={handleClick}>{content.name}</button></h3>
                        {activeTab === idx &&
                            <p>{content.content}</p>}
                    </div>
                ));
            }, [activeTab])}
            
        </div>
    </div>
    )
};