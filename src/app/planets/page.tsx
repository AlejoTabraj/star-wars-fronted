"use client"
import { fetchData } from '@/tools/api';
import { useState } from 'react';
import Pagination from '../../components/Pagination';
import Link from 'next/link';
import { IPlanet, IQueryResponse } from '@/types/appTypes';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import SearchBar from '@/components/SearchBar';

// hola
export default function People() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [keyWord, setKeyWord] = useState<string>('');

  const { data } = useQuery<IQueryResponse<IPlanet>>({
    queryKey: ['planets', currentPage, keyWord],
    queryFn: () => fetchData(`/planets?page=${currentPage}&pageSize=10&name=${keyWord}`),
    placeholderData: keepPreviousData,
  })

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>{
      data && <>
        <div className="container mx-auto p-4 flex-grow max-w-[1120px]">
          <h1 className="text-2xl font-bold mb-4">Planets List</h1>
          <SearchBar setKeyWord={setKeyWord}></SearchBar>
          <ul className="space-y-2">
            {data.documents.map((item) => (
              <li key={item._id} className="p-4 border rounded-md shadow-sm">
                <Link href={`/planets/${item._id}`}>
                  <p className="text-blue-500 hover:underline">{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="container mx-auto pb-4">
          <Pagination
            currentPage={currentPage}
            totalPages={data.totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </>
    }
    </>
  );
}


