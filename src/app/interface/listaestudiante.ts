export interface verestudiante{
    student_name: string;
    email: string;
    role: string;
    groups: nombreestudiante;
}

export interface nombreestudiante{
    [grupo: string]: string;
}