import React from 'react'
import { Input } from './ui/input'
import type { AllFormFeilds, StepFormdata } from '@/types';
import type { useForm } from 'react-hook-form';

const FormField = ({
    id,
    label,
    type = 'text',
    maxLength,
    register,
    errors
}: {
    id: keyof AllFormFeilds;
    label: string;
    type?: string;
    maxLength?: number;
    register: ReturnType<typeof useForm<StepFormdata>>["register"];
    errors: any;
}) => {
  return (
    <div className='space-y-2'>
        <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
            {label}
        </label>
        <Input id={id} type={type} maxLength={maxLength} {...register(id)}/>
        {errors[id] && (
            <p className='text-sm text-red-600'>
                {errors[id]?.message as string}
            </p>
        )}
    </div>
  )
}

export default FormField