import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function BookList(props) {
    const information = [
        {
            id: 1,
            url: 'https://picsum.photos/200/300',
            name: 'Sahil',
            designation: 'Chief Medical Officer',
            price: '$300',
        },
        {
            id: 2,
            url: 'https://picsum.photos/200/300',
            name: 'Meet',
            designation: 'Anesthesiologist',
            price: '$600',
        },
        {
            id: 3,
            url: 'https://picsum.photos/200/300',
            name: 'Rajan',
            designation: 'Cardiology',
            price: '$400',
        },
        {
            id: 4,
            url: 'https://picsum.photos/200/300',
            name: 'Divyesh',
            designation: 'Neurosurgeon',
            price: '$800',
        }
    ]

    return (
        <div>
            <div className="container">
                

                <div className="row col-12">
                    {
                        information.map((value, i) => {
                            return (
                                <Card
                                    style={{
                                        width: '18rem',
                                        padding: "5px",
                                        margin: "10px"
                                    }}
                                >
                                    <img
                                        alt="Sample"
                                        src={value.url}
                                        style={{
                                            height: '18rem',
                                            padding: "10px"
                                        }}
                                    />
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            {value.name}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            {value.designation}
                                        </CardSubtitle>
                                        <CardText>
                                            {value.price}
                                        </CardText>
                                        <Button>
                                            Button
                                        </Button>
                                    </CardBody>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default BookList;