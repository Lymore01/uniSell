/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthLayout from "./AuthLayout";
import Trial from "./Trial";
import { signInformSchema } from "./zod-schema/signInSchema";

const Form = [
  {
    name: "Login",
    resolvers: signInformSchema,
    linkTo: "/sign-up",
    buttonDes: "don't have an account?",
    buttonName: "sign-up",
  },
];

const SignIn = () => {
  return (
    <AuthLayout>
      {Form.map(({ name, resolvers, linkTo, buttonDes, buttonName }) => {
        return (
          <Trial
            key={name}
            name={name}
            resolvers={resolvers}
            linkTo={linkTo}
            buttonDes={buttonDes}
            buttonName={buttonName}
          />
        );
      })}
    </AuthLayout>
  );
};

export default SignIn;
