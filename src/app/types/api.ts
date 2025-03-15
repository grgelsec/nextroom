export type room = {
  room: string;
  times: availability[];
};

type availability = {
  date: string | undefined;
  reserved: string | undefined;
};

export interface AvailableRooms {
  rooms: room[];
}
