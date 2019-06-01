import React, { Children } from 'react';
import { Row, Col, Navbar, NavbarBrand } from "reactstrap";
import { Logo } from "../shared/logo";
import { interfaceDeclaration } from '@babel/types';

export interface IProps {
    title: string,
    children?: React.ReactFragment
}
/** A simple navigation bar that includes the ant logo */
const AntBar: React.FC<IProps> = (props: IProps) => {
    return (
        <Row>
            <Col>
                <Navbar dark expand="lg" color="dark" >
                    <NavbarBrand href="/">
                        <Logo width={48} height={48} light />{props.title}
                    </NavbarBrand>
                    <div className="ml-auto">
                        {
                            props.children
                        }
                    </div>
                </Navbar>
            </Col>
        </Row>
    );
}

export default AntBar;