import { ReactElement } from "react";

export interface DossiersInterface {
    ID:number,
    Client:number|string,
    Domaine:string,
    Intitule:string,
    ResponsableID:number|string,
    action?:ReactElement
}

export interface ClientsInterface {
    ID:number,
    Raison_Sociale:string,
    Adresse_Siege:string,
    CP_Siège:string,
    Ville_Siege:string
    action?:ReactElement
}

export interface DiligencesInterface {
    ID:number,
    Collaborateur:number|string,
    Dossier:number,
    Diligence_Date: string,
    Heure_TotalDecimal:number,
    Detail:string
    action?:ReactElement
}

export interface CollaborateursInterface {
    ID:number,
    Nom:string,
    Prenom:string
    action?:ReactElement
}