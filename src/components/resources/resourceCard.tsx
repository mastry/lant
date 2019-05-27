import React from 'react';
import { Card, CardTitle, CardHeader, CardBody, CardText, CardLink, CardFooter } from "reactstrap";

export interface IProps {
    header: string,
    title: string,
    text: string,
    link: string
}

const ResourceCard: React.FC<IProps> = (props: IProps) => {
    return (
        <Card>
            <CardHeader>{props.header}</CardHeader>
            <CardBody>
                <CardTitle className="font-weight-bold">{props.title}</CardTitle>
                <CardText>
                    {props.text}
                </CardText>
            </CardBody>
            <CardFooter>
                <CardLink href={props.link}>Open</CardLink>
            </CardFooter>
        </Card>
    );
}

export default ResourceCard;