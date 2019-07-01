import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import { Button } from 'react-bootstrap';
 
const redirectToOwnerDetails = (id, history) => {
    history.push('/ownerDetails/' + id);
}
 
const redirectToUpdateOwner = (id, history) => {
    history.push('/updateOwner/' + id);
}
 
const rediterctToDeleteOwner = (id, history) => {
    history.push('/deleteOwner/' + id);
}
 
const owner = (props) => {
    return (
        <Aux>
            <tr>
                <td>{props.owner.nimi}</td>
                <td>
                    <Button onClick={() => redirectToOwnerDetails(props.owner.id, props.history)}>Detailid</Button>
                </td>
                <td>
                    <Button bsStyle="success" onClick={() => redirectToUpdateOwner(props.owner.id, props.history)}>Uuenda</Button>
                </td>
                <td>
                    <Button bsStyle="danger" onClick={() => rediterctToDeleteOwner(props.owner.id, props.history)}>Kustuta</Button>
                </td>
            </tr>
        </Aux>
    )
}
 
export default owner;