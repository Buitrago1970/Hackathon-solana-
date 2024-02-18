// Importaciones necesarias de @solana/web3.js y @project-serum/anchor
import { Cluster, PublicKey } from '@solana/web3.js';
import { Program } from '@project-serum/anchor';

// Importa los tipos generados por Anchor para tu programa específico
import type { Counter } from '../target/types/counter';
import { IDL as CounterIDL } from '../target/types/counter';

// Re-exporta el IDL generado y el tipo
export { Counter, CounterIDL };

// Define y exporta el tipo CounterProgram usando el tipo Program de Anchor
export type CounterProgram = Program<Counter>;

// ID del programa Counter después de sincronizar las claves con Anchor
export const COUNTER_PROGRAM_ID = new PublicKey(
  'CounNZdmsQmWh7uVngV9FXW2dZ6zAgbJyYsvBpqbykg'
);

// Función auxiliar para obtener el ID del programa Counter dependiendo del cluster
export function getCounterProgramId(cluster: Cluster): PublicKey {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
    case 'mainnet-beta':
      // Actualiza este valor si despliegas tu programa en uno de estos clusters
      return new PublicKey('CounNZdmsQmWh7uVngV9FXW2dZ6zAgbJyYsvBpqbykg');
    default:
      return COUNTER_PROGRAM_ID;
  }
}
