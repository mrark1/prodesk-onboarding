import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";
import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import ReviewSubmit from "./components/ReviewSubmit";
import Success from "./components/Success";
import Toast from "./components/Toast";

import "./styles/App.css";
import "./styles/Form.css";
import "./styles/Responsive.css";
import "./styles/Toast.css";

function App() {

  // ==========================
  // State
  // ==========================

  const [submitted, setSubmitted] = useState(false);

  const [step, setStep] = useState(() => {

    const savedStep = localStorage.getItem("currentStep");

    return savedStep ? Number(savedStep) : 1;

  });

  const [toastMessage, setToastMessage] = useState("");

  const [toastType, setToastType] = useState("success");

  const [formData, setFormData] = useState(() => {

    const saved = localStorage.getItem("onboardingData");

    return saved

      ? JSON.parse(saved)

      : {

          fullName: "",

          email: "",

          phone: "",

          dob: "",

          username: "",

          password: "",

          confirmPassword: ""

        };

  });

  // ==========================
  // LocalStorage
  // ==========================

  useEffect(() => {

    localStorage.setItem(

      "onboardingData",

      JSON.stringify(formData)

    );

  }, [formData]);

  useEffect(() => {

    localStorage.setItem(

      "currentStep",

      step

    );

  }, [step]);

  // ==========================
  // Toast Helper
  // ==========================

  const showToast = (

    message,

    type = "success"

  ) => {

    setToastMessage(message);

    setToastType(type);

    setTimeout(() => {

      setToastMessage("");

    }, 3000);

  };

  // ==========================
  // Navigation
  // ==========================

  const nextStep = () => {

    if (step < 3) {

      showToast("✅ Information Saved");

      setStep((prev) => prev + 1);

    }

  };

  const prevStep = () => {

    if (step > 1) {

      showToast("⬅ Previous Step", "info");

      setStep((prev) => prev - 1);

    }

  };

  // ==========================
  // Submit
  // ==========================

  const handleSubmit = () => {

    console.log("Final Form Data");

    console.table(formData);

    localStorage.removeItem("onboardingData");

    localStorage.removeItem("currentStep");

    showToast("🎉 Registration Successful!");

    setTimeout(() => {

      setSubmitted(true);

    }, 1200);

  };

  // ==========================
  // Render Current Step
  // ==========================

  const renderStep = () => {

    switch (step) {

      case 1:

        return (

          <PersonalInfo

            formData={formData}

            setFormData={setFormData}

            nextStep={nextStep}

          />

        );

      case 2:

        return (

          <AccountDetails

            formData={formData}

            setFormData={setFormData}

            nextStep={nextStep}

            prevStep={prevStep}

          />

        );

      case 3:

        return (

          <ReviewSubmit

            formData={formData}

            prevStep={prevStep}

            handleSubmit={handleSubmit}

          />

        );

      default:

        return null;

    }

  };

  // ==========================
  // UI
  // ==========================

  return (

    <div className="app">

      <Toast

        message={toastMessage}

        type={toastType}

      />

      <Navbar />

      <main className="container">

        {!submitted && (

          <ProgressBar step={step} />

        )}

        <div className="form-card">

          {

            submitted

              ? <Success />

              : renderStep()

          }

        </div>

      </main>

      <Footer />

    </div>

  );

}

export default App;