import { ApiResponse } from "@/typescript/interface";
import {
  LoginFormSchema,
  RegisterFormSchema,
} from "@/validation/form.validation";

export const handleLogin = async (
  data: LoginFormSchema,
): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    const result = await response.json();

    return result;
  } catch (error: unknown) {
    console.log(error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};

export const handleRegister = async (
  data: RegisterFormSchema,
): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register-via-invite`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    const result = await response.json();

    return result;
  } catch (error: unknown) {
    console.log(error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
