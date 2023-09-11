import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="w-[80%] m-auto flex justify-between">
      <div>
        <img />
      </div>
      <div>
        <h3>Home</h3>
        <h3>Blog</h3>
      </div>
      <div>
        <img />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
