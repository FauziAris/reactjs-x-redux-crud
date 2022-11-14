import React from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { CardHeading, GeoAltFill } from "react-bootstrap-icons";
import { useController, useForm } from "react-hook-form";

const InputText = ({
  icon: Icon,
  placeholder = "Enter...",
  name,
  control,
  id,
}) => {
  const { field } = useController({
    name,
    control,
  });
  const { onChange, value } = field;
  return (
    <InputGroup>
      <InputGroup.Text id={id}>
        <Icon />
      </InputGroup.Text>
      <Form.Control
        placeholder={placeholder}
        aria-label={name}
        aria-describedby={id}
        name={name}
        onChange={onChange}
        value={value}
      />
    </InputGroup>
  );
};

const InputCheckBox = ({ name, control, id }) => {
  const { field } = useController({
    name,
    control,
  });
  const { onChange, value } = field;
  return (
    <Form.Check
      type="checkbox"
      id={id}
      label={`Full Time Only`}
      className="mt-2"
      onChange={onChange}
      checked={value}
    />
  );
};

const FormFilter = ({ onFilter = () => {} }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      description: "",
      location: "",
      full_time: true,
    },
  });

  const onSubmit = (data) => {
    onFilter(data);
  };
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs="12" md="4">
            <Form.Group controlId="input-description">
              <Form.Label className="fw-bold">Jon Description</Form.Label>
              <InputText
                icon={CardHeading}
                name="description"
                control={control}
                placeholder="Filter description..."
                id="input-description"
              />
            </Form.Group>
          </Col>
          <Col xs="12" md="4">
            <Form.Group controlId="input-location">
              <Form.Label className="fw-bold">Location</Form.Label>
              <InputText
                icon={GeoAltFill}
                name="location"
                control={control}
                placeholder="Filter location..."
                id="input-location"
              />
            </Form.Group>
          </Col>
          <Col className="d-flex align-items-center justify-content-between">
            <span className="me-3">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label className="fw-bold"></Form.Label>
                <InputCheckBox
                  name="full_time"
                  control={control}
                  id="input-full_time"
                />
              </Form.Group>
            </span>
            <span className="align-self-end">
              <Button
                variant="dark"
                className="d-block"
                onClick={handleSubmit(onSubmit)}
              >
                Search
              </Button>
            </span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FormFilter;
