function Success() {

  return (

    <div className="success-page">
    <button

onClick={() => window.location.reload()}

className="restart-btn"

>

Start Again

</button> 

      <div className="success-icon">

        ✅

      </div>

      <h2>

        Registration Successful!

      </h2>

      <p>

        Your onboarding information has been submitted successfully.

      </p>

      <p>

        Thank you for choosing ProDesk IT.

      </p>

    </div>

  );

}

export default Success;