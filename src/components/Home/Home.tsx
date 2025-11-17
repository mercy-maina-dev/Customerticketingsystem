import hme from "../../assets/images/hme.jpg";

export default function Home() {
  return (
    <div className="p-10 min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center">

  
      <div className="text-center animate-fade-in-up">
        <h1 className="text-5xl font-extrabold text-indigo-700 drop-shadow-sm">
          Welcome to the Customer Support Ticketing System
        </h1>

        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Easily manage customer issues, assign tickets, track progress,
          and provide fast, reliable support — all in one powerful system.
        </p>

        <button className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition-all hover:scale-105">
          Get Started
        </button>
      </div>

      
      <div className="mt-10 w-full max-w-3xl animate-fade-in-up animation-delay-300">
        <img
          src={hme}
          alt="Support System"
          className="rounded-3xl shadow-2xl w-full object-cover"
        />
      </div>
    </div>
  );
}
