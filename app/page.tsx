import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-red-100">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </main>
  );
}
