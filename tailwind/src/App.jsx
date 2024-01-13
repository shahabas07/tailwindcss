import React from 'react';

const Navigation = () => {
  return (
    <nav className="p-2 bg-red-500">  
      <div className="flex items-center justify-between">
        <div className="flex">
        <h1 className="mr-5 text-white font-bold ">KALVIUM</h1>
          <p className="mr-4 font-bold text-white">About us</p>
          <p className="mr-4 font-bold text-white">Contacts</p>
          <p className="mr-4 font-bold text-white ">Courses</p>
        </div>
        <div>
          <button className="text-white outline rounded p-2 px-4 mr-3 font-bold ">Login</button>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center py-4">
      <div className="container mx-auto items-center">
        <p>&copy; 2024 KALVIUM. </p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div>
      <Navigation />
      <div className="p-4 px-16 ">
        <button className="text-white active:bg-blue-500 p-2 bg-blue-500 text-xs font-bold rounded">Button one</button>
        <div className="bg-red-200 border border-red-500 rounded text-red-700 px-3 py-3 my-4" role="alert">
          <strong>Alert! </strong>
          <span>This is awesome!</span>
        </div>
      </div>
      <div className="p-6 max-w-md mx-auto bg-slate-300 rounded-xl  flex items-center space-x-4 mb-5">
        <div className="shrink-0">
          <img className="h-10 w-25" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">Kalvium Store</div>
          <p className="text-slate-700">You have a new Course!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
