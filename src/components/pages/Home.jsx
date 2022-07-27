import UserResults from "../users/UserResults"

function Home() {
  return (
    <>
        <h1 className="text-6xl">Welcome To My Geek Directory</h1>
        {/*SEARCH COMPONENT GOES HERE */}
        <UserResults />
    </>
  )
}

export default Home