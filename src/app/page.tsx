import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-64">

      <ul className="flex items-center justify-center gap-32 flex-wrap">

        <Link href={"/people"} className="flex flex-col justify-center items-center gap-10">
          <Image src={"/entity-images/People.png"} alt={"People logo"} width={"100"} height={"100"}></Image>
          <p>PEOPLE</p>
        </Link>

        <Link href={"/films"} className="flex flex-col justify-center items-center gap-10">
          <Image src={"/entity-images/Films.png"} alt={"People logo"} width={"100"} height={"100"}></Image>
          <p>FILMS</p>
        </Link>

        <Link href={"/starships"} className="flex flex-col justify-center items-center gap-10">
          <Image src={"/entity-images/Starship.png"} alt={"People logo"} width={"100"} height={"100"}></Image>
          <p>STARTSHIPS</p>
        </Link>

        <Link href={"/planets"} className="flex flex-col justify-center items-center gap-10">
          <Image src={"/entity-images/Planets.png"} alt={"People logo"} width={"100"} height={"100"}></Image>
          <p>PLANETS</p>
        </Link>

      </ul>

      <h2>{formattedDate}</h2>

    </main>
  );
}
