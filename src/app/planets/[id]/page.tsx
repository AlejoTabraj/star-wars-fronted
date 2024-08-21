"use client"
import { fetchData } from '@/tools/api';
import { IFilm, IPerson, IPlanet } from '@/types/appTypes';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ItemDetails() {
  const [planet, setplanet] = useState<IPlanet | null>(null);
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetchData(`/planets/${id}`);
      setplanet(data);
    };

    fetchItems();
  }, [id]);

  if (!planet) {
    return <div>Item not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
    <button 
      className="border border-transparent text-blue-500 px-4 py-2 rounded-md mb-6 hover:border-blue-500"
      onClick={() => window.history.back()}
    >
      Back
    </button>

    <h1 className="text-4xl font-bold mb-6 text-center">{planet.name}</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-4 text-gray-100">Details</h2>
        <ul className="space-y-2">
          <li><span className="font-semibold">Rotation Period:</span> {planet.rotationPeriod} hours</li>
          <li><span className="font-semibold">Orbital Period:</span> {planet.orbitalPeriod} days</li>
          <li><span className="font-semibold">Diameter:</span> {planet.diameter} km</li>
          <li><span className="font-semibold">Climate:</span> {planet.climate}</li>
          <li><span className="font-semibold">Gravity:</span> {planet.gravity}</li>
          <li><span className="font-semibold">Terrain:</span> {planet.terrain}</li>
          <li><span className="font-semibold">Surface Water:</span> {planet.surfaceWater}%</li>
          <li><span className="font-semibold">Population:</span> {planet.population}</li>
        </ul>
      </div>


      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-4 text-gray-100">Residents</h2>
        <ul className="space-y-2">
          {planet.residents.map((resident: Partial<IPerson>) => (
            <li key={resident._id}>
              <Link href={`/people/${resident._id}`}>
                <p className="text-blue-400 hover:text-blue-600 hover:underline">
                  {resident.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>


      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-4 text-gray-100">Films</h2>
        <ul className="space-y-2">
          {planet.films.map((film: Partial<IFilm>) => (
            <li key={film._id}>
              <Link href={`/films/${film._id}`}>
                <p className="text-blue-400 hover:text-blue-600 hover:underline">
                  {film.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
}


