import { Header } from "components";
export const Container = ({ children }) => {
  return (
    <div className="">
      <Header />
      <div className="p-8  ">{children}</div>
    </div>
  );
};
