import * as React from 'react';
import { SwitchingTabsComponent } from './problems';

export const getProblemComponent = (problemName: string): React.ReactNode | null => {
    switch (problemName) {
        case 'SwitchingTabsComponent':
            return <SwitchingTabsComponent />;
        default:
            return null;
    }
}