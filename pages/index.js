import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, {useEffect, useState} from "react";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
      const data = await response.json();
      setPokemon(data);
    }
      getPokemon()
  }, []);



console.log(pokemon);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemons list</title>
      </Head>
        <div>{JSON.stringify(pokemon)}</div>
    </div>
  );
}
