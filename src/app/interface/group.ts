export interface creargrupo {
    course_id:number;
    members: number;
    name_subject: string;
}

export interface traermensaje {
    message: string;
    grupos: creargrupo;
  }