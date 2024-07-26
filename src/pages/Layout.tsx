import TopNav from "../components/shared/TopNav";
import BottomNav from "../components/shared/BottomNav";

const Layout = ({ children, title }: {
  children:React.ReactNode,
  title:string
}) => {
  return (
    <main className="relative w-full md:w-[80%] mx-auto h-screen p-4 flex flex-col justify-between gap-4">
      <nav className="w-full h-auto">
        <TopNav title={title}/>
      </nav>
      <main className="h-max-screen items-start justify-start flex  flex-col overflow-y-scroll flex-1">
        {children}
      </main>
      <footer className="w-full h-auto  items-center justify-center">
        <BottomNav />
      </footer>
    </main>
  );
};

export default Layout;
