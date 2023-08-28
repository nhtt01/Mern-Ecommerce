import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const LoginForm = ({ show, onHide }) => {

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng Nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="UserName">
            <Form.Label htmlFor="UserName">UserName</Form.Label>
            <Form.Control
              type="text"
              id="UserName"
              placeholder="Enter your username"
            />
          </Form.Group>
          <Form.Group controlId="Password">
            <Form.Label htmlFor="Password">Password</Form.Label>
            <Form.Control
              type="password"
              id="Password"
              placeholder="Enter your password"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Đăng Nhập
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginForm
