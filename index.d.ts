import { errorTypes } from "./validator";

export function validateEmail(
  email: string
): boolean;
export function validateIsraeliMobileNumber(
  phoneNumber: string
): boolean;
export function isAlphaHebrewOrEnglish(
  str: string
): boolean;
export function isNumeric(
  str: string
): boolean;
export function isStrongPassword(
  password: string
): boolean;
export function isMatchesPasswordConfirm(
  password: string,
  passwordConfirm: string
): boolean;
export function isLength(
  value: string,
  options?: {
    min?: number;
    max?: number;
  }
): boolean;
export function isObjectId(
  value: string
): boolean;

interface ValidationPipe {
  required(): ValidationPipe;
  min(length: number): ValidationPipe;
  max(length: number): ValidationPipe;
  isValidEmail(): ValidationPipe;
  isValidIsraeliMobileNumber(): ValidationPipe;
  isAlphaHebrewOrEnglish(): ValidationPipe;
  isNumeric(): ValidationPipe;
  isStrongPassword(): ValidationPipe;
  result(): ValidationResult;
  isValid(): boolean;
}

type ValidationMethod = Exclude<
  keyof ValidationPipe,
  "result" | "isValid"
>;

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationMethod[];
}

export function validator(
  str?: string
): ValidationPipe;
