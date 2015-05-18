Mini-mongo extensions
=======
At this package we will publish mini-mongo functionality extensions


Install the driver
=======
```
meteor add ostrio:minimongo-extensions
```

Extensions
=======
Currently only one extension is available:
#### collection.insert(doc, [callback])
 - `doc` {*Object*|*[Object]*}
 - `callback` {*Function*}
    * `error` {*Meteor.Error*}
    * `result` {*String*|*[String]*} - New document ID or array of new documents IDs

After installing this package every `collection.insert()` will accept array of objects **[Object]**, each object in array will be inserted separately by its own, in accordance to [db.collection.insert](http://docs.mongodb.org/manual/reference/method/db.collection.insert/#db.collection.insert) MongoDB docs.

If `doc` is array of objects, second parameter of the callback is array of new documents IDs. For more see [collection.insert(doc, [callback])](http://docs.meteor.com/#/full/insert)
