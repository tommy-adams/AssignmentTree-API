# AssignmentTree-API

To make this web application work properly, you must have a MongoDB cluster.
Follow the documentation on the MongoDB site to set this up.

After cloning the repository, run ```npm install``` in the AssignmentTree-API directory.

Create a file within the AssignmentTree-API named CREDS.js, the contents of which will be used to connect to your MongoDB cluster.
The file should look something like this:
```
const mongoose = require("mongoose");

exports.connect = () => {
  mongoose.connect("mongodb+srv://admin:<password>@<cluster>.4caik.mongodb.net/<db_name>", {useNewUrlParser: true});
};
```

To run this API, use ```npm run dev``` in the repository.
