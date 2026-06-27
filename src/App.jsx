import Navbar from "./components/layout/Navbar";
import ListingGrid from "./components/home/ListingGrid";
import Inspiration from "./components/home/Inspiration";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <ListingGrid />
        </main>
      </div>
      <div>
        <Inspiration />
        <Footer />
      </div>
    </div>
  );
}

export default App;
