"use client"

import { LoginInputProps, RegisterInputProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "../formInputs/SubmitButton";



export default function LoginForm() {

  const [isLoading, setIsLoading] = useState(false)


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },

  } = useForm<LoginInputProps>();

  async function onSubmit(data: LoginInputProps) {
    console.log(data)
  }

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image src="/logo.jpg" width={34} height={34} className="mx-auto h-10 w-auto" alt="logo" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* SIGN UP EMAIL  */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email", { required: true })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <span className="text-red-600">email is required</span>}

            </div>
          </div>

          {/* Password for login */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <Link href="#" className="font-semibold text-blue">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                {...register("password", { required: true })}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && <span className="text-red-600">password is required</span>}
            </div>
          </div>

          {/* Submit button */}

          <div>
            <SubmitButton title="Login"
              loadingTitle="Logging in please wait...."
              login={""}
              isLoading={isLoading} />

          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Do not  have an Account?{' '}
          <Link href="signup" className="font-semibold leading-6 text-blue hover:text-cyan">
            Sign Up
          </Link>
        </p>
      </div>
    </div>

  )
}