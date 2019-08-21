import React from 'react';
import {Table, Button} from 'reactstrap';

const UserTable = (props) => {
    const deleteBand = (band) => {
        fetch(`http://localhost:3000/search/getall/${band.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization' : props.token
            })
        })
        .then(() => props.fetchBands())
    }

    const bandMapper = () => {
        return props.bands.map((band, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{band.id}</th>
                <td>{band.bandName}</td>
                <td>{band.url}</td>
                <td>{band.city}</td>
                <td>{band.genre}</td>
                <td>{band.version}</td>
                <td>{band.comments}</td>
                <td>
                    <Button >Add to my bands</Button>
                    <Button onClick={() => {deleteBand(band)}}>Delete from my bands</Button> 
                </td>

                </tr>
            )
        })
    }
    return( 
        <>
        <h3>My Bands</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Band Name</th>
                    <th>URL</th>
                    <th>City</th>
                    <th>Genre</th>
                    <th>Original/Covers/Mix</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                {bandMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default UserTable;