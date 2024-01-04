
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
  
    print_objs_exam(){return this.date+' '+this.form_of_exam+' '+this.mark+' st:'+this.index_st+' lesson:'+this.index_l;}
    
  }
     
var xhttp;
var textInf;
xhttp = new XMLHttpRequest();

function table_student(){
xhttp.open("GET","/files/data2.xml", true);
xhttp.send();
var stud = [];
  xhttp.onreadystatechange = function() {
    if (xhttp.status == 200 && xhttp.readyState == 4) {
      textInf = xhttp.responseXML;
      var name_=textInf.getElementsByTagName("name");
      var faculty_=textInf.getElementsByTagName("faculty");
      var course_=textInf.getElementsByTagName("course");
      var group_=textInf.getElementsByTagName("group");
      for(var i = 0; i < 5; i++)
        {
          stud.push(new Student(name_[i].innerHTML, faculty_[i].innerHTML, course_[i].innerHTML, group_[i].innerHTML))
        }
      var table_stud = document.getElementById("table_stud");
      var table = document.createElement("table");
      table.style.border="solid 2px white";
      table.style.width="500px";
      for(var i = 0; i < stud.length; i++){
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.textContent = stud[i].name;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.textContent =stud[i].faculty;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.textContent =stud[i].course;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.textContent =stud[i].group;
        tr.appendChild(td);
        
        table.appendChild(tr);}
      table_stud.appendChild(table);  
    }   
  };
}
function table_lesson(){
xhttp.open("GET","/files/data2.xml", true);
xhttp.send();
var lesson = [];
  xhttp.onreadystatechange = function() {
    if (xhttp.status == 200 && xhttp.readyState == 4) {
      textInf = xhttp.responseXML;
      var lesson_=textInf.getElementsByTagName("lesson");
      var hours=textInf.getElementsByTagName("hours");
      var teacher=textInf.getElementsByTagName("teacher");
      for(var i = 0; i < 3; i++)
        {
          lesson.push(new Lesson(lesson_[i].innerHTML, hours[i].innerHTML, teacher[i].innerHTML))
        }
      var table_les = document.getElementById("table_les");
      var table = document.createElement("table");
      table.style.border="solid 2px white";
      table.style.width="500px";
      for(var i = 0; i < lesson.length; i++){
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.textContent = lesson[i].lesson;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.textContent =lesson[i].count_of_hours;
        tr.appendChild(td);
        var td = document.createElement("td");
        td.textContent =lesson[i].teacher;
        tr.appendChild(td);
        
        table.appendChild(tr);}
      table_les.appendChild(table);  
    }   
  };
  }
  function table_exam(){
    xhttp.open("GET","/files/data2.xml", true);
    xhttp.send();
    var exam = [];
      xhttp.onreadystatechange = function() {
        if (xhttp.status == 200 && xhttp.readyState == 4) {
          textInf = xhttp.responseXML;
          var form_=textInf.getElementsByTagName("form_");
          var mark_=textInf.getElementsByTagName("mark");
          var date_=textInf.getElementsByTagName("date");
          var index_st_=textInf.getElementsByTagName("index_st");
          var index_l_=textInf.getElementsByTagName("index_l");
          for(var i = 0; i < 6; i++)
            {
              exam.push(new Exam(form_[i].innerHTML, mark_[i].innerHTML, date_[i].innerHTML, index_st_[i].innerHTML, index_l_[i].innerHTML))
            }
          var table_exam = document.getElementById("table_exam");
          var table = document.createElement("table");
          table.style.border="solid 2px white";
          table.style.width="500px";
          for(var i = 0; i < exam.length; i++){
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.textContent = exam[i].form_of_exam;
            tr.appendChild(td);
            var td = document.createElement("td");
            td.textContent =exam[i].mark;
            tr.appendChild(td);
            var td = document.createElement("td");
            td.textContent =exam[i].date;
            tr.appendChild(td);
            var td = document.createElement("td");
            td.textContent =exam[i].index_st;
            tr.appendChild(td);
            var td = document.createElement("td");
            td.textContent =exam[i].index_l;
            tr.appendChild(td);
            
            table.appendChild(tr);}
          table_exam.appendChild(table);  
        }   
      };
  }
  