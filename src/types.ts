export type Problem = {
    name: string;
    description: string;
    solution: string;
    component: React.ComponentType;
    problemComponent: React.ComponentType;
    difficulty: string;
    tags: string[];
    providedContent?: unknown;
}