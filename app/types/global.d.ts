export {};

declare global {
  type FarmType = {
    website: string;
    address: string;
    phone: string;
    latitude: number;
    managementAreasGeoJSON: any;
    name: string;
    id: number;
    email: string;
    longitude: number;
  };
}
