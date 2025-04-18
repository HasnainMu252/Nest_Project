import { Body, Controller,Get ,Param, Patch, Post,Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { post } from './posts.interface'

@Controller('posts')
export class PostsController {
    constructor(private readonly postServices: PostsService) {}
    
      @Get(':id')
      getPost(@Param('id') id: number): post | { message: String } {
        return this.postServices.getPost(Number(id));
        
      }
      @Get()
      getPosts(): post[] | { message: String } {
        return this.postServices.getPosts();
        
      }

      @Post()
      createPost(@Body() newPost: {title:string,article:string,comments:string}): post{
        return this.postServices.createPost(newPost)
      }
      @Put(':id') 
      updatePost(@Param('id') id: number, @Body() updatePostdto: {title;string;article:string;comments:string},): post | { message: string } {
      return this.postServices.updatePost(Number(id), updatePostdto);
       
      
      }
    @Patch(':id') PartialUpdate(@Param('id') id: Number, @Body() postDto:Partial<post>): post | { message: String } {
     return this.postServices.PartialUpdate(Number(id), postDto);
     
    }
    }
