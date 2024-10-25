import { useEffect, useState } from "react";
import { getUsers } from "../../services/Helper";
import generateUniqueId from "generate-unique-id";


const UserForm = () => {

    const [userInput, setUserInput] = useState({
        id : '',
        fname : '',
        lname : '',
        email : '',
        des : '',
        dept : '',
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

        if(userInput.des == ''){
            obj.des = "Designation Must Be Required...";
        }

        if(userInput.dept == ''){
            obj.dept = "Dept Must Be Required...";
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

    const handleSelect = (selectId) => {
        console.log("Select Id",selectId);
    }

    const handleEdit = (updateId) => {
        
        let editRec = storage.find((rec) => rec.id == updateId)
        
        setUserInput(editRec)
    }

    const handleDelete = (deleteId) => {
        let deleteRec = storage.filter((rec) => rec.id != deleteId)

        setStorage(deleteRec);
    }

    const formSubmit = (e) => {

        e.preventDefault();

        if(validation()){

            if(userInput.id != ''){
                
                let updateRec = storage.map((rec) => {

                    if(userInput.id == rec.id){
                        return userInput;
                    }else{
                        return rec;
                    }
                })
                setStorage(updateRec);
            }else{

                userInput.id = generateUniqueId({
                    length: 4,
                    useLetters: false
                });
                return setStorage([...storage, userInput]);
            }
            

            setUserInput({
                id: '',
                fname : '',
                lname : '',
                email : '',
                des : '',
                dept : '',
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
                        <input type="text" className="form-control" value={userInput.id} hidden />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label d-flex">Emp_Name :</label>
                        <input type="text" className="form-control" placeholder="Enter Emp Name" name="fname" onChange={handleInput} value={userInput.fname} />
                        {inputError.fname ? <span>{inputError.fname}</span> : ''}
                        <br/><br />
                    </div>
                    <div className="col-12">
                        <label className="form-label d-flex">Address :</label>
                        <textarea rows="5" cols="5" type="text" className="form-control" placeholder="Enter Address" name="lname" onChange={handleInput} value={userInput.lname} />
                        {inputError.lname ? <span>{inputError.lname}</span> : ''}
                        <br/><br />
                    </div>

                    <div className="col-7">
                        <label className="form-label d-flex">Email :</label>
                        <input type="email" className="form-control" placeholder="Enter Your Email" name="email" onChange={handleInput} value={userInput.email} />
                        {inputError.email ? <span>{inputError.email}</span> : ''}
                        <br /><br />
                    </div>

                    <div className="col-5">
                        <label className="form-label d-flex">Designation :</label>
                        <input type="text" className="form-control" placeholder="Enter Your Designation" name="des" onChange={handleInput} value={userInput.des} />
                        {inputError.des ? <span>{inputError.des}</span> : ''}
                        <br /><br />
                    </div>

                    <div className="col-6">
                        <label className="form-label d-flex">Department :</label>
                        <input type="text" className="form-control"  placeholder="Enter Your Department" name="dept" onChange={handleInput} value={userInput.dept} />
                        {inputError.dept ? <span>{inputError.dept}</span> : ''}
                        <br />
                    </div>

                    <div className="col-6">
                        <label className="form-label d-flex">City :</label>
                        <input type="text" className="form-control" placeholder="Enter City" name="city" onChange={handleInput}  value={userInput.city} />
                        {inputError.city ? <span>{inputError.city}</span> : ''}
                        <br /><br /><br />
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
                            <th scope="col">Designation</th>
                            <th scope="col">Department</th>
                            <th scope="col">City</th>
                            <th scope="col">Action</th>
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
                                            <td>{data.dept}</td>
                                            <td>{data.des}</td>
                                            <td>{data.city}</td>
                                            <td><button type="submit" className="btn btn-success" onClick={() => handleSelect(data.id)}>Select</button>
                                                <button type="submit" className="btn btn-primary mx-3 my-2" onClick={() => handleEdit(data.id)}>Edit</button>
                                                <button type="submit" className="btn btn-danger" onClick={() => handleDelete(data.id)}>Delete</button>
                                            </td>
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