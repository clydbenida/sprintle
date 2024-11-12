"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignInFormType } from "@/schemas/authForm.schema";
import { GoalIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUser } from "../actions";

interface LoginFormType {
  toggleCurrentForm: () => void
}

export default function RegisterForm({toggleCurrentForm}: LoginFormType) {
  const { register, handleSubmit } = useForm<SignInFormType>();

  const onSubmit: SubmitHandler<SignInFormType> = async ({email, password}) => {
    const userDetails = await createUser(email, password);

    console.log(userDetails);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-1/5 border border-gray-400 rounded-lg px-12 py-16 gap-6"
    >
      <div className="flex flex-col gap-4">
        <Input placeholder="Email" {...register("email")} />
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button type="submit">Create Account</Button>
        <Button>
          <GoalIcon /> Sign up with Google
        </Button>
        <p className="text-sm text-muted-foreground text-center">
          Already have an account?{" "}
          <Button className="p-0" variant="link" type="button" onClick={toggleCurrentForm}>
            Click here
          </Button>{" "}
          to login.
        </p>
      </div>
    </form>
  );
}
