import React, { Fragment } from "react";
import { Button, Form, FormInput } from "@components";
import { useForm } from "@hooks";
import { userValidation } from "@hooks/formValidationRules";

const LoginForm = (props) => {
  const { loading = false } = props;

  if (!!loading) {
    return <Loading />;
  }

  const submit = () => {
    console.log("submit");
    console.log(values)
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    userValidation
  );

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="login-form-body">
          <FormInput
            className={!!errors.username && "is-invalid"}
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username || ""}
            placeholder="Enter username"
            label="Username"
            helper={errors.username ? errors.username : null}
            required
          />
          <FormInput
            className={!!errors.email && "is-invalid"}
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email || ""}
            label="Email"
            helper={errors.email ? errors.email : null}
          />
          <FormInput
            className={!!errors.password && "is-invalid"}
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password || ""}
            label="Password"
            helper={errors.password ? errors.password : null}
          />
          <Button
            type="submit"
            text="Submit"
            icon="send"
            alignment="right"
          />
        </div>
      </form>
    </Fragment>
  );
};

export default LoginForm;
