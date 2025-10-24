import { useMultiFormSteps } from "@/hooks/useMultiFormSteps";
import type { StepFormdata } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
const MultiStepForm = () => {
  const {
    currentStep,
    formData,
    getCurrentStepSchema,
    goToNextStep,
    goToPreviousStep,
    isFirstStep,
    isLastStep,
    isSubmitting,
    resetForm,
    steps,
    submitForm,
    updateFormData,
  } = useMultiFormSteps();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
    reset,
  } = useForm<StepFormdata>({
    resolver: zodResolver(getCurrentStepSchema()),
    mode: "onChange",
    defaultValues: formData as StepFormdata,
  });

  useEffect(() => {
    reset(formData as StepFormdata);
  },[currentStep,formData,reset]);

  return <div>MultiStepForm</div>;
};

export default MultiStepForm;
