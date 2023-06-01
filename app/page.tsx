import Card from "./components/Card"

export default function Home() {

  const getBase = async () => {
    try {
      const response = await fetch('localhost:3002')
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.warn(error)
    }
  }

  getBase()

  return (
    <main className="">
      <label htmlFor="search"></label>
      <input type="text" name="search" id="search" placeholder="Search pokemon..."/>

      <h2>Base Set Pokemon:</h2>
      <Card />
    </main>
  )
}
