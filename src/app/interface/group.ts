export interface creargrupo {
    course_id:number;
    members: number;
    name_subject: string;
}

export interface traermensaje {
    gruposConNombres: nombregrupo;  
    gruposConNombresID: numerogrupo;
    mensaje: string;
  }

export interface nombregrupo{
    [grupo: string]: string;
}

export interface numerogrupo{
    [grupo: string]: string;
}


export interface vergrupo{
    group_name: string;
    number_of_members: number;
    creation_date:string;
}

export interface savegroups{
    subject_id: number;
    created_teacher: number;
    creation_date: string;
    gruposConNombresID:numerogrupo;
}

export interface mensajedeguardado{
    mensaje: string;
}