import Card from "./components/Card"

export default function Home() {
  return (
    <main className="">
      <label htmlFor="search"></label>
      <input type="text" name="search" id="search" placeholder="Search pokemon..."/>

      <h2>Base Set Pokemon:</h2>
      <Card />
    </main>
  )
}
