import userPic from '../assets/user.jpg';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-16 border-b-2 text-customBlue shadow-sm">
      <a href="/" className="font-bold text-2xl">Logo</a>
      <div className="flex items-center gap-2">
        <div className="w-14 h-14">
          <img src={userPic} alt="" className="w-full h-full rounded-full object-cover" />
        </div>
        <div>
          <p className="text-lg">Aitanum Daniel</p>
          <small className="text-sm">aitanumdaniel@gmail.com</small>
        </div>
      </div>  
    </nav>
  )
}

export default Navbar