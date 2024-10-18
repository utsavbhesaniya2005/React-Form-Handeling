import { useState } from "react";

const UserForm = () => {

    const [userInput, setUserInput] = useState({
        fname : '',
        lname : '',
        email : '',
        pass : '',
        contact : '',
        city : ''
    });

    const handleInput = (e) => {
        setUserInput({...userInput,[e.target.name] : e.target.value});
    }

    const formSubmit = (e) => {

        e.preventDefault();

        setUserInput({
            fname : '',
            lname : '',
            email : '',
            pass : '',
            contact : '',
            city : ''
        });

        console.log(userInput);
    }


    return(
        <>
            <h1 className="mb-5">Form Handeling</h1>
            <div className="container">
                <form onSubmit={formSubmit} className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label d-flex">First Name :</label>
                        <input type="text" className="form-control" placeholder="Enter First Name"  name="fname" onChange={handleInput} value={userInput.fname} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label d-flex">Last Name :</label>
                        <input type="text" className="form-control" placeholder="Enter Last Name"  name="lname" onChange={handleInput} /><br value={userInput.lname} />
                    </div>

                    <div className="col-12">
                        <label className="form-label d-flex">Email :</label>
                        <input type="email" className="form-control" placeholder="Enter Your Email" name="email" onChange={handleInput} value={userInput.email} /><br /><br />
                    </div>

                    <div className="col-12">
                        <label className="form-label d-flex">Password :</label>
                        <input type="password" className="form-control" placeholder="Enter Your Password" name="pass" onChange={handleInput} value={userInput.pass} /><br /><br />
                    </div>

                    <div className="col-12">
                        <label className="form-label d-flex">Contact :</label>
                        <input type="text" className="form-control"  placeholder="Enter Your Contact" name="contact" onChange={handleInput} value={userInput.contact} /><br /><br />
                    </div>

                    <div className="col-12">
                        <label className="form-label d-flex">City :</label>
                        <input type="text" className="form-control" placeholder="Enter Your City" name="city" onChange={handleInput} /><br value={userInput.city} /><br /><br /><br />
                    </div>

                    <input type="submit" className="btn btn-primary" value={'Submit'}/>
                </form>
            </div>
        </>
    )

}
export default UserForm;