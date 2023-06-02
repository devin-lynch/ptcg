type Props = {
  url: string;
};

export default function Card({ url }: Props) {
  return (
    <div>
      <img src={url}></img>
    </div>
  );
}
