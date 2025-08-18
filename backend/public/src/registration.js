import React, { useState } from "react";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        reg_id: "",
        Team_name: "",
        Team_member: "",
        Member_one_name: "",
        Member_two_name: "",
        Email: "",
        Contect_no: "",
        Collage_name: "",
        Event_id: "",
        Event_type: "",
        Event_name: "",
        Field: "",
        Year: "",
        Payment: "",
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);

        // Example POST request
        fetch("http://localhost:8080/api/user/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => console.log("Server Response:", data))
            .catch((err) => console.error(err));
    };

    return (
        <div style={{ maxWidth: "500px", margin: "auto" }}>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div key={key} style={{ marginBottom: "10px" }}>
                        <label style={{ display: "block", fontWeight: "bold" }}>
                            {key.replace(/_/g, " ")}
                        </label>
                        <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                borderRadius: "5px",
                                border: "1px solid #ccc",
                            }}
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        background: "blue",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
