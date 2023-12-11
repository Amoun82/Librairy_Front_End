import React, { useEffect, useState } from 'react'
import axios from "axios";
import { URL } from '../utils/constant/backURL';

const Livres = () => {

  const [listBooks, setListBooks] = useState([]);

  const books = async () => {
    await axios.get(URL.books + '?page=1'
    ).then((res) => {
      // console.log(res.data['hydra:member']);
      setListBooks(
        res.data['hydra:member']
      )
    }).catch(function (error) {
      // handle error
      console.log('erreur', error.response.status);
      if (error.response.status === 401) {
      }
    })
  }

  useEffect(() => {
    books();
  }, [])

  return (
    <div className='flex justify-center'>

      {listBooks && (
        <div className="flex justify-center flex-col md:flex-row md:flex-wrap">
          {listBooks.map((book) => {
              return <div key={book.id} className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2 md:w-1/4">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{book.title}</div>
                  <p className="text-gray-700 text-base">
                    {book.summary.slice(0,50)}
                  </p>
                  <p>{book.isbn}</p>
                </div>
              </div>
          })}
        </div>
      )}

    </div>
  )
}

export default Livres