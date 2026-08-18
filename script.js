// ========================================
// PORTFOLIO JAVASCRIPT
// ========================================

console.log("Manohar Portfolio Loaded Successfully!");

// ========================================
// CONTACT FORM SUBMISSION
// ========================================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const submitBtn = contactForm.querySelector(".form-submit");
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        try {

            const formData = new FormData(contactForm);

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                formStatus.textContent = "Thanks! Your message has been sent successfully.";
                formStatus.className = "form-status success";

                contactForm.reset();

            } else {

                formStatus.textContent = "Something went wrong. Please try again or email me directly.";
                formStatus.className = "form-status error";

            }

        } catch (error) {

            formStatus.textContent = "Something went wrong. Please try again or email me directly.";
            formStatus.className = "form-status error";

        } finally {

            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

        }

    });

}