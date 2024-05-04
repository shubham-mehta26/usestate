import { Card } from "antd";

const Details = ({ name, email, gender, password }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card
        size="small"
        title="Functionality of useState and useReducer hooks in React"
        extra={<a href="#">By: Manu</a>}
        style={{ width: "90vw" }}
      >
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Password:</strong> {password}
        </p>
      </Card>
    </div>
  );
};

export default Details;
