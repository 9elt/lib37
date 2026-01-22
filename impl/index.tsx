function Root() {
    return (
        <div>
            <h1>Hello, Poke!</h1>
            <RandomPokemon
                name="ditto"
                $loading={<RandomPokemonLoading />}
            />
        </div>
    );
}

async function RandomPokemon({ name }: { name: string; $loading?: unknown }) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);

    if (!response.ok) {
        return (
            <div>Some Error Occurred</div>
        );
    }

    const pokemon = await response.json();

    await new Promise((r) => setTimeout(r, 500));

    return (
        <div style={{
            backgroundColor: "#F5F5F5",
        }}>
            <p>{pokemon.name}, {pokemon.order}</p>
            <br />
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
            />
        </div>
    );
}

function RandomPokemonLoading() {
    return (
        <div style={{
            backgroundColor: "#F5F5F5",
        }}>
            <p
                style={{
                    backgroundColor: "#E7E7E7",
                    color: "transparent",
                }}
            >
                ...
            </p>
            <br />
            <div
                style={{
                    width: "96px",
                    height: "96px",
                    backgroundColor: "#E7E7E7",
                }}
            />
        </div>
    );
}

document.body.append(
    <Root />
);
