import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Dummy } from './dummy.model';

@ObjectType()
export class DummyEdge {

    @Field(() => Dummy, {nullable:false})
    node!: Dummy;

    @Field(() => String, {nullable:false})
    cursor!: string;
}
