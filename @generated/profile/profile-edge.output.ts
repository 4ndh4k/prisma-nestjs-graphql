import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Profile } from './profile.model';

@ObjectType()
export class ProfileEdge {

    @Field(() => Profile, {nullable:false})
    node!: Profile;

    @Field(() => String, {nullable:false})
    cursor!: string;
}
