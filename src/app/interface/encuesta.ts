export interface RespuestaEstudiante {
    student_id: number;
    answers: { [key: string]: string }; // Answers es un objeto con claves y valores.
    date_answers: string; // Fecha en formato string.
  }


export interface traermensaje {
    message: string;
}