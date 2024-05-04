import { useEffect, useReducer } from "react";
import { Form, Input, Button, Divider, Select } from "antd";
import { reducer, initialState } from "../../reducer";

const FormComponent = ({ setName, setEmail, setGender, setPassword }) => {
  const [formData, dispatch] = useReducer(reducer, initialState);
  const handleInputChange = (label, value) => {
    dispatch({
      type: "FILL",
      payload: {
        label,
        data: value,
      },
    });
  };

  useEffect(() => {
    setName(formData.name);
    setEmail(formData.email);
    setGender(formData.gender);
    setPassword(formData.password);
    console.log(formData);
  }, [formData]);

  return (
    <div style={{ width: 400, margin: "0 auto" }}>
      <Divider orientation="center">Form</Divider>
      <Form size="small" layout="vertical">
        <Form.Item label="Name">
          <Input
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Gender">
          <Select
            showSearch
            placeholder="Select gender"
            optionFilterProp="children"
            value={formData.gender}
            onChange={(value) => handleInputChange("gender", value)}
            options={[
              {
                value: "male",
                label: "Male",
              },
              {
                value: "female",
                label: "Female",
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
