export interface CrewMember {
    adult?: boolean; // по умолчанию true
    gender?: number; // по умолчанию 0
    id?: number; // по умолчанию 0
    known_for_department?: string;
    name?: string;
    original_name?: string;
    popularity?: number; // по умолчанию 0
    profile_path?: string;
    credit_id?: string;
    department?: string;
    job?: string;
}