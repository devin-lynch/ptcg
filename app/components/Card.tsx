type Props = {
  url: string;
};

export default function Card({ url }: Props) {
  return (
    <div className="card-container transform transition duration-200 hover:scale-110">
      <a href="">
        <img src={url}></img>
      </a>
    </div>
  );
}
