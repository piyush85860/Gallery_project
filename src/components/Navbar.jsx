
const Navbar = () => {
  return (
    <div className=" w-full h-auto  flex justify-between items-center flex-wrap py-4 px-5 bg-black/50 rounded-2xl">
        <h1 className="text-white text-2xl font-semibold">Click-n-Capture</h1>
        <div className=" [&>a]:text-white flex justify-between gap-7 bg-black/50 px-5 py-5 rounded-2xl">
            <a href="">Project</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
        <p className="text-white text-sm">Powered by:-The useless Satyam</p>
    </div>
  )
}

export default Navbar