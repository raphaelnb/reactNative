import React from "react";
import { H1, Icon, Row } from 'native-base'

export default function Rating(props) {
    return (
        <Row>
            <H1>Rating: {props.rating} </H1>
            { props.rating >= 1 
            ? <Icon type="FontAwesome" name="star" />
            : <Icon type="FontAwesome" name="star-o" />
            }
            { props.rating >=2 
            ? <Icon type="FontAwesome" name="star" />
            : <Icon type="FontAwesome" name="star-o" />
            }
            { props.rating >=3 
            ? <Icon type="FontAwesome" name="star" />
            : <Icon type="FontAwesome" name="star-o" />
            }
            

        </Row>

    ) 
}