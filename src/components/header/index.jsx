import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <nav className="bg-white h-16 w-full py-4 px-20 mb-20">
      <ul className=" flex justify-between items-center">
        <li>
          <Link to="/"> Home</Link>
        </li>
        {JSON.parse(localStorage.getItem("TFA")) && (
          <>
            <li>
              <Link to="/dashboard"> Dashboard</Link>
            </li>
            <li>
              <Link to="/payment"> Payment</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
