import Card from './components/Card';

type Card = {
  id: string
  images: {
    small: string;
  };
};

export default function Home() {

  const getBaseCardData: () => Promise<Card[]> = async () => {
    try {
      const response = await fetch(`${process.env.SERVER_URL}/cards/base`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const buildCardComponents = async () => {
    try {
      const data = await getBaseCardData();
      console.log(data)
      const components = data.map((card, i: number) => {
        return <Card id={card.id} url={card.images.small}  key={`card-${i}`}/>;
      });
      return components;
    } catch (error) {
      console.log(error);
    }
  };

  const components = buildCardComponents();

  return (
    <main className="text-center mt-4">
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Pokémon..."
      />

      <h2 className='mt-5'>Base Set Pokémon:</h2>
      <div className="card-container mt-2">{components}</div>
    </main>
  );
}
