export interface Playground {
    id: number;
    image?: string;
    imageMap?: string;
    name: string;
    municipality?: string;
    submunicipality?: string;
    targetAgeFrom?: number;
    targetAgeTo?: number;
    activities?: Array<string>;
    lat?: number;
    lng?: number;
}
