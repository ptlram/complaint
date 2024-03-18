import React from "react";
import AdNevbar from "./adminNevbar";

const Newcom = ({ complaint }) => {
  return (
    <>
      <div>
        <AdNevbar />
      </div>
      <div>
        {complaint.map((data, i) => {
          return (
            <>
              {/* <p>{data.title}</p>
            <div key={i}>{data.title}</div> */}
              <div className="complaint-details-container">
                <h2>Complaint Details</h2>
                <div className="complaint-details">
                  <p>
                    <strong>Title:</strong> {data.title}
                  </p>
                  <p>
                    <strong>Description:</strong> {data.description}
                  </p>
                  <p>
                    <strong>District:</strong> {data.district}
                  </p>
                  <p>
                    <strong>Pincode:</strong> {data.pincode}
                  </p>
                  <p>
                    <strong>Location:</strong> {data.location}
                  </p>
                  <p>
                    <strong>Contact:</strong> {data.contact}
                  </p>
                  <p>
                    <strong>Proof:</strong> {data.proff}
                  </p>
                  <button className="bt">assign</button>
                  <button className="bt">reject</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Newcom;
