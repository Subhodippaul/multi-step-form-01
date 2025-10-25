import {
  billingInfoSchema,
  personalInfoSchema,
  professinalInfoSchema,
  type Step,
  type StepFormdata,
} from "@/types";
import { Briefcase, Check, CreditCard, User } from "lucide-react";
import { useState } from "react";

const stepSchemas = [
  personalInfoSchema,
  professinalInfoSchema,
  billingInfoSchema,
];

const steps: Step[] = [
  { id: "personal", name: "Personal Info", icon: User },
  { id: "professional", name: "Professional Info", icon: Briefcase },
  { id: "billing", name: "Billing Info", icon: CreditCard },
  { id: "sucess", name: "Sucess Step", icon: Check }
];

export function useMultiFormSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<StepFormdata>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  //Current Step Schema
  const getCurrentStepSchema = () => {
    return stepSchemas[currentStep];
  };

  //Next Step
  const goToNextStep = () => {
    if (!isLastStep) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  //Previous Step
  const goToPreviousStep = () => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  //Merge and update the form data
  const updateFormData = (newData: Partial<StepFormdata>) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  const submitForm = (data: Partial<StepFormdata>) => {
    console.log("Submitting form with data:", data);
    setIsSubmitting(true);
  };

  const resetForm = () => {
    setCurrentStep(0);
    setFormData({});
    setIsSubmitting(false);
  };

  return {
    currentStep,
    isFirstStep,
    isSubmitting,
    formData,
    isLastStep,
    getCurrentStepSchema,
    goToNextStep,
    goToPreviousStep,
    resetForm,
    submitForm,
    updateFormData,
    steps,
  };
}
