export interface Sheet {
    basicInformation: BasicInformation;
    abilityScoreInformation: AbilityScoreInformation;
}

export interface BasicInformation {
    level: number;
    xp: number;
    characterName: string;
    ancestry: string;
    heritage: string;
    background: string;
    class: string;
    size: string;
    speed: string;
}

export interface AbilityScoreInformation {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}