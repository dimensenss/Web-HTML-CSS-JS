class Student{
  #name;
  #faculty;
  #course;
  #group;

  constructor(name, faculty, course, group) 
  {
    this.name = name;
    this.faculty = faculty;
    this.course = course;
    this.group = group;
  }
  set name_(name)
  {this.#name = name;}
  set faculty_(faculty)
  {this.#faculty = faculty;}
  set course_(course)
  {this.#course = course;}
  set group_(group)
  {this.#group = group;}

  get name_(){return this.#name;}
  get faculty_(){return this.#faculty;}
  get course_(){return this.#course;}
  get group_(){return this.#group;}

  print_objs()
  {return this.name+' '+this.faculty+'-'+this.group+' '+this.course+'c. ';}
}
var st=[
  new Student('Ivanov0 O.V.','KN1','2','391a'),
  new Student('Ivanov1 A.E.','KN2','3','121b'),
  new Student('Ivanov2 P.S.','KN3','1','245v'),
  new Student('Ivanov3 F.V.','KN4','2','391a'),
  new Student('Ivanov4 V.N.','KN5','2','125v'),
  new Student('Ivanov5 B.N.','KN6','3','125v'),
  new Student('Ivanov6 R.F.','KN7','1','424b'),
  new Student('Ivanov7 U.R.','KN8','3','125v'),
  new Student('Ivanov8 W.Q.','KN9','3','394d'),
  new Student('Ivanov9 L.N.','KN10','2','124g'),
];
console.log("Students")
for(let i=0;i<st.length;i++)
{
  console.log(st[i].print_objs());
}
class Lesson{
  #lesson;
  #count_of_hours;
  #teacher;
  constructor(lesson, count_of_hours, teacher) 
  {
    this.lesson = lesson;
    this.count_of_hours = count_of_hours;
    this.teacher = teacher;
 }
  set lesson_(lesson)
  {this.#lesson = lesson;}
  set count_of_hours_(count_of_hours)
  {this.#count_of_hours = count_of_hours;}
  set teacher_(teacher)
  {this.#teacher = teacher;}

  get lesson_(){return this.#lesson;}
  get count_of_hours_(){return this.#count_of_hours;}
  get teacher_(){return this.#teacher;}

  print_objs_les()
  {return this.lesson+' '+this.count_of_hours+this.teacher;}
}
var lesson=[
  new Lesson('Predmet1','3','Prepod1.'),
  new Lesson('Predmet2','1','Prepod2.'),
  new Lesson('Predmet3','2','Prepod3.'),
  new Lesson('Predmet4','4','Prepod4.'),
  new Lesson('Predmet5','1','Prepod5.'),
  new Lesson('Predmet6','2','Prepod6.'),
  new Lesson('Predmet7','3','Prepod7.'),
];
console.log("Lesons")
for(let i=0;i<lesson.length;i++)
{
  console.log(lesson[i].print_objs_les());
}
class Exam{
  #form_of_exam;
  #mark;
  #date;
  #index_st;
  #index_l;

  constructor(form_of_exam, mark, date, index_st, index_l) 
  {
    this.form_of_exam = form_of_exam;
    this.mark = mark;
    this.date = date;
    this.index_st=index_st;
    this.index_l=index_l;
 }
  set form_of_exam_(form_of_exam)
  {this.#form_of_exam = form_of_exam;}
  set mark_(mark)
  {this.#mark = mark;}
  set date_(date)
  {this.#date = date;}
  set index_st_(index_st)
  {this.#index_st = index_st;}
  set index_l_(index_l)
  {this.#index_l = index_l;}

  get form_of_exam_(){return this.#form_of_exam;}
  get mark_(){return this.#mark;}
  get date_(){return this.#date;}
  get index_st_(){return this.#index_st;}
  get index_l_(){return this.#index_l;}

  print_objs_exam(){return this.date+' | '+this.form_of_exam+' '+this.mark+' st:'+this.index_st+' lesson:'+this.index_l;}
}
var exam=[
  //st1
  new Exam('zalik','5','26.9',0,0),
  new Exam('exam','5','18.11',0,1),
  new Exam('zalik','4','30.12',0,2),
  new Exam('exam','4','21.11',3,2),
  new Exam('exam','4','27.11',3,2),
  //st2
  new Exam('exam','4','16.11',1,0),
  new Exam('exam','4','20.11',1,1),
  new Exam('zalik','4','28.11',1,2),
  //st3
  new Exam('exam','4','19.12',2,0),
  new Exam('exam','3','21.9',2,1),
  new Exam('zalik','4','30.11',2,2),
  new Exam('exam','4','19.12',2,0),
  new Exam('exam','3','21.9',2,1),
  new Exam('zalik','4','30.11',2,2),
  //st4
  new Exam('zalik','5','22.11',3,0),
  new Exam('exam','3','19.11',3,1),
  new Exam('exam','4','28.11',3,2),
  new Exam('exam','4','27.11',3,2),
  //st5
  new Exam('zalik','5','25.12',4,0),
  new Exam('zalik','5','14.9',4,1),
  new Exam('zalik','5','30.11',4,2)
]
console.log("exam")
for(let i=0;i<exam.length;i++)
{
  console.log(exam[i].print_objs_exam());
}