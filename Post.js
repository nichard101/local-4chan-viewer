class Post {
    constructor(post_id, image_id, text) {
        this.post_id = post_id;
        this.image_id = image_id;
        this.text = text;
        this.tags_in = [];
        this.tags_out = [];
        this.extractTagsOut();
    }

    extractTagsOut(){
        const tags_out = [];
        const tag_regex = /^>>\d+$/;

        const text_split = this.text.split(' ');
        for (const t of text_split){
            if(tag_regex.test(t)){
                tags_out.push(t.slice(2));
            }
        }
        this.tags_out = tags_out;
    }

    toString(){
        let out = `${this.post_id} | ${this.text}`;
        if(this.tags_in.length > 0){
            let tag_list = ``;
            for(const t of this.tags_in){
                tag_list += `>>${t.post_id} `;
            }
            out += ` | REPLIES: ${tag_list}`;
        }
        return out;
    }
}

module.exports = Post;