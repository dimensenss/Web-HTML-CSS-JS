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
  {return this.name+' '+this.faculty+'-'+this.group+' '+this.course+'c.';}
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
  {return this.lesson+' '+this.count_of_hours+'h/w '+this.teacher;}
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
console.log("Exam ")
for(let i=0;i<exam.length;i++)
{
  console.log(exam[i].print_objs_exam());
}
class PersonalDataStudent extends Student{
  #age;

  constructor(name, faculty, course, group, age){
    super(name, faculty, course, group);
    this.age=age;
  }
  get age(){return this.#age;}

  set age(age){this.#age=age;}

  print_data() {
    return super.print_objs()+"Age: "+this.age}
  }
  var st_pd=[
  new PersonalDataStudent('Ivanov0 O.V.','KN1','2','121f', '18'),
  new PersonalDataStudent('Ivanov1 B.V.','KN2','1','331g', '18'),
  new PersonalDataStudent('Ivanov2 O.D.','KN3','4','391s', '21'),
  new PersonalDataStudent('Ivanov3 G.F.','KN4','1','591a', '18'),
  new PersonalDataStudent('Ivanov4 E.V.','KN5','2','121g', '18'),
  new PersonalDataStudent('Ivanov5 Q.D.','KN6','3','351a', '17'),
  new PersonalDataStudent('Ivanov6 H.A.','KN7','5','651h', '20'),
  new PersonalDataStudent('Ivanov7 H.G.','KN8','1','393b', '19'),
  new PersonalDataStudent('Ivanov8 H.W.','KN9','2','351v', '18'),
];
console.log("Stusents ")
for(let i=0;i<st_pd.length;i++)
{
  console.log(st_pd[i].print_data());
}
class PersonalDataTeacher extends Lesson{
  
  #sex;
  constructor(lesson, count_of_hours, teacher, sex){
    super(lesson, count_of_hours, teacher);
    
    this.sex=sex;
  }
  
  get sex(){return this.#sex;}

  
  set sex(sex){this.#sex=sex;}

  print_data_teacher() {
    return super.print_objs_les()+"Sex: "+this.sex;}
}
var lesson=[
  new PersonalDataTeacher('Predmet1','3','Prepod1.', 'female'),
  new PersonalDataTeacher('Predmet2','1','Prepod2.', 'male'),
  new PersonalDataTeacher('Predmet3','3','Prepod3.', 'female'),
  new PersonalDataTeacher('Predmet4','2','Prepod4.', 'female'),
  new PersonalDataTeacher('Predmet5','5','Prepod5.', 'male'),
  new PersonalDataTeacher('Predmet6','3','Prepod6.', 'male'),
  new PersonalDataTeacher('Predmet7','1','Prepod7.', 'female'),
];
console.log("Lesons ")
for(let i=0;i<lesson.length;i++)
{
  console.log(lesson[i].print_data_teacher());
}

