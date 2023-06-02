type Props = {
  url: string;
};

export default function Card({ url }: Props) {
  return (
    <div>
      <a href="">
        <img src={url}></img>
      </a>
    </div>
  );
}
