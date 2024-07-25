// import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const TopNav = ({ title } : {title:string}) => {
  return (
    <section className="w-full flex items-center justify-between flex-row p-2 rounded-lg text-secondary">
      <div className="flex flex-col">
        <p className="text-xs font-mono">12:45 pm,</p>
        <h1 className="font-semibold text-xl">{title} 🎉</h1>
      </div>
      <div className="flex space-x-4 items-end justify-end">
        <div>
          <MdLightMode size={24}/>
        </div>
      </div>
    </section>
  )
}

export default TopNav

{/* <h1 className="font-semibold text-xl">Lets go! 🎉</h1> */}
