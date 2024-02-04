import Image from "next/image";
import Form from "./component/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  lg:p-24 bg-red-100">
      <div>
      <Form/>
      </div>
    </main>
  );
}
