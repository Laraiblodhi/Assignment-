

export default function Home() {
  return (
    <div className="bg-[rgba(37,43,66,1)] text-white min-h-screen">
      <main className="text-center">
        <h1 className="text-1xl font-bold mb-6 text-blue-300">Welcome</h1>
        <h1 className="text-4xl font-bold">Selling on the internet like a pro</h1>
        <p className="mt-4 text-lg">We know how large objects will act, but things on a small scale just do not act the same.</p>
        <div className="mt-8 space-x-4">
          <button className="bg-blue-500 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-600">Get Quote Now</button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700">Learn More</button>
        </div>
      </main>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-white text-black p-6 rounded">
          <div className="h-16 w-16 bg-pink-200 rounded mb-4"></div>
          <h2 className="text-xl font-bold">Training Courses</h2>
          <div className="w-[50px] h-[2px] bg-[rgba(231,64,64,1)]"/>
          <p className="mt-2">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
        <div className="bg-white text-black p-6 rounded">
          <div className="h-16 w-16 bg-green-200 rounded mb-4"></div>
          <h2 className="text-xl font-bold">2,769 Online Courses</h2>
          <div className="w-[50px] h-[2px] bg-[rgba(231,64,64,1)]"/>
          <p className="mt-2">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
        <div className="bg-blue-400 text-white p-6 rounded">
          <div className="h-16 w-16 bg-white rounded mb-4"></div>
          <h2 className="text-xl font-bold">Training Courses</h2>
          <div className="w-[50px] h-[2px] bg-[rgba(255,255,255,1)]"/>
          <p className="mt-2">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
      </section>
    </div>
  );
}
