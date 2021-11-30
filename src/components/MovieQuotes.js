import React from 'react'
import { requestBooks, requestMovies, requestMoviesQuotes } from '../thunks/request';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

export default function MovieQuotes() {
    

    const dispatch = useDispatch();
    const moviesquotes = useSelector((state) => state.ListMoviesQuotes.moviesquotes);
    console.log(moviesquotes)
    const {id}=useParams()

    useEffect(() => {
        dispatch(requestMoviesQuotes(id));
    }, []);
    

    return (
        <>

            <div className="center">
                <h1>This is Movie Quotes</h1>
            </div><br />
            <Table striped bordered hover variant>
                <thead >
                    <tr>

                        <th scope="col">Id</th>
                        <th scope="col">name</th>

                    </tr>
                </thead>

                {moviesquotes.map((Data) => (



                    <tbody>
                        <tr>

                            <td>{Data.movie}</td>
                            <td>{Data._Id}</td>
                            

                        </tr>
                    </tbody>


                ))}
            </Table>
        </>
     
    )
}
