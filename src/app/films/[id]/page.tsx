"use client"
import { fetchData } from '@/tools/api';
import { IFilm, IPerson, IPlanet, IStarship } from '@/types/appTypes';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ItemDetails() {
  const [movie, setMovie] = useState<IFilm | null>(null);
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetchData(`/films/${id}`);
      setMovie(data);
    };

    fetchItems();
  }, [id]);

  if (!movie) {
    return <></>;
  }

  return (
    <div className="container mx-auto p-6">
      <button 
        className="border border-transparent text-blue-500 px-4 py-2 rounded-md mb-6 hover:border-blue-500"
        onClick={() => window.history.back()}
      >
        Back
      </button>
      <h1 className="text-5xl font-bold mb-6 text-center">{movie.title}</h1>
      <p className="mb-6 text-gray-700 text-center">Episode {movie.episodeId}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-100">Opening Crawl</h2>
          <p className="text-gray-300 whitespace-pre-line">{movie.openingCrawl}</p>
        </div>
        
        <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-100">Characters</h2>
          <ul className="space-y-2">
            {movie.characters.map((character: Partial<IPerson>) => (
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
          <h2 className="text-3xl font-semibold mb-4 text-gray-100">Planets</h2>
          <ul className="space-y-2">
            {movie.planets.map((planet: Partial<IPlanet>) => (
              <li key={planet._id}>
                <Link href={`/planets/${planet._id}`}>
                  <p className="text-blue-400 hover:text-blue-600 hover:underline">
                    {planet.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 text-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4 text-gray-100">Starships</h2>
          <ul className="space-y-2">
            {movie.starships.map((starship: Partial<IStarship>) => (
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


