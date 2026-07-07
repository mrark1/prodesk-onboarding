import "../styles/Progress.css";

function ProgressBar({ step }) {

  const steps = [
    "Personal Info",
    "Account Details",
    "Review & Submit"
  ];

  return (

    <div className="stepper">

      {

        steps.map((title, index) => {

          const currentStep = index + 1;

          return (

            <div
              className="step-item"
              key={index}
            >

              {/* Circle */}

              <div
                className={
                  currentStep < step
                    ? "step-circle completed"
                    : currentStep === step
                    ? "step-circle active"
                    : "step-circle"
                }
              >

                {

                  currentStep < step

                    ? "✓"

                    : currentStep

                }

              </div>

              {/* Title */}

              <p>{title}</p>

              {/* Line */}

              {

                index !== steps.length - 1 && (

                  <div

                    className={

                      currentStep < step

                        ? "step-line active"

                        : "step-line"

                    }

                  ></div>

                )

              }

            </div>

          );

        })

      }

    </div>

  );

}

export default ProgressBar;