import * as React from 'react';
import { SwitchingTabsComponent, FetchComponent, LinkedSubmenuComponent, AutocompleteComponent } from '../problems';

export const getProblemComponent = (problemName: string): React.ReactNode | null => {
    console.log(problemName);
    switch (problemName) {
        case 'SwitchingTabsComponent':
            return <SwitchingTabsComponent />;
        case 'FetchComponent':
            return <FetchComponent />;
        case 'LinkedSubmenuComponent':
            return <LinkedSubmenuComponent />;
        case 'AutocompleteComponent':
            return <AutocompleteComponent />;
        default:
            return null;
    }
}