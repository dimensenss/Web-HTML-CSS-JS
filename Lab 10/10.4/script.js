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

  to_formular()
  {
    let list=document.getElementById("list");
    let input_li;
    input_li=document.createElement("li");
    input_li.textContent="STUDENT:";
    list.appendChild(input_li);

    input_li=document.createElement("li");
    input_li.textContent=this.name;
    list.appendChild(input_li);

    input_li=document.createElement("li");
    input_li.textContent=this.faculty;
    list.appendChild(input_li);

    input_li=document.createElement("li");
    input_li.textContent=this.group;
    list.appendChild(input_li);

    input_li=document.createElement("li");
    input_li.textContent=this.course;
    list.appendChild(input_li);
  }
  to_table()
  {
    let table=document.getElementById("table");
    let tr;
    let td;
    tr=document.createElement("tr");
    td=document.createElement("td");
    td.textContent=this.name;
    tr.appendChild(td);
    td=document.createElement("td");
    td.textContent=this.faculty;
    tr.appendChild(td);
    td=document.createElement("td");
    td.textContent=this.group;
    tr.appendChild(td);
    td=document.createElement("td");
    td.textContent=this.course;
    tr.appendChild(td);
    table.appendChild(tr);
  }

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
console.log("STUDENTS:")
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
  {return this.lesson+' '+this.count_of_hours+'h/w '+this.teacher;}

  to_formular()
  {
    let list=document.getElementById("list");
    let input_li;
    input_li=document.createElement("li");
    input_li.textContent="LESSON:";
    list.appendChild(input_li);

    input_li=document.createElement("li");
    input_li.textContent=this.lesson;
    list.appendChild(input_li);

    input_li=document.createElement("li");
    input_li.textContent=this.count_of_hours;
    list.appendChild(input_li);

    input_li=document.createElement("li");
    input_li.textContent=this.teacher;
    list.appendChild(input_li);
  }
  to_table()
  {
    let table=document.getElementById("table");
    let tr;
    let td;
    tr=document.createElement("tr");
    td=document.createElement("td");
    td.textContent=this.lesson;
    tr.appendChild(td);
    td=document.createElement("td");
    td.textContent=this.count_of_hours;
    tr.appendChild(td);
    td=document.createElement("td");
    td.textContent=this.teacher;
    tr.appendChild(td);
    table.appendChild(tr);
  }

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
console.log("LESSONS:")
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
  to_formular()
  {
    let list=document.getElementById("list");
    let input_li;
    input_li=document.createElement("li");
    input_li.textContent="EXAM:";
    list.appendChild(input_li);

    input_li=document.createElement("li");
    input_li.textContent=this.form_of_exam;
    list.appendChild(input_li);

    input_li=document.createElement("li");
    input_li.textContent=this.mark;
    list.appendChild(input_li);

    input_li=document.createElement("li");
    input_li.textContent=this.date;
    list.appendChild(input_li);

    input_li=document.createElement("li");
    input_li.textContent=this.index_st;
    list.appendChild(input_li);

    input_li=document.createElement("li");
    input_li.textContent=this.index_l;
    list.appendChild(input_li);
  }
  to_table()
  {
    let table=document.getElementById("table");
    let tr;
    let td;
    tr=document.createElement("tr");
    td=document.createElement("td");
    td.textContent=this.date;
    tr.appendChild(td);
    td=document.createElement("td");
    td.textContent=this.form_of_exam;
    tr.appendChild(td);
    td=document.createElement("td");
    td.textContent=this.mark;
    tr.appendChild(td);
    td=document.createElement("td");
    td.textContent=this.index_st;
    tr.appendChild(td);
    td=document.createElement("td");
    td.textContent=this.index_l;
    tr.appendChild(td);
    table.appendChild(tr);
  }
  
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
console.log("EXAM:")
for(let i=0;i<exam.length;i++)
{
  console.log(exam[i].print_objs_exam());
}
function show(){
  let select=document.getElementById('select');
  let rb=document.querySelector('input[type=radio][name=rb]:checked').value;
  if(select.value==1)//formular
  {
    clear_table();
    document.getElementById('table').style.border='none ';
    if(rb==1)
    {
      clear_list();
      for (let i = 0; i < st.length; ++i) 
      {st[i].to_formular();}
    }
    if(rb==2)
    {
      clear_list();
      for (let i = 0; i < lesson.length; ++i) 
      {lesson[i].to_formular();}
    }
    if(rb==3)
    {
      clear_list();
      for (let i = 0; i < exam.length; ++i) 
      {exam[i].to_formular();}
    }
  }
  if(select.value==2)//table
  {
    document.getElementById('table').style.border=' solid white 2px';
    clear_list();
    if(rb==1)
    {
      clear_table();
      stud();
      for (let i = 0; i < st.length; ++i) 
      {st[i].to_table();}
    }
    if(rb==2)
    {
      clear_table();
      les();
      for (let i = 0; i < lesson.length; ++i) 
      {lesson[i].to_table();}
    }
    if(rb==3)
    {
      clear_table();
      ex();
      for (let i = 0; i < exam.length; ++i) 
      {exam[i].to_table();}
    }
  }
}
function clear_list(){
    let list=document.getElementById("list");
    let elem = document.getElementById("list").getElementsByTagName('li');
    let len=elem.length;
    for(let l=len-1;l!=-1;l--){
        list.removeChild(elem[l]);
    }
}
function clear_table(){
  let table=document.getElementById("table");
  let tr = document.getElementById("table").getElementsByTagName('tr');
  let len=tr.length;
  for(let i=len-1;i!=-1;i--){
      table.removeChild(tr[i]);
  }
}
function clear_table2(){
  let table=document.getElementById("table");
  let tr2 = document.getElementById("table").getElementsByTagName('tr');
  let len2=tr2.length;
  for(let i=len2-1;i!=1;i--){
      table.removeChild(tr2[i]);
  }
}


