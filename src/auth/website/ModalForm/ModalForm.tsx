// ModalForm.tsx
import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import "./modal.css";

interface ModalFormProps {
  showModal: boolean;
  closeModal: () => void; // Explicitly define closeModal as a function with no arguments that returns void
}

export const ModalForm: React.FC<ModalFormProps> = ({
  showModal,
  closeModal,
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    moneyGoals: [] as string[],
  });

  const moneyGoals = [
    "Pay off my debts",
    "Save/invest more",
    "Manage and track my finance",
    "Access financial literacy contents",
    "Lower my bills",
    "Create a budget",
    "Track my net worth",
    "Improve credit score",
    "Others",
  ];

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.moneyGoals.length > 0) {
      emailjs
        .send(
          "your_service_id",
          "your_template_id",
          {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            moneyGoals: formData.moneyGoals.join(", "),
          },
          "your_user_id"
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            Swal.fire({
              icon: "success",
              text: "Thank you for joining our waitlist!",
              timer: 9000,
              timerProgressBar: true,
              showConfirmButton: false,
            });
            closeModal(); // Close modal after successful submission
          },
          (error) => {
            console.error("Error sending email:", error);
            Swal.fire({
              icon: "error",
              text: "Error! Please try again later.",
              timer: 9000,
              timerProgressBar: true,
              showConfirmButton: false,
            });
          }
        );
    } else {
      Swal.fire({
        icon: "error",
        text: "Error! Please fill in all the required fields.",
        timer: 9000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  // Return null if showModal is false
  if (!showModal) {
    return null;
  }

  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <form onSubmit={submitForm}>
            <h1>Join Our Waitlist</h1>

            <div>
              <label>
                Full Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label>
                Email Address<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label>
                Phone Number<span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label>
                Your Money Goal(s)<span className="text-danger">*</span>
              </label>
              <select
                multiple
                value={formData.moneyGoals}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    moneyGoals: Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    ),
                  })
                }
                required
              >
                {moneyGoals.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit">Submit</button>
            <button type="button" onClick={closeModal}>
              Close
            </button>
          </form>
        </div>
      </div>
    )
  );
};
