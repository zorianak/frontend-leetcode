"use client";
import * as React from 'react';
import { Problem } from '@/src/types';
import ProblemButton from './ProblemButton';
import { getProblemComponent } from '../utils';

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
        <div>
            <ul>
                {problems.map((problem, index) => (
                    <ProblemButton key={index} problem={problem} onClickHandler={() => handleProblemClick(problem)} />
                ))}
            </ul>
            <div>
                {selectedProblem && (
                    <div>
                        {selectedProblem}
                    </div>
                )}
            </div>
        </div>
    );
}