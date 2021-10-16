import React from 'react'
import { Button } from 'react-bootstrap';
import './button.styles.css'

const CustomButton = ({ children }) => (

    <Button className="custom-button text-light btn-lg"> { children } </Button>
)

export default CustomButton
