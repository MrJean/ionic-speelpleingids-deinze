export interface Playground {
    id: number;
    image?: string;
    name: string;
    municipality?: string;
    submunicipality?: string;
    targetAgeFrom?: number;
    targetAgeTo?: number;
    activities?: Array<string>;
}
