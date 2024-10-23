import { useEffect, useState } from "react";
import { getUsers } from "../../services/Helper";


const UserForm = () => {

    const [userInput, setUserInput] = useState({
        id : '',
        fname : '',
        lname : '',
        email : '',
        pass : '',
        contact : '',
        city : ''
    });

    const [inputError, setInputError] = useState({});

    const [storage, setStorage] = useState(getUsers());

    const validation = () => {

        let obj = {};

        if(userInput.fname == ''){
            obj.fname = "Name Must Be Required...";
        }

        if(userInput.lname == ''){
            obj.lname = "Lname Must Be Required...";
        }

        if(userInput.email == ''){
            obj.email = "Email Must Be Required...";
        }

        if(userInput.pass == ''){
            obj.pass = "Password Must Be Required...";
        }

        if(userInput.contact == ''){
            obj.contact = "Contact Must Be Required...";
        }
        
        if(userInput.city == ''){
            obj.city = "City Must Be Required...";
        }

        setInputError(obj);

        if(Object.keys(obj).length > 0){
            return false;
        }else{
            return true;
        }
        
    }

    const handleInput = (e) => {
        setUserInput({...userInput,[e.target.name] : e.target.value});
    }

    const formSubmit = (e) => {

        e.preventDefault();

        if(validation()){

            userInput.id = Math.floor(Math.random() * 1000);
            
            setStorage([...storage, userInput]);

            setUserInput({
                id: '',
                fname : '',
                lname : '',
                email : '',
                pass : '',
                contact : '',
                city : ''
            });
            setInputError({});
        }else{

            console.log("Form Not Submit");
        }
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(storage));
    }, [storage])
    

    return(
        <>
            <h1 className="mb-5">Form Handeling</h1>
            <div className="container">
                <form onSubmit={formSubmit} className="row g-3">
                    <div className="col-12">
                        <input type="text" className="form-control" value={storage.id} hidden/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label d-flex">First Name :</label>
                        <input type="text" className="form-control" placeholder="Enter First Name"  name="fname" onChange={handleInput} value={userInput.fname} />
                        {inputError.fname ? <span>{inputError.fname}</span> : ''}
                    </div>
                    <div className="col-md-6">
                        <label className="form-label d-flex">Last Name :</label>
                        <input type="text" className="form-control" placeholder="Enter Last Name"  name="lname" onChange={handleInput} /><br value={userInput.lname} />
                        {inputError.lname ? <span>{inputError.lname}</span> : ''}
                    </div>

                    <div className="col-12">
                        <label className="form-label d-flex">Email :</label>
                        <input type="email" className="form-control" placeholder="Enter Your Email" name="email" onChange={handleInput} value={userInput.email} /><br /><br />
                        {inputError.email ? <span>{inputError.email}</span> : ''}
                    </div>

                    <div className="col-12">
                        <label className="form-label d-flex">Password :</label>
                        <input type="password" className="form-control" placeholder="Enter Your Password" name="pass" onChange={handleInput} value={userInput.pass} /><br /><br />
                        {inputError.pass ? <span>{inputError.pass}</span> : ''}
                    </div>

                    <div className="col-12">
                        <label className="form-label d-flex">Contact :</label>
                        <input type="text" className="form-control"  placeholder="Enter Your Contact" name="contact" onChange={handleInput} value={userInput.contact} /><br /><br />
                        {inputError.contact ? <span>{inputError.contact}</span> : ''}
                    </div>

                    <div className="col-12">
                        <label className="form-label d-flex">City :</label>
                        <input type="text" className="form-control" placeholder="Enter Your City" name="city" onChange={handleInput}  value={userInput.city} /><br /><br /><br /><br />
                        {inputError.city ? <span>{inputError.city}</span> : ''}
                    </div>

                    <input type="submit" className="btn btn-primary" value={'Submit'}/>
                </form>
            </div>
            <h1 className="text-center my-5">View Data</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    {
                        storage.map((data) => {
                            return(
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{data.fname + " " + data.lname}</td>
                                            <td>{data.email}</td>
                                            <td>{data.contact}</td>
                                            <td>{data.city}</td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                    }
                </table>
            </div>
        </>
    )

}
export default UserForm;