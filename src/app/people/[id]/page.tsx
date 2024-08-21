"use client"
import { fetchData } from '@/tools/api';
import { IFilm, IPerson, IStarship } from '@/types/appTypes';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ItemDetails() {
  const [character, setcharacter] = useState<IPerson | null>(null);
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetchData(`/people/${id}`);
      setcharacter(data);
    };

    fetchItems();
  }, [id]);

  if (!character) {
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

    <h1 className="text-4xl font-bold mb-6 text-center">{character.name}</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-4 text-gray-100">Details</h2>
        <ul className="space-y-2">
          <li><span className="font-semibold">Height:</span> {character.height} cm</li>
          <li><span className="font-semibold">Mass:</span> {character.mass} kg</li>
          <li><span className="font-semibold">Hair Color:</span> {character.hairColor}</li>
          <li><span className="font-semibold">Skin Color:</span> {character.skinColor}</li>
          <li><span className="font-semibold">Eye Color:</span> {character.eyeColor}</li>
          <li><span className="font-semibold">Birth Year:</span> {character.birthYear}</li>
          <li><span className="font-semibold">Gender:</span> {character.gender}</li>
        </ul>
      </div>

      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-4 text-gray-100">Films</h2>
        <ul className="space-y-2">
          {character.films.map((film: Partial<IFilm>) => (
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


      <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold mb-4 text-gray-100">Starships</h2>
        <ul className="space-y-2">
          {character.starships.map((starship: Partial<IStarship>) => (
            <li key={starship._id}>
              <Link href={`/starships/${starship._id}`}>
                <p className="text-blue-400 hover:text-blue-600 hover:underline">
                  {starship.name}
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


