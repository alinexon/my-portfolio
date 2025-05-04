import React from "react";

interface CircularProgressProps {
  percentage: number;
  label: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  label,
}) => {
  const angle = Math.round((percentage / 100) * 360);
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-14 h-14">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(#facc15 ${angle}deg, #1f2937 0deg)`,
          }}
        ></div>

        <div className="absolute inset-[5px] rounded-full bg-gray-900 flex items-center justify-center text-[10px] font-semibold text-white">
          {percentage}%
        </div>
      </div>
      <p className="mt-2 text-sm  text-black dark:text-gray-300">{label}</p>
    </div>
  );
};

export default CircularProgress;
