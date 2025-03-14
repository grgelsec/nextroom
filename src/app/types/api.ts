export type room = {
  availability: string;
  date: string;
  room: string;
};

export interface AvailableRooms {
  rooms: room[];
}
