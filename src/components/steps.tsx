import FormField from "./form-field"
import { CardTitle } from "./ui/card"

const PersonaInfoStep = ({register, errors}: any) => {
  return (
    <div className="space-y-4">
        <CardTitle className="text-xl">Personal Information</CardTitle>

        <div className="grid grid-cols-2 gap-4">
        <FormField
            id="firstName"
            label="First Name"
            register={register}
            errors={errors}/>
            <FormField
            id="lastName"
            label="Last Name"
            register={register}
            errors={errors}/>
        </div>
    </div>
  )
}


const ProfessionalInfoStep = () => {
  return (
    <div>2 steps</div>
  )
}

const BillingInfoStep = () => {
  return (
    <div>3 steps</div>
  )
}

export { PersonaInfoStep, ProfessionalInfoStep, BillingInfoStep };