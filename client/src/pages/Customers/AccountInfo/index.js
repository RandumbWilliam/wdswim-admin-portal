import React, { useEffect, useState } from "react";
import {
  Container,
  Modal,
  Button,
  Icon,
  Header,
  Form,
  Label,
  Input,
  Menu,
  Segment,
} from "semantic-ui-react";
import { PageContainer } from "../../../styles/StyledElements";
import { CustomTable, CustomButton } from "./StyledAccountHolders";
import { useDispatch } from "react-redux";
import {
  addAccountHolders,
  getAccountHolder,
  getOneAccountHolder,
} from "../../../actions/accountHolders";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile";

const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  allergies: "",
  allergiesActions: "",
  notes: "",
};
const AccountInfo = () => {
  const [open, setOpen] = useState(false);
  const [tableTab, setTab] = useState("Profile");
  const [formData, setFormData] = useState(initialState);
  const { id } = useParams();

  console.log(id);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAccountHolders(formData, navigate));
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getAccountHolder(), getOneAccountHolder());
  }, []);

  return (
    <PageContainer>
      <Container>
        <Menu attached="top" tabular>
          <Menu.Item
            name="Profile"
            active={tableTab === "Profile"}
            onClick={() => setTab("Profile")}
          />
          <Menu.Item
            name="Students"
            active={tableTab === "Students"}
            onClick={() => setTab("Students")}
          />
          <Menu.Item
            name="Class"
            active={tableTab === "Class"}
            onClick={() => setTab("Class")}
          />
          <Menu.Item
            name="Payment"
            active={tableTab === "Payment"}
            onClick={() => setTab("Payment")}
          />
          <Menu.Item
            name="Absence"
            active={tableTab === "Absence"}
            onClick={() => setTab("Absence")}
          />
        </Menu>
        <Segment attached="bottom">
          {(() => {
            switch (tableTab) {
              case "Profile":
                return <Profile />;
              case "Students":
                return <>test2</>;
              case "Class":
                return <>test3</>;
              case "Payment":
                return <>test4</>;
              default:
                return null;
            }
          })()}
        </Segment>
      </Container>
    </PageContainer>
  );
};

export default AccountInfo;