let q=1;
function stud(){
  let table=document.getElementById("table");
  let tr=document.createElement("tr");
  let td=document.createElement("td");
  td.textContent="name";
  td.addEventListener("click",function (){
      if(q%2!==0){
          st=st.sort(up('name'));
          clear_table();
          stud();
          for (let i = 0; i < st.length; ++i) 
          {st[i].to_table();}
      }
      else {
          st=st.sort(down('name'));
          clear_table();
          stud();
          for (let i = 0; i < st.length; ++i) 
          {st[i].to_table();}
      }
      q++;
  });
  tr.appendChild(td);
  td=document.createElement("td");
  td.textContent="f.";
  td.addEventListener("click",function (){
      if(q%2!==0){
          st=st.sort(up('faculty'));
          clear_table();
          stud();
          for (let i = 0; i < st.length; ++i) 
          {st[i].to_table();}
      }
      else {
          st=st.sort(down('faculty'));
          clear_table();
          stud();
          for (let i = 0; i < st.length; ++i) 
          {st[i].to_table();}
      }
      q++;
  });
  tr.appendChild(td);
  td=document.createElement("td");
  td.textContent="gr.";
  td.addEventListener("click",function (){
      if(q%2!==0){
          st=st.sort(up('group'));
          clear_table();
          stud();
          for (let i = 0; i < st.length; ++i) 
          {st[i].to_table();}
      }
      else {
          st=st.sort(down('group'));
          clear_table();
          stud();
          for (let i = 0; i < st.length; ++i) 
          {st[i].to_table();}
      }
      q++;
  });
  tr.appendChild(td);
  td=document.createElement("td");
  td.textContent="c.";
  td.addEventListener("click",function (){
      if(q%2!==0){
          st=st.sort(up('course'));
          clear_table();
          stud();
          for (let i = 0; i < st.length; ++i) 
          {st[i].to_table();}
      }
      else {
          st=st.sort(down('course'));
          clear_table();
          stud();
          for (let i = 0; i < st.length; ++i) 
          {st[i].to_table();}
      }
      q++;
  });
  tr.appendChild(td);
  table.appendChild(tr);

  tr=document.createElement("tr");
  td=document.createElement("td");
  let input1=document.createElement("input");
  input1.type="text";
  input1.placeholder="name";
  input1.addEventListener("keyup",function (){
      if(input4.value.length==0&&input3.value.length==0&&input2.value.length==0&&input1.value.length==0){
          clear_table2();
          for (let i = 0; i < st.length; ++i) 
          {st[i].to_table();}
      }
      else{
          clear_table2();
          for (let i = 0; i < st.length; ++i) {
              if(st[i].course.toString().includes(input4.value)
                  &&st[i].name.includes(input1.value)
                  &&st[i].faculty.includes(input2.value)
                  &&st[i].group.toString().includes(input3.value)){
                  st[i].to_table();}
          }
      }
  });
  td.appendChild(input1);
  tr.appendChild(td);

  td=document.createElement("td");
  let input2=document.createElement("input");
  input2.type="text";
  input2.placeholder="faculty";
  input2.addEventListener("keyup",function (){
      if(input4.value.length==0&&input3.value.length==0&&input2.value.length==0&&input1.value.length==0){
          clear_table2();
          for (let i = 0; i < st.length; ++i) 
          {st[i].to_table();}
      }
      else{
          clear_table2();
          for (let i = 0; i < st.length; ++i) {
              if(st[i].course.toString().includes(input4.value)
                  &&st[i].name.includes(input1.value)
                  &&st[i].faculty.includes(input2.value)
                  &&st[i].group.toString().includes(input3.value)){
                  st[i].to_table();}
          }
      }
  });
  td.appendChild(input2);
  tr.appendChild(td);

  td=document.createElement("td");
  let input3=document.createElement("input");
  input3.type="text";
  input3.placeholder="group";
  input3.addEventListener("keyup",function (){
      if(input4.value.length==0&&input3.value.length==0&&input2.value.length==0&&input1.value.length==0){
          clear_table2();
          for (let i = 0; i < st.length; ++i) 
          {st[i].to_table();}
      }
      else{
          clear_table2();
          for (let i = 0; i < st.length; ++i) {
              if(st[i].course.toString().includes(input4.value)
                  &&st[i].name.includes(input1.value)
                  &&st[i].faculty.includes(input2.value)
                  &&st[i].group.toString().includes(input3.value)){
                  st[i].to_table();}
          }
      }
  });
  td.appendChild(input3);
  tr.appendChild(td);

  td=document.createElement("td");
  let input4=document.createElement("input");
  input4.type="text";
  input4.placeholder="course";
  input4.addEventListener("keyup",function (){
      if(input4.value.length==0&&input3.value.length==0&&input2.value.length==0&&input1.value.length==0){
          clear_table2();
          for (let i = 0; i < st.length; ++i) 
          {st[i].to_table();}
      }
      else{
          clear_table2();
          for (let i = 0; i < st.length; ++i) {
              if(st[i].course.toString().includes(input4.value)
                  &&st[i].name.includes(input1.value)
                  &&st[i].faculty.includes(input2.value)
                  &&st[i].group.toString().includes(input3.value)){
                  st[i].to_table();}
          }
      }
  });
  td.appendChild(input4);
  tr.appendChild(td);
  table.appendChild(tr);

}
function les(){
  let table=document.getElementById("table");
  let tr=document.createElement("tr");
  let td=document.createElement("td");
  td.textContent="les.";
  td.addEventListener("click",function (){
      if(q%2!==0){
          lesson=lesson.sort(up('lesson'));
          clear_table();
          les();
          for (let i = 0; i < lesson.length; ++i) 
          {lesson[i].to_table();}
      }
      else {
          lesson=lesson.sort(down('lesson'));
          clear_table();
          les();
          for (let i = 0; i < lesson.length; ++i) 
          {lesson[i].to_table();}
      }
      q++;
  });
  tr.appendChild(td);
  td=document.createElement("td");
  td.textContent="h/w";
  td.addEventListener("click",function (){
      if(q%2!==0){
          lesson=lesson.sort(up('count_of_hours'));
          clear_table();
          les();
          for (let i = 0; i < lesson.length; ++i) 
          {lesson[i].to_table();}
      }
      else {
          lesson=lesson.sort(down('count_of_hours'));
          clear_table();
          les();
          for (let i = 0; i < lesson.length; ++i) 
          {lesson[i].to_table();}
      }
      q++;
  });
  tr.appendChild(td);
  td=document.createElement("td");
  td.textContent="teacher";
  td.addEventListener("click",function (){
      if(q%2!==0){
          lesson=lesson.sort(up('teacher'));
          clear_table();
          les();
          for (let i = 0; i < lesson.length; ++i) 
          {lesson[i].to_table();}
      }
      else {
          lesson=lesson.sort(down('teacher'));
          clear_table();
          les();
          for (let i = 0; i < lesson.length; ++i) 
          {lesson[i].to_table();}
      }
      q++;
  });
  tr.appendChild(td);
  table.appendChild(tr);

  tr=document.createElement("tr");
  td=document.createElement("td");
  let input1=document.createElement("input");
  input1.type="text";
  input1.placeholder="lesson";
  input1.addEventListener("keyup",function (){
      if(input3.value.length==0&&input2.value.length==0&&input1.value.length==0){
          clear_table2();
          for (let i = 0; i < lesson.length; ++i) 
          {lesson[i].to_table();}
      }
      else{
          clear_table2();
          for (let i = 0; i < lesson.length; ++i) {
              if(lesson[i].teacher.toString().includes(input3.value)
                  &&lesson[i].lesson.includes(input1.value)
                  &&lesson[i].count_of_hours.toString().includes(input2.value))
                  {lesson[i].to_table();}
          }
      }
  });
  td.appendChild(input1);
  tr.appendChild(td);

  td=document.createElement("td");
  let input2=document.createElement("input");
  input2.type="text";
  input2.placeholder="h./w.";
  input2.addEventListener("keyup",function (){
      if(input3.value.length==0&&input2.value.length==0&&input1.value.length==0){
          clear_table2();
          for (let i = 0; i < lesson.length; ++i) 
          {lesson[i].to_table();}
      }
      else{
          clear_table2();
          for (let i = 0; i < lesson.length; ++i) {
              if(lesson[i].teacher.toString().includes(input3.value)
                  &&lesson[i].lesson.includes(input1.value)
                  &&lesson[i].count_of_hours.toString().includes(input2.value)){
                    lesson[i].to_table();}
          }
      }
  });
  td.appendChild(input2);
  tr.appendChild(td);

  td=document.createElement("td");
  let input3=document.createElement("input");
  input3.type="text";
  input3.placeholder="teacher";
  input3.addEventListener("keyup",function (){
      if(input3.value.length==0&&input2.value.length==0&&input1.value.length==0){
          clear_table2();
          for (let i = 0; i < lesson.length; ++i) 
          {lesson[i].to_table();}
      }
      else{
          clear_table2();
          for (let i = 0; i < lesson.length; ++i) {
              if(lesson[i].teacher.toString().includes(input3.value)
                  &&lesson[i].lesson.includes(input1.value)
                  &&lesson[i].count_of_hours.toString().includes(input2.value)){
                    lesson[i].to_table();}
          }
      }
  });
  td.appendChild(input3);
  tr.appendChild(td);
  table.appendChild(tr);
}
function ex(){
  let table=document.getElementById("table");
  let tr=document.createElement("tr");
  let td=document.createElement("td");
  td.textContent="date";
  td.addEventListener("click",function (){
      if(q%2!==0){
          exam=exam.sort(up('date'));
          clear_table();
          ex();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      else {
          exam=exam.sort(down('date'));
          clear_table();
          ex();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      q++;
  });
  tr.appendChild(td);
  td=document.createElement("td");
  td.textContent="s./i.";
  td.addEventListener("click",function (){
      if(q%2!==0){
          exam=exam.sort(up('form_of_exam'));
          clear_table();
          ex();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      else {
          exam=exam.sort(down('form_of_exam'));
          clear_table();
          ex();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      q++;
  });
  tr.appendChild(td);
  td=document.createElement("td");
  td.textContent="mark";
  td.addEventListener("click",function (){
      if(q%2!==0){
          exam=exam.sort(up('mark'));
          clear_table();
          ex();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      else {
          exam=exam.sort(down('mark'));
          clear_table();
          ex();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      q++;
  });
  tr.appendChild(td);
  td=document.createElement("td");
  td.textContent="st.";
  td.addEventListener("click",function (){
      if(q%2!==0){
          exam=exam.sort(up('index_st'));
          clear_table();
          ex();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      else {
          exam=exam.sort(down('index_st'));
          clear_table();
          ex();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      q++;
  });
  tr.appendChild(td);
  td=document.createElement("td");
  td.textContent="les.";  
  td.addEventListener("click",function (){
      if(q%2!==0){
          exam=exam.sort(up('index_l'));
          clear_table();
          ex();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      else {
          exam=exam.sort(down('index_l'));
          clear_table();
          ex();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      q++;
  });
  tr.appendChild(td);
  table.appendChild(tr);

  tr=document.createElement("tr");
  td=document.createElement("td");
  let input1=document.createElement("input");
  input1.type="text";
  input1.placeholder="date";
  input1.addEventListener("keyup",function (){
      if(input5.value.length==0&&input4.value.length==0&&input3.value.length==0&&input2.value.length==0&&input1.value.length==0){
          clear_table2();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      else{
          clear_table2();
          for (let i = 0; i < exam.length; ++i) {
              if(exam[i].index_l.toString().includes(input5.value)
                  &&exam[i].date.includes(input1.value)
                  &&exam[i].form_of_exam.includes(input2.value)
                  &&exam[i].mark.includes(input3.value)
                  &&exam[i].index_st.toString().includes(input4.value)){
                  exam[i].to_table();}
          }
      }
  });
  td.appendChild(input1);
  tr.appendChild(td);

  td=document.createElement("td");
  let input2=document.createElement("input");
  input2.type="text";
  input2.placeholder="s./i.";
  input2.addEventListener("keyup",function (){
      if(input5.value.length==0&&input4.value.length==0&&input3.value.length==0&&input2.value.length==0&&input1.value.length==0){
          clear_table2();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      else{
          clear_table2();
          for (let i = 0; i < exam.length; ++i) {
              if(exam[i].index_l.toString().includes(input5.value)
                  &&exam[i].date.includes(input1.value)
                  &&exam[i].form_of_exam.includes(input2.value)
                  &&exam[i].mark.includes(input3.value)
                  &&exam[i].index_st.toString().includes(input4.value)){
                  exam[i].to_table();}
          }
      }
  });
  td.appendChild(input2);
  tr.appendChild(td);

  td=document.createElement("td");
  let input3=document.createElement("input");
  input3.type="text";
  input3.placeholder="mark";
  input3.addEventListener("keyup",function (){
      if(input5.value.length==0&&input4.value.length==0&&input3.value.length==0&&input2.value.length==0&&input1.value.length==0){
          clear_table2();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      else{
          clear_table2();
          for (let i = 0; i < exam.length; ++i) {
              if(exam[i].index_l.toString().includes(input5.value)
                  &&exam[i].date.includes(input1.value)
                  &&exam[i].form_of_exam.includes(input2.value)
                  &&exam[i].mark.includes(input3.value)
                  &&exam[i].index_st.toString().includes(input4.value)){
                  exam[i].to_table();}
          }
      }
  });
  td.appendChild(input3);
  tr.appendChild(td);

  td=document.createElement("td");
  let input4=document.createElement("input");
  input4.type="text";
  input4.placeholder="index st.";
  input4.addEventListener("keyup",function (){
      if(input5.value.length==0&&input4.value.length==0&&input3.value.length==0&&input2.value.length==0&&input1.value.length==0){
          clear_table2();
          for (let i = 0; i < exam.length; ++i) 
          {exam[i].to_table();}
      }
      else{
          clear_table2();
          for (let i = 0; i < exam.length; ++i) {
              if(exam[i].index_l.toString().includes(input5.value)
                  &&exam[i].date.includes(input1.value)
                  &&exam[i].form_of_exam.includes(input2.value)
                  &&exam[i].mark.includes(input3.value)
                  &&exam[i].index_st.toString().includes(input4.value)){
                  exam[i].to_table();}
          }
      }
  });

  td.appendChild(input4);
  tr.appendChild(td);
  td=document.createElement("td");
  let input5=document.createElement("input");
  input5.type="text";
  input5.placeholder="index l.";
  input5.addEventListener("keyup",function (){
      if(input5.value.length==0&&input4.value.length==0&&input3.value.length==0&&input2.value.length==0&&input1.value.length==0){
          clear_table2();
          for (let i = 0; i < exam.length; ++i)
          {exam[i].to_table();}
      }
      else{
          clear_table2();
          for (let i = 0; i < exam.length; ++i) {
              if(exam[i].index_l.toString().includes(input5.value)
                  &&exam[i].date.includes(input1.value)
                  &&exam[i].form_of_exam.includes(input2.value)
                  &&exam[i].mark.includes(input3.value)
                  &&exam[i].index_st.toString().includes(input4.value)){
                  exam[i].to_table();}
          }
      }
  });
  td.appendChild(input5);
  tr.appendChild(td);
  table.appendChild(tr);

}
function up(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

function down(field) {
  return (a, b) => a[field] < b[field] ? 1 : -1;
}

