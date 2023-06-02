export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <p>Hello world!</p>
      <p>{params.id}</p>
    </div>
  );
}
