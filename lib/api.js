export const sendContactForm = async (formData) => {
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
