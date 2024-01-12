namespace chobani.db;

entity users {
    key id:Integer;
    name: String(50);
    userName: String(50);
    password: String(50);
}
entity student{
    key Id:Integer;
    name:String(50);
    degree:String(30);
    salary:String(30);
    newsalary:String(30);
    oldsalary:String(30);
}
