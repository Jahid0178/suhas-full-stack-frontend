"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterFormSchema,
  registerFormSchema,
} from "@/validation/form.validation";
import Link from "next/link";
import { handleRegister } from "@/actions/auth.action";

const RegisterForm = () => {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      token: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormSchema) => {
    const response = await handleRegister(data);
    if (response.status >= 200 && response.status < 300) {
      alert(response.message);
    } else {
      alert(response.message);
    }
  };
  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-3xl">Register</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your name"
                  />
                </Field>
              )}
            />
            <Controller
              name="token"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="token">Token</FieldLabel>
                  <Input
                    {...field}
                    id="token"
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your token"
                  />
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    autoComplete="off"
                  />
                </Field>
              )}
            />
            <Button type="submit">Register</Button>
          </FieldGroup>
        </form>
        <Separator className="my-6" />
        <div className="text-center">
          <Button
            asChild
            variant="link"
          >
            <Link href="/auth/login">Already have an account?</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
