import type { Step } from "@/types";
import { Check } from "lucide-react";
import React from "react";

const ProgressStep = ({
  currentStep,
  steps,
}: {
  currentStep: number;
  steps: Step[];
}) => {
  return (
    <div className="flex justify-between items-center">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isCompleted
                    ? "bg-blue-600 text-white"
                    : isCurrent
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Icon className="w-5 h-5" />
                )}
              </div>

              <span className="text-xs mt-2 font-medium">{step.name}</span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 rounded-full transition-colors ${isCompleted ? "bg-blue-600" : "bg-gray-200"}`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressStep;
