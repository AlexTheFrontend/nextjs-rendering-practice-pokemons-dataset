import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, {useEffect, useState} from "react";
import Link from "next/link";

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

    return (
        <div className={styles.container}>
            <Head>
                <title>Pokemons list</title>
            </Head>
            <div className={styles.grid}>
                {pokemon.map((pokemon) => (
                    <div className={styles.card} key={pokemon.id}>
                        <Link href={`/pokemon/${pokemon.id}`}>
                            <a>
                                <img
                                    src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                                    alt={pokemon.name}
                                />
                                <h3>{pokemon.name}</h3>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
}
