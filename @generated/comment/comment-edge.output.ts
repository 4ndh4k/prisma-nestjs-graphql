import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Comment } from './comment.model';

@ObjectType()
export class CommentEdge {

    @Field(() => Comment, {nullable:false})
    node!: Comment;

    @Field(() => String, {nullable:false})
    cursor!: string;
}
