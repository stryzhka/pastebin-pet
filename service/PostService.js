import Post from "../models/Post.js"
class PostService{
    async create(post){
        const createdPost = await Post.create(post)
        return createdPost
    }

    async getOne(id){
        if (!id){
            throw new Error("no id error")
        } 
        const post = await Post.findById(id)
        return post
    }

    async getAll(){
        const posts = Post.find()
        return posts
    }

    async delete(id){
        if (!id){
            throw new Error("no id error")
        }
        const post = await Post.findByIdAndDelete(id)
        return post
    }
    
    async update(post){
        if (!post._id){
            throw new Error("no id error")
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost
    }

}

export default new PostService()