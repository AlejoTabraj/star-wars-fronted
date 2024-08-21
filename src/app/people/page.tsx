"use client"
import { fetchData } from '@/tools/api';
import { useState, useEffect } from 'react';
import Pagination from '../../../components/Pagination';
import Link from 'next/link';
import { IPerson } from '@/types/appTypes';



export default function People() {
  const [items, setItems] = useState<IPerson[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchItems = async () => {
      const { documents, totalPages } = await fetchData(`/people?page=${currentPage}&pageSize=10`);
      setItems(documents);
      setTotalPages(totalPages);
    };

    fetchItems();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="container mx-auto p-4 flex-grow max-w-[1120px]">
        <h1 className="text-2xl font-bold mb-4">People List</h1>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item._id} className="p-4 border rounded-md shadow-sm">
              <Link href={`/people/${item._id}`}>
                <p className="text-blue-500 hover:underline">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mx-auto pb-4">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </div>
    </>
  );
}


