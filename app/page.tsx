import Card from './components/Card';

type Card = {
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
      console.warn(error);
    }
  };

  const buildCardComponents = async () => {
    try {
      const data = await getBaseCardData();
      const components = data.map((card, i: number) => {
        return <Card url={card.images.small} key={`card-${i}`} />;
      });
      return components;
    } catch (error) {
      console.log(error);
    }
  };

  const components = buildCardComponents();

  return (
    <main className="">
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search pokemon..."
      />

      <h2>Base Set Pokemon:</h2>
      <div className="card-container mt-5">{components}</div>
    </main>
  );
}
