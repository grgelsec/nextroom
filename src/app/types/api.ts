export type room = {
  room: string;
  times: availability[];
};

export type availability = {
  date: string | undefined;
  reserved: string | undefined;
};

export interface AvailableRooms {
  rooms: room[];
}
