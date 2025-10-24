import { z } from "zod";

export const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

export const professinalInfoSchema = z.object({
  company: z.string().min(2, "Company name must be at least 2 characters"),
  position: z.string().min(2, "Position must be at least 2 characters"),
  experience: z.number().min(0, "Experience must be a positive number"),
  industry: z.string().min(2, "Industry must be at least 2 characters"),
});

export const billingInfoSchema = z.object({
  cardNumber: z.string().min(16, "Card number must be at least 16 digits"),
  expiryDate: z.string().min(5, "Expiry date must be in MM/YY format"),
  cvv: z.string().min(3, "CVV must be at least 3 digits"),
  cardHolder: z.string().min(2, "Name on card must be at least 2 characters"),
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type ProfessionalInfo = z.infer<typeof professinalInfoSchema>;
export type BillingInfo = z.infer<typeof billingInfoSchema>;

export type StepFormdata = PersonalInfo | ProfessionalInfo | BillingInfo;

export type AllFormFeilds = PersonalInfo & ProfessionalInfo & BillingInfo;
export interface Step {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
}
