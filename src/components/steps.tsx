import type { StepFormdata } from "@/types";
import FormField from "./form-field";
import { CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState } from "react";

const PersonaInfoStep = ({ register, errors }: any) => {
  return (
    <div className="space-y-4">
      <CardTitle className="text-xl">Personal Information</CardTitle>

      <div className="grid grid-cols-2 gap-4">
        <FormField
          id="firstName"
          label="First Name"
          register={register}
          errors={errors}
        />
        <FormField
          id="lastName"
          label="Last Name"
          register={register}
          errors={errors}
        />

        <FormField
          id="email"
          label="Email Address"
          register={register}
          errors={errors}
          type="email"
        />

        <FormField
          id="phone"
          label="Phone Number"
          register={register}
          errors={errors}
          type="tel"
        />
      </div>
    </div>
  );
};

const ProfessionalInfoStep = ({ register, errors, setValue }: any) => {
  const [experience, setExperience] = useState<string>("");
  return (
    <div className="space-y-4">
      <CardTitle className="text-xl">Professional Information</CardTitle>
      <FormField
        id="company"
        label="Commpany"
        register={register}
        errors={errors}
      />
      <FormField
        id="position"
        label="Position"
        register={register}
        errors={errors}
      />
      <div className="space-y-2">
        <Label htmlFor="experience">Years of Experience</Label>
        <Select
          onValueChange={(value) => {
            setValue?.(
              "experience",
              value as Extract<
                StepFormdata,
                { experience: string }
              >["experience"],
              { shouldValidate: true }
            );
            setExperience(value);
          }}
          value={experience}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-2">0-2 years</SelectItem>
            <SelectItem value="3-5">3-5 years</SelectItem>
            <SelectItem value="6-10">6-10 years</SelectItem>
          </SelectContent>
        </Select>
        {errors.experience && (
          <p className="text-sm text-red-600">
            {errors.experience?.message as string}
          </p>
        )}
        {/* </div> */}
      </div>
      <FormField
        id="industry"
        label="Industry"
        register={register}
        errors={errors}
      />
    </div>
  );
};

const BillingInfoStep = ({ register, errors }: any) => {
  return (
    <div className="space-y-4">
      <CardTitle className="text-xl">Billing Information</CardTitle>
      <FormField
        id="cardNumber"
        label="Card Number"
        register={register}
        errors={errors}
        maxLength={16}
      />
      <FormField
        id="cardHolder"
        label="Card Holder Name"
        register={register}
        errors={errors}
      />
      <div className="grid grid-cols-2 gap-4">
        <FormField
          id="expiryDate"
          label="Expiry date"
          register={register}
          errors={errors}
          maxLength={5}
        />

        <FormField
          id="cvv"
          label="CVV"
          register={register}
          errors={errors}
          maxLength={4}
        />
      </div>
    </div>
  );
};

const SucessStep = () => {
  return (
    <div className="space-y-4">
      <CardTitle className="text-xl">Sucess Information</CardTitle>
      
    </div>
  );
}

export { PersonaInfoStep, ProfessionalInfoStep, BillingInfoStep,SucessStep };
