import React from 'react'
import { requestBooks, requestMovies } from '../thunks/request';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Button from 'react-bootstrap/Button'
import { setMoviesFilters} from '../actions';


export default function Movie() {

    const dispatch = useDispatch();
    const Movies= useSelector((state) => state.ListMovies.movies);
    const filters  = useSelector((state) => state.MovieFilter.movie);
    console.log(Movies);
    console.log(filters);

    useEffect(() => {
        
    const  getrequest = () =>{
        dispatch(requestMovies(filters));
    }
    getrequest();
    }, [filters.budgetInMillions,filters.runtimeInMinutes,filters.orderBy, filters.order]);


  const handleInputChange = (event) => {
      event.preventDefault()
    const { value, name } = event.target;
    dispatch(setMoviesFilters({ [name]: value }));
  };
    return (

        <>
          
          <select name="orderBy" value={filters.orderBy} onChange={handleInputChange}>
        <option value="academyAwardWins">academyAwardWins</option>
        <option value="name">name</option>
        <option value="rottenTomatoesScore">wins</option>
      </select>

      <select name="order" value={filters.order} onChange={handleInputChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

   
      <select name="budgetInMillions" value={filters.budgetInMillions} onChange={handleInputChange}>
        <option value={50}>50</option>
        <option value={100}>100</option>
        <option value={150}>150</option>
        <option value={200}>200</option>
        <option value={250}>250</option>
      </select>


      <select name="runrimeInMinutes" value={filters.runtimeInMinutes} onChange={handleInputChange}>
       value: <option value={200}>50</option>
        <option value={300}>100</option>
        <option value={450}>150</option>
        <option value={800}>200</option>
        <option value={650}>250</option>
      </select>
     

            <div className="center">
                <div className="heading">
                <h1 >This is Movie List</h1>
                </div>
            </div><br />
            <Table striped bordered hover variant>
                <thead>
                    <tr>

                        <th scope="col">Id</th>
                        <th scope="col">name</th>
                        <th scope="col">budgetInMillions</th>
                        <th scope="col">runtimeInMinutes</th>
                         <th scope="col">Button</th>

                    </tr>
                </thead>

                {Movies.map((Data) => (
                    <tbody>
                        <tr>

                            <td>{Data.name}</td>
                            <td>{Data._id}</td>
                            <td>{Data.budgetInMillions}</td>
                            <td>{Data.runtimeInMinutes}</td>
                           <td> <Link  className="btn btn-primary" to={`/MovieQuotes/${Data._id}`}varient ="danger"><Button varient="warning">Quotes</Button></Link></td>


                        </tr>
                    </tbody>


                ))}
            </Table>
        </>
    )
}
