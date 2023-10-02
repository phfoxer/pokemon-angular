export type TPokemonTypes = {
    name: string;
    url: string;
}

export type TPokemonResponse<T> = {
    count: number;
    next: number | null;
    previous: number | null;
    results: T[]
}
export type TTypeRef = {
    pokemon: TPokemonRef;
    slot: number;
}
export type TPokemonByType = {
    id: number;
    name: string;
    pokemon: TTypeRef[]
}

export type TPokemonRef = {
    name: string;
    url: string;
}

export type TPokemon = {
    name: string;
    id: number;
    image?: string;
}