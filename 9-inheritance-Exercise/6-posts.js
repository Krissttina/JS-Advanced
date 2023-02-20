function solve(){
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
    
    toString(){
        return `Post: ${this.title}\n` + `Content: ${this.content}`;
    }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes,deslikes){
            super(title, content);
            this.likes = likes;
            this.deslikes = deslikes;
            this._comments = [];
        }

        addComment(comment){
            this._comments.push(comment);
        }

        toString(){
            return super.toString() + `\n` +
            `Rating ${this.likes - this.deslikes}` +
            (this._comments.length ? '\nComments' + '\n' + (this._comments.map(c => ` * ${c}`).join('\n')): '');
        }
    }

    class BlogPost extends Post{
        constructor(title, content, view){
            super(title, content)
            this.view = view;
        }

        view(){
            this.view++;
            return this;
        }

        toString(){
            return super.toString() + `\n` + `Views: ${this.view}`;
        }
    }
    return{
        Post,
        SocialMediaPost,
        BlogPost
    }
}