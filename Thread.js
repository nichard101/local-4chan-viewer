class Thread {
    constructor(title, op, posts) {
      this.title = title;
      this.op = op;
      this.posts = posts || [];
      this.updateTags();
    }

    updateTags(){
      for(let i = 0; i < this.posts.length; i++){
        const tags_out = this.posts[i].tags_out;
        if(tags_out != null){
          if(this.listIncludes(tags_out,this.op.post_id)){
            this.op.tags_in.push(this.posts[i]);
          }
          for(let j = 0; j < i; j++){
            if(this.listIncludes(tags_out,this.posts[j].post_id)){
              this.posts[j].tags_in.push(this.posts[i]);
            }
          }
        }
      }
    }

    listIncludes(list, item){
      for(const l of list){
        if(l == item){
          return true;
        }
      }
      return false;
    }

    toString(){
      let out = `${this.op.toString()}\n`;
      if(this.title != null){
        out = `${this.title}\n` + out;
      }
      for(const p of this.posts){
        out += `${p.toString()}\n`;
      }
      return out;
    }
}

module.exports = Thread;