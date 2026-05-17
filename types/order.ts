export type OrderType = {
  id: string;
  clientName: string;
  device: string;
 problem?: string | null;
  status: string;
  price: number | null;
  createdAt: Date;
  userId?: string | null;
};