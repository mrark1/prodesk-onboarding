import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "../schemas/validationSchema";

function AccountDetails({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({

    resolver: zodResolver(accountSchema),

    mode: "all",

    defaultValues: {
      username: formData.username,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    },

  });

  useEffect(() => {

    reset({

      username: formData.username,
      password: formData.password,
      confirmPassword: formData.confirmPassword,

    });

  }, [formData, reset]);

  const password = watch("password", "");

  // =====================
  // Password Strength
  // =====================

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasLength = password.length >= 8;

  const score = [
    hasLength,
    hasUpper,
    hasLower,
    hasNumber,
    hasSpecial,
  ].filter(Boolean).length;

  let strength = "Weak";
  let color = "#ef4444";

  if (score >= 3 && score <= 4) {
    strength = "Medium";
    color = "#f59e0b";
  }

  if (score === 5) {
    strength = "Strong";
    color = "#10b981";
  }

  const onSubmit = (data) => {

    setFormData({

      ...formData,

      ...data,

    });

    nextStep();

  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <h2>🔐 Account Details</h2>

      {/* Username */}

      <div className="input-group">

        <label>Username</label>

        <input
          type="text"
          placeholder="Choose Username"
          {...register("username")}
        />

        {errors.username && (

          <small className="error">

            {errors.username.message}

          </small>

        )}

      </div>

      {/* Password */}

      <div className="input-group">

        <label>Password</label>

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            {...register("password")}
          />

          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
          >

            {showPassword ? "🙈" : "👁"}

          </button>

        </div>

        {/* Strength Bar */}

        <div className="strength-bar">

          <div
            className="strength-fill"
            style={{
              width: `${score * 20}%`,
              background: color,
            }}
          ></div>

        </div>

        <p
          className="strength-text"
          style={{ color }}
        >

          Password Strength : {strength}

        </p>

        {errors.password && (

          <small className="error">

            {errors.password.message}

          </small>

        )}

      </div>

      {/* Confirm Password */}

      <div className="input-group">

        <label>Confirm Password</label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />

        {errors.confirmPassword && (

          <small className="error">

            {errors.confirmPassword.message}

          </small>

        )}

      </div>

      <div className="button-group">

        <button
          type="button"
          className="back-btn"
          onClick={prevStep}
        >

          ← Back

        </button>

        <button
          type="submit"
          disabled={!isValid}
        >

          Next →

        </button>

      </div>

    </form>

  );

}

export default AccountDetails;