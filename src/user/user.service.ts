import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    private users :User[] = [{id:1,name: 'Alie', email: 'alice@example.com'},
        {id:2, name: 'Alice12', email: 'alice12@example.com'}];

        //Get - Retrieve y ID

        getUser(id: number): User | {message: String} {
            return this.users.find((user) => user.id === id) || {message: "not found"};
        }

        createUser(user:{name:string,email:string }): User{
            const newUser: User = {id: this.users.length +1, ...user};
            this.users.push(newUser);
            return newUser;
        }
         
        updateUser(id: number, userDto: {name: string, email: string}): User | {message: string} {
            const userIndex = this.users.findIndex((user) => user.id === id);
            if (userIndex !== -1) {
                this.users[userIndex] = { id, ...userDto };
                return this.users[userIndex];
            }
            return { message: 'User not found' };
        }
        
        partiallyupdateUser(id: number, userDto: Partial<User>): User | {message: string} {
        
            const user = this.users.find((user) => user.id === id);
            if(!user) return {message: 'User not found'};
            
            Object.assign(user, userDto);
            return user;
        
        }
        
        deleteUser(id: number): string {
        
            const index = this.users.findIndex((user) => user.id === id);
            if (index === -1) return `User with Id ${id} not found`;
        
            this.users.splice(index, 1);
            return `User with id ${id}deleted successfully`;
        
        
        }

}
