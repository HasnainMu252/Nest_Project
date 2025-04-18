import { Injectable } from '@nestjs/common';
import { post } from './posts.interface';
import { title } from 'process';

@Injectable()
export class PostsService {
 find(): post | { message: String; } {
    throw new Error('Method not implemented.');
  }
    private posts :post[] = [
        {id:1,title: 'the 1 ofdf tea is very good', article: 'i like this tea very much',comments:'adsadsada'},
       
        {id:2,title: 'the 2 of tea is very good', article: 'i like this tea very much',comments:'adsadsada'},
       
        {id:3,title: 'the 3 of tea is very good', article: 'i like this tea very much',comments:'adsadsada'},
       
    
    
    ];

    getPosts():post[] | {message:string}{
        return this.posts || {message:"no poost"}
    }

    // get method

    getPost(id:Number):post | {message:string}{
        return this.posts.find((item)=>item.id === id) || {message:"post not found"}
    }

    // post request

    createPost(posts:{title:string,article:string,comments:string }): post{
            const newPost: post = {id: this.posts.length +1, ...posts};
            this.posts.push(newPost);
            return newPost;
        }

    updatePost(id:Number,postDto:{title:string;article:string;comments:string}) : post | {message:string}{
        const index = this.posts.findIndex((item)=>item.id === id);
        if(index !== -1){
            this.posts[index] = {id,...postDto}
            return this.posts[index]


        }
        return {message:"psot not found"}



    }

    PartialUpdate(id:Number,postDto:Partial<post>):post | {message : string}{
        const post = this.posts.find((item)=>item.id === id)
        if(!post){
            return {message:"not found"}
        }

        Object.assign(post,postDto)

        return post
    }


  
}
