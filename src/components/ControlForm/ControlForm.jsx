import { useState } from "react";

const ControlForm = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    const [city, setCity] = useState('');

    const handleFname = (e) => {

        setFname(e.target.value);
    }

    const handleLname = (e) => {

        setLname(e.target.value);
    }

    const handleEmail = (e) => {

        setEmail(e.target.value);
    }

    const handlePassword = (e) => {

        setPassword(e.target.value);
    }

    const handleContact = (e) => {

        setContact(e.target.value);
    }

    const handleCity = (e) => {

        setCity(e.target.value);
    }

    const dataRetrive = (e) => {

        e.preventDefault();

        console.log("Detail Information: ");
        console.log("Name : ", fname, " ", lname);
        console.log("Email : ", email);
        console.log("Password : ", password);
        console.log("Contact : ", contact);
        console.log("City : ", city);

        setFname('');
        setLname('');
        setEmail('');
        setPassword('');
        setContact('');
        setCity('');
    }

    return(
        <>
            <h1>Control Form</h1>
            <form onSubmit={dataRetrive}>
                <label>First Name :</label>
                <input type="text" value={fname} placeholder="Enter First Name" onChange={handleFname} name="fname"/><br /><br />

                <label>Last Name :</label>
                <input type="text" value={lname} placeholder="Enter Last Name" onChange={handleLname} name="lname"/><br /><br />
                
                <label>Email :</label>
                <input type="email" value={email} placeholder="Enter Your Email" onChange={handleEmail} name="email"/><br /><br />

                <label>Password :</label>
                <input type="password" value={password} placeholder="Enter Your Password" onChange={handlePassword} name="pass"/><br /><br />

                <label>Contact :</label>
                <input type="text" value={contact} placeholder="Enter Your Contact" onChange={handleContact} name="contact"/><br /><br />

                <label>City :</label>
                <input type="text" value={city} placeholder="Enter Your City" onChange={handleCity} name="city"/><br /><br /><br /><br />

                <input type="submit" value={'Submit'}/>
            </form>
        </>
    )

}
export default ControlForm;