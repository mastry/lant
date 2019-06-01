import React from 'react';
import { Card, CardTitle, CardHeader, CardBody, CardText, CardLink, CardFooter } from "reactstrap";

export interface IProps {
    header: string,
    title: string,
    video: string
}

const VideoCard: React.FC<IProps> = (props: IProps) => {
    return (
        <Card>
            <CardHeader>{props.header}</CardHeader>
            <CardBody>
                <CardTitle className="font-weight-bold">{props.title}</CardTitle>
                <iframe className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${props.video}`}
                    width={250}
                    height={167}
                    frameBorder="0"
                    allowFullScreen={true}>
                </iframe>
            </CardBody>
            <CardFooter>
                <CardLink href={`https://www.youtube.com/watch?v=${props.video}`}>Open</CardLink>
            </CardFooter>
        </Card>
    );
}

export default VideoCard;