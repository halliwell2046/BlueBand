import React, {useState} from 'react';
import {Table, Button} from 'reactstrap';
import './UserTable.css';

const UserTable = (props) => {
    // const CreateFav = (band) => {
    //     fetch(`http://localhost:3000/search/getall/${band.id}`, {
    //         method: 'GET',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization' : props.token
    //         })
    //     })
    // }


        const[bandId, setBandId] = useState('');

        const handleSubmit = (event, bandId) => {
            event.preventDefault();
            console.log(props.userId);
            fetch('http://localhost:3000/fav/createfav',{
                method: 'POST',
                body: JSON.stringify({user:{userId: props.userId, bandId: bandId}}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            }) .then(
                (response) => response.json()
            ) .then((data) => {
                console.log(data);
                // props.updateToken(data.sessionToken);
            })
            .catch(err => console.log(err))
        }

    const bandMapper = () => { //handleSubmit(e, band.id, )
        return props.bands.map((band, index) => {
            // console.log(band,index);
            return(
                <tr key={index}>
                    {/* <th scope="row">{band.id}</th> */}
                <td>{band.bandName}</td>
                <td>{band.url}</td>
                <td>{band.city}</td>
                <td>{band.genre}</td>
                <td>{band.version}</td>
                <td>
                    <Button onClick={(event) => handleSubmit(event, index)} className="addbutton" >Add to my Artists</Button>
                </td>

                </tr>
            )
        })
    }

    return( 
        <div className="App">
        <h3>Artists </h3>
        <Table  id="table" striped>
            <thead>
                <tr>
                    {/* <th>#</th> */}
                    <th>Artist Name</th>
                    <th>URL</th>
                    <th>City</th>
                    <th>Genre</th>
                    <th>Original/Covers/Mix</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {bandMapper()}
            </tbody>
        </Table>
        </div>
    )
}

export default UserTable;