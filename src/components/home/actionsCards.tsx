import React from 'react';
import {
    Card,
    CardText,
    CardLink,
    CardBody,
    CardDeck,
    CardHeader
} from "reactstrap";

const ActionCards: React.FC = () => {
    return (
        <CardDeck>
            <Card>
                <CardHeader>Learn</CardHeader>
                <CardBody className="bg-light">
                    <CardText>
                        Learn more about Lanton's Ant with these resources.
              </CardText>
                    <CardLink href="/resources">View Resources</CardLink>
                </CardBody>
            </Card>

            <Card>
                <CardHeader>Play</CardHeader>
                <CardBody className="bg-light">
                    <CardText>
                        Start the ant simulator and generate your own masterpiece.
              </CardText>
                    <CardLink href="/simulator">Run Simulator</CardLink>
                </CardBody>
            </Card>

            <Card>
                <CardHeader>Gawk</CardHeader>
                <CardBody className="bg-light">
                    <CardText>See what others have created in the gallery.</CardText>
                    <CardLink href="/gallery">Open Gallery</CardLink>
                </CardBody>
            </Card>
        </CardDeck>
    )
}

export default ActionCards;
