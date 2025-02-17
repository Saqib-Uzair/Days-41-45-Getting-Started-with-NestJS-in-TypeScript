import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    private readonly cats:string[]= ['Milo','Whiskers','Shadow'];
    findAll():string[]{
        return this.cats;
    }
}
