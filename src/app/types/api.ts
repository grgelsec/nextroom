export type availability = {
  date: string | undefined;
  reserved: string | undefined;
};

export type room = {
  room: string | undefined;
  times: availability[];
};
export interface AvailableRooms {
  rooms: room[];
}
