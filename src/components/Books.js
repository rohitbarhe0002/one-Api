import React from 'react'
import { requestBooks } from '../thunks/request';
import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux';

export default function Books() {
    const dispatch = useDispatch();
    const Books = useSelector((state) => state.ListBooks.books);
    console.log(Books)

    useEffect(() => {
        dispatch(requestBooks());
    }, []);
    return (
        <>

            <div className="center">
                <h1>This is Books List</h1>
            </div><br />
            <Table striped bordered hover variant>
                <thead>
                    <tr>

                        <th scope="col">Id</th>
                        <th scope="col">name</th>

                    </tr>
                </thead>

                {Books.map((Data) => (



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
