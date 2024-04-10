import { ok } from 'assert';
import AwaitEventEmitter from 'await-event-emitter';

import { EventArguments, InputType, OutputType, SchemaField } from '../types';
import { pascalCase } from '../helpers/pascal-case';

export function connectionTypes(emitter: AwaitEventEmitter) {
  emitter.on('BeforeGenerateFiles', createCommon);
  emitter.on('ModelOutputType', createConnectionAndEdge);
  emitter.on('ArgsType', createArgsTypes);
}
function createArgsTypes(field: SchemaField, args: EventArguments) {
  if (['queryRaw', 'executeRaw'].includes(field.name)) {
    return;
  }
  const { eventEmitter, getModelName } = args;
  let className = pascalCase(`${field.name}Args`);
  const modelName = getModelName(className) || '';


  if( className === `FindMany${modelName}Args`) {
    const inputType: InputType = {
      // eslint-disable-next-line unicorn/no-null
      constraints: { maxNumFields: null, minNumFields: null },
      name: `FindMany${modelName}WithPaginationArgs`,
      fields: [...field.args],
    };

    // Create a copy of inputType and remove the cursor, take, skip, distinct fields
    inputType.fields = inputType.fields.filter(x => !['cursor', 'take', 'skip', 'distinct'].includes(x.name));
    // add a pagination field
    inputType.fields.push({
      name: 'pagination',
      isRequired: false,
      isNullable: true,
      inputTypes: [
        {
          location: 'inputObjectTypes',
          type: 'PaginationInput',
          isList: false,
        },
      ],
    });
    eventEmitter.emitSync('InputType', {
      ...args,
      inputType,
      fileType: 'args',
      classDecoratorName: 'ArgsType',
    });

  }

}
function createConnectionAndEdge(outputType: OutputType, args: EventArguments) {
  // Construct an edge object with this mode as node and a string cursor
  const { models, eventEmitter } = args;

  const model = models.get(outputType.name);
  ok(model, `Cannot find model by name ${outputType.name}`);

  const edge = {
    name: `${outputType.name}Edge`,
    fields: [
      {
        name: 'node',
        outputType: {
          namespace: 'model',
          location: 'outputObjectTypes',
          type: outputType.name,
          isList: false,
        },
      },
      {
        name: 'cursor',
        outputType: { location: 'scalar', type: 'String', isList: false },
      },
    ],
  };
  eventEmitter.emitSync('OutputType', edge, args);
  // Construct an edge object with this mode as node and a string cursor
  const connection = {
    name: `${outputType.name}Connection`,
    fields: [
      {
        name: 'edges',
        outputType: {
          location: 'outputObjectTypes',
          type: `${outputType.name}Edge`,
          isList: true,
        },
      },
      {
        name: 'totalCount',
        isNullable: true,
        outputType: { location: 'scalar', type: 'Int', isList: false },
      },
      {
        name: 'pageInfo',
        outputType: { location: 'outputObjectTypes', type: 'PageInfo', isList: false },
      },
    ],
  };
  eventEmitter.emitSync('OutputType', connection, args);
}
function createCommon(args: EventArguments) {
  const { eventEmitter } = args;

  const pageInfo = {
    name: `PageInfo`,
    fields: [
      {
        name: 'hasNextPage',

        outputType: { location: 'scalar', type: 'Boolean', isList: false },
      },
      {
        name: 'hasPreviousPage',
        outputType: { location: 'scalar', type: 'Boolean', isList: false },
      },
      {
        name: 'startCursor',
        isNullable: true,
        outputType: {
          location: 'scalar',
          type: 'String',
          isList: false,
        },
      },
      {
        name: 'endCursor',
        isNullable: true,
        outputType: {
          location: 'scalar',
          type: 'String',
          isList: false,
        },
      },
    ],
  };
  eventEmitter.emitSync('OutputType', pageInfo, args);

  const pagination = {
    name: `PaginationInput`,
    fields: [
      {
        name: 'before',
        isNullable: true,
        inputTypes: [
          {
            location: 'scalar',
            type: 'String',
            isList: false,
          },
        ],
      },
      {
        name: 'after',
        isNullable: true,
        inputTypes: [
          {
            location: 'scalar',
            type: 'String',
            isList: false,
          },
        ],
      },
      {
        name: 'first',
        isNullable: true,
        inputTypes: [
          {
            location: 'scalar',
            type: 'Int',
            isList: false,
          },
        ],
      },
      {
        name: 'last',
        isNullable: true,
        inputTypes: [
          {
            location: 'scalar',
            type: 'Int',
            isList: false,
          },
        ],
      },
    ],
  };
  eventEmitter.emitSync('InputType', {
    ...args,
    inputType: pagination,
    fileType: 'input',
    classDecoratorName: 'InputType',
  });
}
