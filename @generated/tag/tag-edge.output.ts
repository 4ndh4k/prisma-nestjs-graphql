import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Tag } from './tag.model';

@ObjectType()
export class TagEdge {

    @Field(() => Tag, {nullable:false})
    node!: Tag;

    @Field(() => String, {nullable:false})
    cursor!: string;
}
