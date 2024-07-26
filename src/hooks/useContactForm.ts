// import { useState, useEffect, useRef } from "react";

// export const useContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     queryType: "",
//     message: "",
//     consent: false,
//   });

//   const [errors, setErrors] = useState<any>({});
//   const [submitted, setSubmitted] = useState(false);
//   const [submissionError, setSubmissionError] = useState(false); // Estado para manejar el fallo
//   const successMessageRef = useRef<HTMLDivElement>(null);

//   const validate = () => {
//     const newErrors: any = {};
//     if (!formData.firstName) newErrors.firstName = "This field is required";
//     if (!formData.lastName) newErrors.lastName = "This field is required";
//     if (!formData.email) {
//       newErrors.email = "This field is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }
//     if (!formData.queryType) newErrors.queryType = "Please select a query type";
//     if (!formData.message) newErrors.message = "This field is required";
//     if (!formData.consent)
//       newErrors.consent =
//         "To submit this form, please consent to being contacted";
//     return newErrors;
//   };

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value, type } = e.target;
//     if (type === "checkbox") {
//       setFormData({
//         ...formData,
//         [name]: (e.target as HTMLInputElement).checked,
//       });
//     } else if (type === "radio") {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       try {     
//         const response = await new Promise((resolve, reject) =>
//           setTimeout(() => {           
//             // reject()
//             resolve("success");
//           }, 1000)
//         );
//         setSubmitted(true);
//         setSubmissionError(false);
//         setErrors({});
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           queryType: "",
//           message: "",
//           consent: false,
//         });
//       } catch (error) {
//         setSubmissionError(true);
//         setSubmitted(false);
//       }
//     }
//   };

//   useEffect(() => {
//     if (submitted || submissionError) {
//       if (successMessageRef.current) {
//         successMessageRef.current.focus();
//       }
//       const timer = setTimeout(() => {
//         setSubmitted(false);
//         setSubmissionError(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [submitted, submissionError]);

//   return {
//     formData,
//     errors,
//     submitted,
//     submissionError,
//     successMessageRef,
//     handleChange,
//     handleSubmit,
//   };
// };

import { useState, useEffect, useRef } from "react";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false); // Estado para manejar el fallo
  const successMessageRef = useRef<HTMLDivElement>(null);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.firstName) newErrors.firstName = "This field is required";
    if (!formData.lastName) newErrors.lastName = "This field is required";
    if (!formData.email) {
      newErrors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.queryType) newErrors.queryType = "Please select a query type";
    if (!formData.message) newErrors.message = "This field is required";
    if (!formData.consent)
      newErrors.consent =
        "To submit this form, please consent to being contacted";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else if (type === "radio") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    // Elimina el error al hacer focus
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {     
        const response = await new Promise((resolve, reject) =>
          setTimeout(() => {           
            // reject()
            resolve("success");
          }, 1000)
        );
        setSubmitted(true);
        setSubmissionError(false);
        setErrors({});
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          queryType: "",
          message: "",
          consent: false,
        });
      } catch (error) {
        setSubmissionError(true);
        setSubmitted(false);
      }
    }
  };

  useEffect(() => {
    if (submitted || submissionError) {
      if (successMessageRef.current) {
        successMessageRef.current.focus();
      }
      const timer = setTimeout(() => {
        setSubmitted(false);
        setSubmissionError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, submissionError]);

  return {
    formData,
    errors,
    submitted,
    submissionError,
    successMessageRef,
    handleChange,
    handleSubmit,
  };
};
