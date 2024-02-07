import Image from "next/image";
import Form from "./component/Form";
import { DisplayTable } from "./component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  lg:p-24 bg-red-100">
      <div className="lg:mt-10 mt-24">
      <Form/>
      </div>
      <div className="mt-10">
        <DisplayTable/>
      </div>
    </main>
  );
}
