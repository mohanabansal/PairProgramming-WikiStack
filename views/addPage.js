const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div>
    <label for="title" class="col-sm-2 control-label">Author Name</label>
    <input name="authorName" type="text">
    </div>
    
    <div> <label for="title" class="col-sm-2 control-label">Author Email</label>
    <input name="authorEmail" type="text">
    </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>
    <label for="title" class="col-sm-2 control-label">Content</label>
      <div class="col-sm-10">
      <input id="content" name="content" type="text" class="form-control"/>
      </div>

    <div> 
      <input type= 'radio' name ='status'>Open
      <input type= 'radio' name ='status'>Close
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);