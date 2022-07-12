import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Swal from "sweetalert2";
import ToggleButton from "react-toggle-button";
import { toast } from "react-toastify";

const phoneRegex = RegExp(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,10}$/
);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    border: "none",
    overflowY: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
    zIndex: "1000",
  },
};

const VerifyArtist = (props) => {
  const [docData, setdocData] = useState({});
  const [toggle, setToggle] = useState(docData.isProfileVerified);
  // const [verifyMerchant, setVerifyMerchant] = useState([]);
  const [placeOfferModel, setPlaceOfferModel] = useState(false);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  // const [artistPageNumber, setArtistPageNumber] = useState(1);
  const [totalMerchant, setToatlMerchant] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // let pageSize = 2;
  // let offset = "";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTogle = async ()=> {
    setToggle(docData.isProfileVerified)
    toast.success("Verify Merchants Successfully", {
      position: toast.POSITION.TOP_CENTER,
  });
  }
  // useEffect(async()=>{

  // },[])

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "Merchants"));
    let arr = [];
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    setdocData(arr);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(docData, "docData");

  // edit details of merchant validations

  const handleUserNameChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    if (val.trim() === "") {
      setUserNameError("User Name is required"); //validations for name field
    } else {
      setUserNameError("");
    }
    setUserName(val.trim());
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    if (val.trim() === "") {
      setNameError("Your Name is required"); //validations for name field
    } else {
      setNameError("");
    }
    setName(val.trim());
  };

  const handlePhoneChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    if (val.trim() === "") {
      //validations for phone
      setPhoneError("Phone Number is required");
    } else if (!phoneRegex.test(val)) {
      setPhoneError("Enter a valid Phone Number ");
    } else {
      setPhoneError("");
    }
    setPhone(val.trim());
  };

  const handleSubmit = async (e) => {};

  //  const loadMoreArtist = async() =>{

  //     offset = pageSize * artistPageNumber;
  //     const loadVerifyUsers = await props.admin.loadMoreUsers(offset, pageSize);
  //     const _users_ = verifyArtistes.concat(loadVerifyUsers.data.data.allUsers);
  //     setVerifyArtistes( _users_);
  //     setArtistPageNumber(artistPageNumber+1);

  //     }

  const handleBlock = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Block it!",
    }).then((result) => {
      // if (result.isConfirmed) {
      //   Swal.fire(
      //     'Deleted!',
      //     'Your file has been deleted.',
      //     'success'
      //   )
      // }
    });
  };
  const DeleteUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // if (result.isConfirmed) {
      //   Swal.fire(
      //     'Deleted!',
      //     'Your file has been deleted.',
      //     'success'
      //   )
      // }
    });
  };

  return (
    <div>
      <Modal
        isOpen={placeOfferModel}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="card">
          <div className="card1">
            <div className="text-center">Edit Details</div>
          </div>
          <div>
            <div className="form-group has-feedback ">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={docData.username}
                onChange={handleUserNameChange}
              />
              {userNameError && <span className="error">{userNameError}</span>}
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>

            <div className="form-group has-feedback">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={handleNameChange}
              />
              {nameError && <span className="error">{nameError}</span>}
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>

            <div className="form-group has-feedback ">
              <input
                type="number"
                className="form-control"
                placeholder="Phone"
                onChange={handlePhoneChange}
              />
              {phoneError && <span className="error">{phoneError}</span>}
              <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>

            <div className="flex">
              <div
                className=" btn btn-bordered-black btn-success mt-2 mx-5"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              >
                Submit
              </div>
              <div
                className=" btn btn-bordered-black btn-success mt-2 mx-5"
                onClick={() => setPlaceOfferModel(false)}
              >
                Back
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <table className="table table-striped">
        <thead className="thead-light">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">UID</th>
            <th scope="col">UserName</th>
            <th scope="col">Email </th>
            <th scope="col">Phone</th>
            <th scope="col">Name</th>
            <th scope="col">Verify</th>
            <th scope="col">KYC </th>
            <th scope="col">Image</th>
            <th scope="col">Menu</th>
          </tr>
        </thead>
        <tbody>
          {docData && docData.length > 0 ? (
            <React.Fragment>
              {docData.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td><b>{item.uid}</b></td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.name}</td>
                    <td> <ToggleButton value={toggle}
                     onClick={()=>handleTogle()}/></td>
                    <td><ToggleButton /></td>
                    <td>
                      <img src={item.image} alt="" className="avatar" />
                    </td>
                    <td>
                      {" "}
                      <Button
                        id="demo-positioned-button"
                        aria-controls={
                          open ? "demo-positioned-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </Button>
                      <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            setPlaceOfferModel(true);
                          }}
                        >
                          Edit
                        </MenuItem>
                        <MenuItem onClick={handleBlock}>Block</MenuItem>
                        <MenuItem
                          onClick={(e) => {
                            e.preventDefault();
                            DeleteUser();
                          }}
                        >
                          Delete
                        </MenuItem>
                      </Menu>
                    </td>
                  </tr>
                );
              })}
            </React.Fragment>
          ) : (
            <tr>
              <td colSpan="10 mt-2">No results found!</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="center">
        {docData.length < totalMerchant ? (
          <button
            className="loadMore"
            onClick={(e) => {
              e.preventDefault();
              // loadMoreArtist();
            }}
          >
            Load More Artist
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default VerifyArtist;



// File created by sourav mishra on 11/7/22