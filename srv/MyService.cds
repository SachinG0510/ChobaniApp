using data.db from '../db/schema';

service MyService {

    entity StudentDetails as projection on db.student {Id};     // Returns a particular field.
    entity details  as select from db.student;                  // Returns all fields of student entity.
    entity SomeView  as SELECT * from db.student where Id=112;  // Returns complete record where the condition is satisfied.

    // entity InvoiceDetails as select from db.invoice;            // Returns all fields of invoice entity.      // Returns a single field.

}