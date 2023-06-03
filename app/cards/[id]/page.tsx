export default function Page({ params }: { params: { id: string } }) {

  return (
    <div>
        <div className="">
            <p>Pokémon ID:</p>
            <p>{params.id}</p>
        </div>
        <div className="">
            <img src="" alt="" className=""/>
        </div>
    </div>
  );
}
