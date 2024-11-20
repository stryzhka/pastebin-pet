import PostService from "../service/PostService.js";

class PostController{
    async create(req, res){
        try{
            const post = await PostService.create(req.body)
            res.json(post)
        } catch(e){
            res.status(500).json(e)
        }
    }
    async getOne(req, res){
        try{
            const post = await PostService.getOne(req.params.id)
            res.json(post)
        } catch(e){
            res.status(500).json(e)
        }
    }
    async getAll(req, res){
        const posts = await PostService.getAll()
        res.json(posts)
    }
    async update(req, res){
        try{
            const post = await PostService.update(req.body)
            return res.json(post)
        } catch(e){
            res.status(500).json(e.message)
        }
    }
    async delete(req, res){
        try{
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch(e){
            res.status(500).json(e.message)
        }
    }
}

export default new PostController()