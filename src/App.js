import Form from "./Components/Form";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="flex  min-h-screen flex-col items-center justify-center gap-12 p-6 text-center transition-colors duration-300  md:p-10">
      <Header />

      <main className="flex  flex-col gap-4 ">
        <h1 className="text-2xl font-light tracking-wider text-custom-gray md:text-4xl md:text-[2.75rem] md:leading-[3.5rem]">
          We are launching{" "}
          <span className="font-bold text-very-dark-blue ">soon!</span>
        </h1>
        <p className="mb-[0.4rem] text-gray-800 md:text-normal">
          Subscribe and get notified
        </p>

        <Form />

        <img
          src={""}
          className=" transition-filter mx-auto mt-16 mb-8 block w-full max-w-[640px]"
          alt=""
          aria-hidden="true"
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
