import * as React from "react";
import * as problemsData from '../content/problems.json';

export default function FetchComponent() {
    const { problems } = problemsData;
    const {name, description, tags, difficulty, providedContent} = problems[1];
    const url = providedContent[0]?.url;
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                setData(data.slice(0, 10));

            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

        return () => {
            controller.abort()
        }
    }, []);

    const renderContent = () =>  {
        if (loading) {
            return <div>Loading...</div>
        }

        return (
            <>
            {data && data.length > 0 ? (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </ul>
            ): (<div>Empty data</div>)}
            </>
        )
    }

    return(
    <div>
        <h2>{name}</h2>
        <div className="metadata">
            <span className="tags">{tags.join(', ')}</span>
            <span className="difficulty">{difficulty}</span>
        </div>
        <div className="description">{description}</div>
        <div className="provided-content">{url}</div>

        <div className="fetch-api">
            {renderContent()}
            
        </div>
    </div>
    )
};