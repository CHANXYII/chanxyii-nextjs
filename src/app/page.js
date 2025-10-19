'use client';
import Image from "next/image";
import Counter from "./componants/Counter";

function Header(){
  return (
    <>
    <p>AIE312 - React componants </p>
    </>
  );
}

export default function Home() {
  return (
    <div>
      <Header />
      <p>Hello React!</p>
      <Counter intcount='0' />
    </div>
  );
}
