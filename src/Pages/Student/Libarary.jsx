
// import JsonData from '../data.json'

// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import HomeHelper from '../../Components/HomeHelper'
// import { useHistory } from 'react-router-dom'




// function JsonDataDisplay() {
//   const store = useSelector((store) => store)
//   const history = useHistory()
//   const DisplayData = JsonData.map(
//     (info) => {
//       return (
//         <tr>
//           <td>{info.title}</td>
//           <td>{info.Std}</td>
//           <td>{info.Medium}</td>
//           <td> <img src={info.imageLink} alt="image" srcset="" width="150"/></td>

//           <td><a href={info.link} target="_blank">Book</a></td>
//         </tr>
//       )
//     }
//   )

//   return (

//     <>
//       {store.student.isAuthenticated ?
//         <>
//           <HomeHelper />
//           <div>
//             <table class="table table-striped">
//               <thead>
//                 <tr>
//                   <th>Title</th>
//                   <th>Std</th>
//                   <th>Medium</th>
//                   <th>Image</th>
//                   <th>Link</th>
//                 </tr>
//               </thead>
//               <tbody>


//                 {DisplayData}

//               </tbody>
//             </table>

//           </div>
//         </> : (history.push('/'))}
//     </>


//   )
// }

// export default JsonDataDisplay;


import BookCard from './BookCard';

import JsonData from '../data.json'

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeHelper from '../../Components/HomeHelper'
import { useHistory } from 'react-router-dom'
import '../../stylesheets/bookCard.css';



function JsonDataDisplay() {
  const store = useSelector((store) => store)
  const history = useHistory()
  const [searchKey, setSearchKey] = useState('')
  const [filterType, setFilterType] = useState('')
  // const DisplayData = JsonData.map(
  //   (info) => {
  //     return (
  //       <tr>
  //         <td>{info.title}</td>
  //         <td>{info.Std}</td>
  //         <td>{info.Medium}</td>
  //         <td> <img src={info.imageLink} alt="image" srcset="" width="150" /></td>

  //         <td><a href={info.link} target="_blank">Book</a></td>
  //       </tr>
  //     )
  //   }
  // )

  let bookList;


  bookList = JsonData.map((book, k) =>
    <BookCard book={book} key={k} />
  );


  return (

    <>
      {store.student.isAuthenticated ?
        <>
          <HomeHelper />
          <div className='d-flex w-50 align-items-center my-3 justify-content-center' style={{margin:"auto"}}>
            <input type="text"
              value={searchKey}
              onChange={(e) => { setSearchKey(e.target.value) }}
              className='form-control' placeholder='search books' />
            <select className='form-control mt-3' value={filterType}
              onChange={(e) => { setFilterType(e.target.value) }}>
              <option value="">All</option>
              <option value="10th">10th</option>
              <option value="9th">9th</option>
              <option value="8th">8th</option>
              <option value="7th">7th</option>
              <option value="6th">6th</option>
              <option value="5th">5th</option>
            </select>
          </div>
          <div className="ShowBookList">
            <div className="container">
              <div className="list" >
                {JsonData
                  .filter(obj => obj.title.toLowerCase().includes(searchKey))
                  .filter(obj => obj.Std.toLowerCase().includes(filterType))
                  .map((book) => {

                    return <div className="card-container">

                      <a href={book.link} target="_blank"> <img src={book.imageLink} alt="image" width="200" /></a>

                      <div className="desc">
                        <a href={book.link} target="_blank" className='book_link'><h2>{book.title}</h2></a>

                        <h3>{book.Std}</h3>
                        <p>{book.Medium}</p>
                      </div>
                    </div>


                    // <div className='col-md-4'>
                    //   <div className='m-2 p-1 product'>
                    //     <div className="card-container">

                    //       <a href={book.link} target="_blank"> <img src={book.imageLink} alt="image" width="200" /></a>

                    //       <div className="desc">
                    //         <a href={book.link} target="_blank" className='book_link'><h2>{book.title}</h2></a>

                    //         <h3>{book.Std}</h3>
                    //         <p>{book.Medium}</p>
                    //       </div>
                    //     </div>


                    //   </div>
                    // </div>
                  })}
              </div>
            </div>
          </div>
        </> : (history.push('/'))}
    </>


  )
}

export default JsonDataDisplay;
