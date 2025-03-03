import * as React from 'react';
import { SwitchingTabsComponent, FetchComponent } from '../problems';

export const getProblemComponent = (problemName: string): React.ReactNode | null => {
    console.log(problemName);
    switch (problemName) {
        case 'SwitchingTabsComponent':
            return <SwitchingTabsComponent />;
        case 'FetchComponent':
            return <FetchComponent />;
        default:
            return null;
    }
}