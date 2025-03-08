"use client";
import * as React from 'react';
import { Problem } from '@/src/types';
import ProblemButton from './ProblemButton';
import { getProblemComponent } from '../utils/getProblemComponent';

export type ProblemListProps = {
    problems: Problem[];
}
export default function ProblemList({ problems }: ProblemListProps) {
    const [selectedProblem, setSelectedProblem] = React.useState<React.ReactNode | null>(null)
    const handleProblemClick = (problem: Problem) => {
        const problemComponent = getProblemComponent(problem.component);
        if (problemComponent) {
            setSelectedProblem(problemComponent);
        } else {
            console.error(`Problem component for ${problem.name} not found.`);
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
            <ul className="p-4">
                {problems.map((problem, index) => (
                    <ProblemButton key={index} problem={problem} onClickHandler={() => handleProblemClick(problem)} />
                ))}
            </ul>
            <div className="p-4 w-full md:w-[600px]">
                {selectedProblem ? (
                    <div>
                        {selectedProblem}
                    </div>
                ) : (
                    <div>
                        <p>Select a problem to view its details.</p>
                    </div>
                )}
            </div>
        </div>
    );
}