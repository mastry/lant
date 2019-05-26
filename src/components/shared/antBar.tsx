import React from 'react';
import { Row, Col, Navbar, NavbarBrand } from "reactstrap";
import { Logo } from "../shared/logo";

const AntBar: React.FC = () => {
    return (
        <Row>
            <Col>
                <Navbar dark expand="lg" color="dark" >
                    <NavbarBrand href="/" className="mr-4">
                        <Logo width={48} height={48} light />Langton's Ant Simulator
                </NavbarBrand>
                </Navbar>
            </Col>
        </Row>
    );
}

export default AntBar;