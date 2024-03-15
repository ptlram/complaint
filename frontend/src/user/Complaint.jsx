import React from "react";
import Nevbar from "./Nevbar";
import "../css/complaint.css";
import Footer from "./Footer";

const Complaint = () => {
        return (
                <>
                        <Nevbar />
                        <div className="com" >

                                <b>complint title</b><input className="in" type="textbox"
                                        name="complint"
                                        placeholder="what is your problem" />



                                <b>complaint description</b><input className="in" type="textarea"
                                        name="description"
                                        placeholder="description" />


                                <b>District</b><input className="in" type="textbox"
                                        name="district"
                                        placeholder="enter district" />



                                <b>Pincode</b><input className="in" type="textbox"
                                        name="pincode"
                                        placeholder="enter pincod" />


                                <b>loction</b><input className="in" type="textbox"
                                        name="location"
                                        placeholder="location of complaint" />



                                <b>Contact</b><input className="in" type="textbox"
                                        name="contact"
                                        placeholder="enter your contact no." />



                                <b>Upload proff</b> <input className="in" type="textbox"
                                        name="upload"
                                        placeholder="upload image" />
                        </div>
                        <div>
                                <Footer />
                        </div>
                </>
        )
}

export default Complaint;