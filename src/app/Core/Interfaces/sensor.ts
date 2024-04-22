export interface Sensor {
  _id: string;
  name: string;
  data: string | null;
  room_id: number;
  date_time: string;
}
