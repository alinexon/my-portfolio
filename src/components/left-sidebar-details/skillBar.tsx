import React from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-black dark:text-gray-300 text-sm font-medium mb-1">
        <span>{skill}</span>
        <span>{percentage} %</span>
      </div>
      <div className="w-full bg-gray-700 h-1.5 rounded">
        <div
          className="bg-yellow-400 h-1.5 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
