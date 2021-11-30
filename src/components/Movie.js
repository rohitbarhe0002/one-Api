import React from 'react'
import { requestBooks, requestMovies } from '../thunks/request';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Button from 'react-bootstrap/Button'

export default function Movie() {

    const dispatch = useDispatch();
    const Movies = useSelector((state) => state.ListMovies.movies);
    console.log(Movies)

    useEffect(() => {
        dispatch(requestMovies());
    }, []);
    return (
        <>

            <div className="center">
                <h1>This is Movie List</h1>
            </div><br />
            <Table striped bordered hover variant>
                <thead>
                    <tr>

                        <th scope="col">Id</th>
                        <th scope="col">name</th>
                         <th scope="col">Button</th>

                    </tr>
                </thead>

                {Movies.map((Data) => (
                    <tbody>
                        <tr>

                            <td>{Data.name}</td>
                            <td>{Data._id}</td>
                            <Link  className="btn btn-primary" to={`/MovieQuotes/${Data._id}`}varient ="danger"><Button varient="warning">Quotes</Button></Link>


                        </tr>
                    </tbody>


                ))}
            </Table>
        </>
    )
}
