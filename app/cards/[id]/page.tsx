export default function Page(params: { id: string }) {
  return (
    <div>
      <p>Hello world!</p>
      <p>{params.id}</p>
    </div>
  );
}
