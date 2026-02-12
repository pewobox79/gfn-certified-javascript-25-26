import { useState, type ChangeEvent, type SubmitEvent, useContext } from "react";
import UserContext from "../../context/UserContext";

interface FormType {
    firstname: string
    lastname: string
    email: string
    message: string
}
interface ErrorType {
    firstname?: string
    lastname?: string
    message?: string
    email?: string
}
const InitValues: FormType = {
    firstname: "",
    lastname: "sfgasf",
    email: "",
    message: ""
}
export default function Form() {
    console.log("form renders")

    const { setUser } = useContext(UserContext)

    const [request, setRequest] = useState<FormType>(InitValues);
    const [errors, setErrors]=useState<ErrorType>()

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setRequest({ ...request, [event.target.name]: event.target.value })
    }

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        const errors = validate(request)

        if(Object.keys(errors).length === 0){
            console.log("data will be submitted", request)
            setUser({firstname: request.firstname, email: request.email})
            setRequest(InitValues) // clear form input fields 
            setErrors({})
        }else {
            setErrors(errors)
        }
    }

    function validate(formData: FormType) {
        const errors: ErrorType = {}

        if (!formData.firstname) {
            errors.firstname = "Firstname is required"
        }

        if (!formData.lastname) {
            errors.lastname = "Lastname is required"
        }

        if (!formData.email || !formData.email.includes("@")) {
            if(!formData.email){
                errors.email = "email is required"
        
            } else if (!formData.email.includes("@")) {
                errors.email = "Email is invalid"
            }            
        }

        if (!formData.message || formData.message.length < 6) {
            errors.message = "Message required and must have min 6 characters"
        }

        return errors
    }
    return (
        <form className="m-form-contact form-contact" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <div className="mb-3">
                        <label htmlFor="input-firstname" className="form-label">Firstname</label>
                        <input
                            type="text"
                            name="firstname"
                            id="input-firstname"
                            className="form-control"
                            value={request?.firstname}
                            onChange={handleChange}
                        />
                        {errors?.firstname && <div className="text-danger">{errors.firstname}</div>}
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="mb-3">
                        <label htmlFor="input-lastname" className="form-label">Lastname</label>
                        <input
                            type="text"
                            name="lastname"
                            id="input-lastname"
                            className="form-control"
                            value={request?.lastname}
                            onChange={handleChange}
                        />
                        {errors?.lastname && <div className="text-danger">{errors.lastname}</div>}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="input-email" className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="input-email"
                            name="email"
                            value={request?.email}
                            onChange={handleChange}
                        />
                        {errors?.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="textarea-message" className="form-label">Message</label>
                        <textarea
                            name="message"
                            id="textarea-message"
                            cols={30}
                            rows={5}
                            className="form-control"
                            value={request?.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors?.message && <div className="text-danger">{errors.message}</div>}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="submit" className="btn btn-dark button-send-contact">
                        Send
                    </button>
                </div>
            </div>
        </form>
    );
}