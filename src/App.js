import React from "react";

function App() {
  const Navbar = React.lazy(() => import("./components/NavBar/NavBar"))
  const Home = React.lazy(() => import("./components/Home/Home"))
  const About = React.lazy(() => import("./components/About/About"))
  const Develop = React.lazy(() => import("./components/Developer/Developer.jsx"))
  const Contact = React.lazy(() => import("./components/Contact/Contact.jsx"))
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading ....</div>}>
        <Navbar />
        <Home />
        <About /> 
        <Develop /> 
        <Contact /> 
      </React.Suspense>
    </div>
  );
}

export default App;
