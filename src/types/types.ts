export interface User {
  id: number;
  name: string;
  role: string;
  dept: string;
  joinDate: string;
}

export interface Training {
  id: number;
  name: string;
  type: string;
  status: 'Validada' | 'En Proceso' | 'Pendiente' | 'Vencida';
  trainer: string | null;
}