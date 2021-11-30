import React from 'react'
import { requestBooks, requestCharacters } from '../thunks/request';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux';

export default function Character() {
    const dispatch = useDispatch();
    const Characters = useSelector((state) => state.ListCharacters.characters);
    console.log(Characters)

    useEffect(() => {
        dispatch(requestCharacters());
    }, []);
    return (
        <>

            <div className="center">
                <h1>This is Character List</h1>
            </div><br />
            <Table striped bordered hover variant>
                <thead>
                    <tr>

                        <th scope="col">Id</th>
                        <th scope="col">name</th>

                    </tr>
                </thead>

                {Characters.map((Data) => (



                    <tbody>
                        <tr>

                            <td>{Data.name}</td>
                            <td>{Data._id}</td>

                        </tr>
                    </tbody>


                ))}
            </Table>
        </>
    )
}
