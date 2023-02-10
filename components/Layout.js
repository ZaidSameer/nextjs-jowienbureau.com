import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col justify-between h-screen w-full">
        <Header />
        <main className="mt-[80px] md:mt-[100px]">{children}</main>
        <Footer />
      </div>
    </>
  );
}
