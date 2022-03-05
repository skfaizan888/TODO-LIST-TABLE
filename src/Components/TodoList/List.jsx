import React, { useState, useEffect } from "react";
import ReactDeleteRow from "react-delete-row";
import "./List.css";

const List = () => {
  const [status, setStatus] = useState("planned");
  const [text, setText] = useState({
    name: "",
    email: "",
    mobileno: "",
    projectname: "",
    status: "",
    describtion: "",
    startdate: "",
    enddate: "",
  });
  const [coll, setColl] = useState([]);
  const handleSave = () => {
    if (text.mobileno.length !== 10) {
      alert("Number should 10 digit");
    } else {
      sessionStorage.setItem("data", JSON.stringify([...coll, text]));
      setColl([...coll, text]);
    }
  };
  const handleStatus = (st) => {
    setText({ ...text, status: st });
  };
  useEffect(() => {
    if (text.mobileno.length >= 11) {
      window.alert("Please 10 digits NO");
    }
  }, [text]);
  useEffect(() => {
    if (text.name.length > 30) {
      window.alert("Please Enter Valid Name");
    }
  }, [text]);
  useEffect(() => {
    const savedData = sessionStorage.getItem("data");
    savedData && setColl(JSON.parse(savedData));
  }, []);
  return (
    <div>
      <u>
        {" "}
        <h1>TODO LIST</h1>
      </u>
      <input
        className="content-input-name"
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setText({ ...text, name: e.target.value })}
      />
      <br />
      <input
        className="content-input-email"
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setText({ ...text, email: e.target.value })}
      />
      <input
        className="content-input-number"
        type="number"
        placeholder="Enter Mobile No"
        onChange={(e) => setText({ ...text, mobileno: e.target.value })}
      />
      <br />
      <input
        className="content-input-project"
        type="text"
        placeholder="Enter Project Name"
        onChange={(e) => setText({ ...text, projectname: e.target.value })}
      />
      <br />
      <input
        className="content-input-desc"
        type="text"
        placeholder="Task Describtion"
        onChange={(e) => setText({ ...text, describtion: e.target.value })}
      />
      <br />
      <input
        className="content-input-start-date"
        type="date"
        placeholder="Start Date"
        onChange={(e) => setText({ ...text, startdate: e.target.value })}
      />
      <input
        className="content-input-target-date"
        type="date"
        placeholder="Target Date"
        onChange={(e) => setText({ ...text, enddate: e.target.value })}
      />
      <br />
      <p>
        <u>
          <h3> Task Status</h3>
        </u>
        <input
          type="radio"
          name="radio-01"
          onClick={() => handleStatus("planned")}
        />
        <b> planned</b>
        <input
          type="radio"
          name="radio-01"
          onClick={() => handleStatus("in-progress")}
        />{" "}
        <b> in-progress </b>
        <input
          type="radio"
          name="radio-01"
          onClick={() => handleStatus("done")}
        />{" "}
        <b>done</b>
      </p>
      <br />

      <button className="content-button-save" onClick={() => handleSave()}>
        save
      </button>
      <button className="content-button-view">view</button>
      <table className="content-table">
        <tr>
          <th>Serial no</th>
          <th>name</th>
          {/* <th>email</th> */}
          {/* <th>mobileno</th> */}
          <th>projectname</th>
          <th>status</th>
          <th>describtion</th>
          <th>start date</th>
          <th>end date</th>
        </tr>
        {coll.map((item, i) => (
          <tbody>
            <ReactDeleteRow
              key={i}
              data={item}
              onDelete={(item) => {
                return window.confirm("Are You Sure");
              }}
            >
              <td>{JSON.stringify(item.Serialno)}</td>
              <td>{JSON.stringify(item.name)}</td>
              {/* <td>{JSON.stringify(item.email)}</td> */}
              {/* <td>{JSON.stringify(item.mobileno)}</td> */}
              <td>{JSON.stringify(item.projectname)}</td>
              <td>{JSON.stringify(item.status)}</td>
              <td>{JSON.stringify(item.describtion)}</td>
              <td>{JSON.stringify(item.startdate)}</td>
              <td>{JSON.stringify(item.enddate)}</td>
              <td>
                <button>Edit</button>
              </td>
            </ReactDeleteRow>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default List;
