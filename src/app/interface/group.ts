export interface creargrupo {
    course_id:number;
    members: number;
    name_subject: string;
}

export interface traermensaje {
    message: string;
    grupos: nombregrupo;  
    idgrupos: numerogrupo;
  }

export interface nombregrupo{
    nombreGrupo: string;
    nombreMiembros: string[];
}

export interface numerogrupo{
    [grupo: number]: number;
}

export interface vergrupo{
    group_name: string;
    number_of_members: number;
    creation_date:string;
}

export interface savegroups{
    subjest_id: number;
    created_teacher: number;
    creation_date: string;
    gruposConMombresID:nombregrupo;
}

export interface mensajedeguardado{
    mensaje: string;
}