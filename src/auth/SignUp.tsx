/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthLayout from "./AuthLayout";
import Trial from "./Trial";
import { signUpformSchema } from "./zod-schema/signUpSchema";

const Form = [
  {
    name: "Register",
    resolvers: signUpformSchema,
    linkTo: "/sign-in",
    buttonDes: "have an account?",
    buttonName: "sign-in",
  },
];

const SignUp = () => {
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

export default SignUp;
