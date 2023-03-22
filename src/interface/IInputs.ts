import { ChangeEvent } from 'react'
import { FieldError, FieldValues, UseFormReturn } from 'react-hook-form'

export interface IInput {
    name: string
    label: string
    placeholder?: string
    error: FieldError | undefined
}

export interface ISelectGameType {
    name?: string
    label?: string
    error?: FieldError | undefined
    className?: string
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}


export interface InputProps {
    name: string;
    label?: string;
    error: FieldError | undefined;
    register: UseFormReturn<FieldValues>;
    rules?: Record<string, unknown>;
    type?: string;
    className?: string;
    placeholder?: string;
}