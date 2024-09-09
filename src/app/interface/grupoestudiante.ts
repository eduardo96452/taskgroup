export interface verestudiantesgrupo {
    student_id:number;
}

export interface traermensaje {
    number_of_groups:number;
    group_names: nombregrupo;   
  }

export interface nombregrupo{
    [grupo: string]: string
}