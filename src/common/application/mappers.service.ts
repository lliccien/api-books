import { Injectable } from '@nestjs/common';

type Entity = { [key: string]: any };
type Constructor<T> = new (...args: any[]) => T;

@Injectable()
export class MappersService {
  classToEntity<T>(
    classInstance: T,
    entityConstructor: Constructor<Entity>,
  ): Entity {
    const entity = new entityConstructor();
    const classKeys = Object.keys(classInstance);

    classKeys.forEach((key) => {
      if (typeof classInstance[key] !== 'function') {
        entity[key] = classInstance[key];
      }
    });

    return entity;
  }

  entityToClass<T>(entityObject: Entity, classConstructor: Constructor<T>): T {
    const classObject = new classConstructor();
    Object.keys(entityObject).forEach((key) => {
      if (typeof entityObject[key] !== 'function') {
        classObject[key] = entityObject[key];
      }
    });
    return classObject;
  }

  dtoToClass<T>(dtoObject: T, classConstructor: Constructor<T>): T {
    const classObject = new classConstructor();
    Object.keys(dtoObject).forEach((key) => {
      if (typeof dtoObject[key] !== 'function') {
        classObject[key] = dtoObject[key];
      }
    });
    return classObject;
  }
}
