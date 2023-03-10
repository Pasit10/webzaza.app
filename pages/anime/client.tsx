import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";

async function getAllAnime() {
    return await axios.get("https://api.jikan.moe/v4/anime");
}

const AnimePage: NextPage = () => {
  const query = useQuery({ queryKey: ["all-anime"], queryFn: getAllAnime})
  return (
    <>
      <h1>Anime List</h1>
      {query.data?.data.data.map((item: any) => (
        <div key={item.mal_id}>
            <div>{item.titles[0].title}</div>
            <Image
                src={item.images.jpg.image_url}
                alt={""}
                width={200}
                height={300}
             />
        </div>
      ))}
    </>
  );
};

export default AnimePage;