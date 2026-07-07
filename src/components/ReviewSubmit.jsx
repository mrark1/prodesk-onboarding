function ReviewSubmit({
  formData,
  prevStep,
  handleSubmit,
}) {

  return (

    <div className="review-container">

      <div className="review-header">

        <div className="avatar">

          👤

        </div>

        <div>

          <h2>Review Your Details</h2>

          <p>

            Please verify your information before submitting.

          </p>

        </div>

      </div>

      <div className="review-card">

        <div className="review-item">
          <strong>Full Name</strong>
          <span>{formData.fullName}</span>
        </div>

        <div className="review-item">
          <strong>Email</strong>
          <span>{formData.email}</span>
        </div>

        <div className="review-item">
          <strong>Phone</strong>
          <span>{formData.phone}</span>
        </div>

        <div className="review-item">
          <strong>Date of Birth</strong>
          <span>{formData.dob}</span>
        </div>

        <div className="review-item">
          <strong>Username</strong>
          <span>{formData.username}</span>
        </div>

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
          type="button"
          onClick={handleSubmit}
        >
          🚀 Submit
        </button>

      </div>

    </div>

  );

}

export default ReviewSubmit;