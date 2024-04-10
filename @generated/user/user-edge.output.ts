import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class UserEdge {

    @Field(() => User, {nullable:false})
    node!: User;

    @Field(() => String, {nullable:false})
    cursor!: string;
}
