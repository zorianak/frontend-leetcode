"use client";

import { Problem } from "@/types";

export type ProblemButtonProps = {
    problem: Problem;
    onClickHandler: () => void;
}

export default function ProblemButton({ problem, onClickHandler }: { problem: Problem, onClickHandler: () => void }) {
    return (
        <li>
            <button onClick={onClickHandler}>
                {problem.name}
            </button>
        </li>);
}