export interface DossiersInterface {
    ID:number,
    Client:number,
    Domaine:string,
    Intitule:string,
    ResponsableID:number
}

export interface ClientsInterface {
    ID:number,
    Raison_Sociale:string,
    Adresse_Siege:string,
    CP_Siège:string,
    Ville_Siege:string
}

export interface DiligencesInterface {
    ID:number,
    Collaborateur:number,
    Dossier:number,
    Diligence_Date: string,
    Heure_TotalDecimal:number,
    Detail:string
}

export interface CollaborateursInterface {
    ID:number,
    Nom:string,
    Prenom:string
}