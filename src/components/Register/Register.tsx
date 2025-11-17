export default function Register() {
  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 text-center">Create an Account</h1>

      <form className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 rounded-md"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border p-3 rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-md"
        />

        <button className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
          Register
        </button>
      </form>
    </div>
  );
}
