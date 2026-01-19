import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    
    // Create ref for the form
    this.formRef = React.createRef();
    
    this.state = {
      errors: {
        name: "",
        subject: "",
        phone: "",
        email: "",
      },
      status: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = { ...this.state.errors };

    switch (name) {
      case "name":
        errors.name = value.trim() === "" ? "Name is required" : "";
        break;
      case "subject":
        errors.subject = value.length < 5 ? "Subject must be at least 5 characters" : "";
        break;
      case "phone":
        errors.phone = value.trim() === "" ? "Phone is required" : "";
        break;
      case "email":
        errors.email = value.trim() === "" ? "Email is required" : "";
        const atPos = value.indexOf("@");
        const dotPos = value.lastIndexOf(".");
        if (atPos < 1 || dotPos - atPos < 2) {
          errors.email = "Please enter a valid email";
        }
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    if (Object.values(this.state.errors).some(err => err !== "")) {
      this.setState({ status: "Please fix the errors above" });
      return;
    }

    this.setState({ status: "Sending..." });

    // Use the ref here as the 3rd parameter
    // eslint-disable-next-line no-undef
    emailjs
      .sendForm(
        "service_f1n64oc",       // ← e.g. service_abc123xyz
        "template_4tp5lsp",           // ← your template ID
        this.formRef.current,         // ← THIS is the fix! The actual form element
        // NO 4th param needed if you initialized with emailjs.init({ publicKey }) in index.html
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          this.setState({ status: "Message sent successfully! 🎉" });
          this.formRef.current.reset(); // Clear form using ref
        },
        (error) => {
          console.log("FAILED...", error.text);
          this.setState({ status: "Failed to send. Try again later." });
        }
      );
  };

  render() {
    const { errors, status } = this.state;

    return (
      // Attach the ref to the <form>
      <form 
        ref={this.formRef} 
        onSubmit={this.submitHandler} 
        className="form_class"
      >
        <div className="row">
          <div className="col-lg-6">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your Name*"
              onChange={this.handleChange}
            />
            <p className="error">{errors.name}</p>
          </div>
          {/* ... other inputs remain the same ... */}
          <div className="col-lg-6">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Your Email*"
              onChange={this.handleChange}
            />
            <p className="error">{errors.email}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              placeholder="Subject*"
              onChange={this.handleChange}
            />
            <p className="error">{errors.subject}</p>
          </div>
          <div className="col-lg-6">
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Phone*"
              onChange={this.handleChange}
            />
            <p className="error">{errors.phone}</p>
          </div>
        </div>

        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="6"
          placeholder="Your Message ..."
          onChange={this.handleChange}
        ></textarea>

        <button type="submit" className="btn send_btn theme_btn">
          Send Message
        </button>

        {status && (
          <p 
            style={{ 
              marginTop: 15, 
              color: status.includes("success") ? "green" : 
                     status.includes("Failed") ? "red" : "orange",
              fontWeight: "bold" 
            }}
          >
            {status}
          </p>
        )}
      </form>
    );
  }
}

export default Form;