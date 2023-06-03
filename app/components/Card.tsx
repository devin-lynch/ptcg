'use client'

type Props = {
  url: string;
  id: string;
};

export default function Card({ url, id }: Props) {

  return (
    <div className="card-container transform transition duration-200 hover:scale-110">
      <a href={`/cards/${id}`}>
        <img src={url}></img>
      </a>
    </div>
  );
}
