import { useMultiFormSteps } from "@/hooks/useMultiFormSteps";
import type { StepFormdata } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ProgressStep from "./progress-steps";
import {
  BillingInfoStep,
  PersonaInfoStep,
  ProfessionalInfoStep,
  SucessStep,
} from "./steps";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  }, [currentStep, formData, reset]);

const onNext = async (data: StepFormdata) => {
  const isValid = await trigger();
  if (!isValid) return;
  updateFormData({...formData,...data});
  if (steps[currentStep].id === "sucess") {
    try {
      await submitForm({...formData,...data});
      // alert("Form submitted successfully!");
      // resetForm();
      // reset();
    } catch (error) {
      alert("There was an error submitting the form.");
    }
  } else {
    goToNextStep();
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <ProgressStep currentStep={currentStep} steps={steps} />
        </CardHeader>
        <CardContent className="space-y-6">
          {currentStep === 0 && <PersonaInfoStep register={register} errors={errors}/>}
          {currentStep === 1 && <ProfessionalInfoStep register={register} errors={errors} setValue={setValue}/>}
          {currentStep === 2 && <BillingInfoStep register={register} errors={errors}/>}
          {currentStep === 3 && <SucessStep />}

          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              disabled={isFirstStep}
              onClick={goToPreviousStep}
              className="mr-2"
            >
              {!isFirstStep && <ChevronLeft className="mr-2 h-4 w-4" />}
              Previous
            </Button>
            <Button
              type="button"
              variant="default"
              onClick={handleSubmit(onNext)}
              className="mr-2"
            >
              {isLastStep ? "Finish" : "Next"}
              {!isLastStep && <ChevronRight className="mr-2 h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultiStepForm;
