import Image from "next/image";
import {Button} from "../components/ui/button";
import {Calendar} from "../components/ui/calendar";

import DashboardPage from "./dashboard/page";



export default function Home() {
  return (

         <div className="flex flex-grow h-full">
            <DashboardPage />
          </div>
 
  );
}
