import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { pokeApiAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: pokeApiAdapter

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        // const { data } = await http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const data = await this.http.get('https://pokeapi.co/api/v2/pokemon/4')
        
        console.log( data.moves );
        
        return data.moves;
    }

}

const pokeApi = new pokeApiAdapter();

export const charmander = new Pokemon( 4, 'Charmander', pokeApi );

charmander.getMoves();