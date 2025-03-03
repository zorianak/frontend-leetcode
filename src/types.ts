export type Problem = {
    name: string;
    number: number;
    description: string;
    solution: string;
    component: React.ComponentType;
    problemComponent: React.ComponentType;
    difficulty: string;
    tags: string[];
    providedContent?: unknown;
}