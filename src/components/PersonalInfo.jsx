import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "../schemas/validationSchema";

function PersonalInfo({
  formData,
  setFormData,
  nextStep,
}) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({

    resolver: zodResolver(personalInfoSchema),

    mode: "all",

    defaultValues: formData,

  });

  // Load saved data when returning to Step 1
  useEffect(() => {

    reset(formData);

  }, [formData, reset]);

  const onSubmit = (data) => {

    setFormData({

      ...formData,

      ...data,

    });

    nextStep();

  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <h2>👤 Personal Information</h2>

      {/* Full Name */}

      <div className="input-group">

        <label>Full Name</label>

        <input

          type="text"

          placeholder="Enter Full Name"

          {...register("fullName")}

        />

        {errors.fullName && (

          <small className="error">

            {errors.fullName.message}

          </small>

        )}

      </div>

      {/* Email */}

      <div className="input-group">

        <label>Email</label>

        <input

          type="email"

          placeholder="Enter Email"

          {...register("email")}

        />

        {errors.email && (

          <small className="error">

            {errors.email.message}

          </small>

        )}

      </div>

      {/* Phone */}

      <div className="input-group">

        <label>Phone Number</label>

        <input

          type="text"

          placeholder="Enter Phone Number"

          {...register("phone")}

        />

        {errors.phone && (

          <small className="error">

            {errors.phone.message}

          </small>

        )}

      </div>

      {/* Date of Birth */}

      <div className="input-group">

        <label>Date of Birth</label>

        <input

          type="date"

          {...register("dob")}

        />

        {errors.dob && (

          <small className="error">

            {errors.dob.message}

          </small>

        )}

      </div>

      <div className="button-group">

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

export default PersonalInfo;