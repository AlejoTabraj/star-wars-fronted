"use client"
import { fetchData } from '@/tools/api';
import { IFilm, IPerson, IStarship } from '@/types/appTypes';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ItemDetails() {
  const [starship, setstarship] = useState<IStarship | null>(null);
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetchData(`/starships/${id}`);
      setstarship(data);
    };

    fetchItems();
  }, [id]);

  if (!starship) {
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

      <h1 className="text-4xl font-bold mb-6 text-center">{starship.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-100">Details</h2>
          <ul className="space-y-2">
            <li><span className="font-semibold">Model:</span> {starship.model}</li>
            <li><span className="font-semibold">Manufacturer:</span> {starship.manufacturer}</li>
            <li><span className="font-semibold">Cost in Credits:</span> {starship.costInCredits}</li>
            <li><span className="font-semibold">Length:</span> {starship.length} meters</li>
            <li><span className="font-semibold">Max Atmospheric Speed:</span> {starship.maxAtmospheringSpeed} km/h</li>
            <li><span className="font-semibold">Crew:</span> {starship.crew}</li>
            <li><span className="font-semibold">Passengers:</span> {starship.passengers}</li>
            <li><span className="font-semibold">Cargo Capacity:</span> {starship.cargoCapacity} kg</li>
            <li><span className="font-semibold">Consumables:</span> {starship.consumables}</li>
            <li><span className="font-semibold">Hyperdrive Rating:</span> {starship.hyperdriveRating}</li>
            <li><span className="font-semibold">MGLT:</span> {starship.MGLT}</li>
            <li><span className="font-semibold">Starship Class:</span> {starship.starshipClass}</li>
          </ul>
        </div>


        <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-100">Character</h2>
          <ul className="space-y-2">
            {starship.pilots.map((character: Partial<IPerson>) => (
              <li key={character._id}>
                <Link href={`/people/${character._id}`}>
                  <p className="text-blue-400 hover:text-blue-600 hover:underline">
                    {character.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-100">Films</h2>
          <ul className="space-y-2">
            {starship.films.map((film: Partial<IFilm>) => (
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


