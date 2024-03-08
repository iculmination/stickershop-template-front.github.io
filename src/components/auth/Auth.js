import google from "./2702602.png";
import facebook from "./Facebook_Logo_(2019).png";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

const schema = z.object({
  login: z
    .string()
    .min(4, { message: "Login must contain at least 4 characters" }),
  email: z.string().min(1, { message: "Email field cannot be empty" }),
  password: z.string().min(1, { message: "Password field cannot be empty" }),
});

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const auth = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
  const emailField =
    auth.auth === "register" ? (
      <div className="mb-4">
        <Label
          htmlFor="email"
          className="block text-sm font-semibold text-[#728299] ml-1"
        >
          Email
        </Label>
        <Input
          maxLength="45"
          type="text"
          id="email"
          {...register("email")}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-primary"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
    ) : null;

  const accountButton =
    auth.auth === "login" ? (
      <Link to="/auth/register">
        <Button variant="ghost" className="w-full mt-4">
          <p>I don't have an account</p>
        </Button>
      </Link>
    ) : (
      <Link to="/auth/login">
        <Button variant="ghost" className="w-full mt-4">
          <p>I already have an account</p>
        </Button>
      </Link>
    );
  return (
    <section className="container pb-12 pt-12 lg:pb-36 lg:pt-36 w-full flex flex-col justify-center items-center">
      <div className="bg-white min-h-96  rounded-md w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center pb-6 drop-shadow">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-full pt-8 pr-8 pl-8 focus:outline-none flex flex-col"
        >
          <h1 className="text-2xl self-center mb-4">
            {auth.auth === "login" ? "Log in" : "Register"}
          </h1>
          <div className="mb-4">
            <Label
              htmlFor="login"
              className="block text-sm font-semibold text-[#728299] ml-1"
            >
              {auth.auth === "login" ? "Login or email" : "Login"}
            </Label>
            <Input
              maxLength="30"
              type="text"
              id="login"
              {...register("login")}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-primary"
            />
            {errors.login && (
              <p className="text-red-500 text-sm">{errors.login.message}</p>
            )}
          </div>
          {emailField}
          <div className="mb-4">
            <Label
              htmlFor="password"
              className="block text-sm font-semibold text-[#728299] ml-1"
            >
              Password
            </Label>
            <div className="flex">
              <Input
                maxLength="45"
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password")}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-primary"
              />
              <Button
                type="button"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="absolute mt-1 right-8 rounded-l-none"
                variant="ghost"
              >
                {showPassword ? (
                  <EyeOff className="text-[#728299]" />
                ) : (
                  <Eye className="text-[#728299]" />
                )}
              </Button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full mt-4">
            <p> {auth.auth === "login" ? "Log in" : "Register"}</p>
          </Button>
          <Label className="mt-2 font-light text-center text-[10px] font-semibold text-[#728299] ml-1">
            By clicking on the {auth.auth === "login" ? "Log in" : "Register"}{" "}
            button, you agree to the privacy policy
          </Label>
          <div className="flex my-4 justify-center items-center">
            <Separator className="w-2/5 " />
            <p className="ml-4 mr-4 text-sm">Or</p>
            <Separator className="w-2/5 " />
          </div>
          <Button variant="outline" className="w-full" type="button">
            <img src={google} alt="" className="w-5 mr-2" />
            <p>{auth.auth === "login" ? "Log in" : "Register"} with Google</p>
          </Button>
          <Button variant="outline" className="w-full mt-4" type="button">
            <img src={facebook} alt="" className="w-5 mr-2" />
            <p>{auth.auth === "login" ? "Log in" : "Register"} with Facebook</p>
          </Button>
          {accountButton}
        </form>
      </div>
    </section>
  );
};

export default Auth;
