export interface creargrupo {
    course_id:number;
    members: number;
    name_subject: string;
}

export interface traermensaje {
    message: string;
    grupos: nombregrupo;    
  }

export interface nombregrupo{
    [grupo: string]: string
}


export interface vergrupo{
    group_name: string;
    number_of_members: number;
    creation_date:string;
}