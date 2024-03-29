import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Shop from "./components/Shop";

export default function Home() {
  return (
    <>
    <Header />
    <Shop />
    </>
    );
}
