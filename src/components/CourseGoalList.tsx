import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
import { type CourseGoal as CGoal } from "../App";
import { ReactNode } from "react";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">No goals added yet, start adding some!</InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length > 3) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You have too many goals, consider deleting some!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              onDelete={onDeleteGoal}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
