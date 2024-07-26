"use client";
import React from "react";
import { useContactForm } from "../hooks/useContactForm"; // Importar el hook personalizado
import Image from "next/image"; // Importar el componente Image de Next.js

const ContactForm: React.FC = () => {
  const {
    formData,
    errors,
    submitted,
    submissionError,
    successMessageRef,
    handleChange,
    handleSubmit,
  } = useContactForm(); // Usar el hook personalizado

  return (
    <div className="bg-primary-200 min-h-screen flex justify-center items-center w-full relative">
      {submitted && (
        <div
          ref={successMessageRef}
          tabIndex={-1}
          className="absolute top-4 w-full text-left p-5 bg-success max-w-96 text-white rounded-xl"
        >
          <div className="flex gap-1 items-center">
            <div className="flex justify-center items-center">
              <Image
                src="/images/icon-success-check.svg"
                alt="Success icon"
                width={20}
                height={20}
              />
            </div>
            <h2 className="text-xl font-bold">Message Sent!</h2>
          </div>
          <p className="text-sm mt-2">
            Thanks for completing the form. We&apos;ll be in touch soon!
          </p>
        </div>
      )}
      {submissionError && (
        <div
          tabIndex={-1}
          className="absolute top-4 w-full text-left p-5 bg-red-600 max-w-96 text-white rounded-xl"
        >
          <div className="flex gap-1 items-center">
            <div className="flex justify-center items-center">
              <Image
                src="/images/errors.svg"
                alt="Error icon"
                width={20}
                height={20}
              />
            </div>
            <h2 className="text-xl font-bold">Submission Failed!</h2>
          </div>
          <p className="text-sm mt-2">
            There was an error submitting the form. Please try again later.
          </p>
        </div>
      )}
      <div className="md:min-w-[600px] p-4 py-8 my-32 md:my-0 bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit} noValidate>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                First Name<span className="text-primary-600 ml-1">*</span>
              </label>
              <input
                className={`w-full p-2 border border-primary-600 rounded mt-1 hover:cursor-pointer ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                aria-describedby={
                  errors.firstName ? "firstName-error" : undefined
                }
                aria-invalid={errors.firstName ? "true" : undefined}
              />
              {errors.firstName && (
                <p id="firstName-error" className="text-red-500 text-xs mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                Last Name<span className="text-primary-600 ml-1">*</span>
              </label>
              <input
                className={`w-full p-2 border border-primary-600 rounded mt-1 hover:cursor-pointer ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                aria-describedby={
                  errors.lastName ? "lastName-error" : undefined
                }
                aria-invalid={errors.lastName ? "true" : undefined}
              />
              {errors.lastName && (
                <p id="lastName-error" className="text-red-500 text-xs mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email Address<span className="text-primary-600 ml-1">*</span>
            </label>
            <input
              className={`w-full p-2 border border-primary-600 rounded mt-1 hover:cursor-pointer ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={errors.email ? "true" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-xs mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="queryType">
              Query Type<span className="text-primary-600 ml-1">*</span>
            </label>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mb-4">
                <label
                  className={`flex items-center p-2 border rounded cursor-pointer ${
                    errors.queryType ? "border-red-500" : "border-primary-600"
                  } ${
                    formData.queryType === "general"
                      ? "bg-primary-200"
                      : "bg-white"
                  }`}
                >
                  <input
                    className="mr-2 text-primary-600 focus:ring-primary-600"
                    type="radio"
                    name="queryType"
                    value="general"
                    onFocus={(e) =>
                      e.target.parentElement?.classList.add("bg-primary-200")
                    }
                    onBlur={(e) =>
                      e.target.parentElement?.classList.remove("bg-primary-200")
                    }
                    checked={formData.queryType === "general"}
                    onChange={handleChange}
                  />
                  General Enquiry
                  <span className="text-primary-600 ml-1">*</span>
                </label>
              </div>
              <div className="mb-4">
                <label
                  className={`flex items-center p-2 border rounded cursor-pointer ${
                    errors.queryType ? "border-red-500" : "border-primary-600"
                  } ${
                    formData.queryType === "support"
                      ? "bg-primary-200"
                      : "bg-white"
                  }`}
                >
                  <input
                    className="mr-2 text-primary-600 focus:ring-primary-600"
                    type="radio"
                    name="queryType"
                    value="support"
                    onFocus={(e) =>
                      e.target.parentElement?.classList.add("bg-primary-200")
                    }
                    onBlur={(e) =>
                      e.target.parentElement?.classList.remove("bg-primary-200")
                    }
                    checked={formData.queryType === "support"}
                    onChange={handleChange}
                  />
                  Support Request
                  <span className="text-primary-600 ml-1">*</span>
                </label>
              </div>
            </div>
            {errors.queryType && (
              <p
                id="queryType-error"
                className="text-red-500 text-xs mt-1 md:col-span-2"
              >
                {errors.queryType}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message<span className="text-primary-600 ml-1">*</span>
            </label>
            <textarea
              className={`w-full p-2 border border-primary-600 rounded mt-1 hover:cursor-pointer ${
                errors.message ? "border-red-500" : ""
              }`}
              name="message"
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              aria-describedby={errors.message ? "message-error" : undefined}
              aria-invalid={errors.message ? "true" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-xs mt-1">
                {errors.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="flex items-center mb-2 cursor-pointer">
              <input
                className="mr-2 text-primary-600 focus:ring-primary-600"
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                aria-describedby={errors.consent ? "consent-error" : undefined}
                aria-invalid={errors.consent ? "true" : undefined}
              />
              I consent to being contacted by the team
              <span className="text-primary-600 ml-1">*</span>
            </label>
            {errors.consent && (
              <p id="consent-error" className="text-red-500 text-xs mt-1">
                {errors.consent}
              </p>
            )}
          </div>
          <button
            className="w-full p-2 bg-primary-600 hover:bg-emerald-800 text-white rounded mt-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
