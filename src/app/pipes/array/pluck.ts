import {PipeTransform, Pipe, Injectable} from '@angular/core';
import {extractProperty} from '../utils/utils';

@Injectable()
@Pipe({name: 'pluck'})
export class PluckPipe implements PipeTransform {

  transform(arr: any[], map: string): any[] {
    return Array.isArray(arr)
      ? arr.map(e => extractProperty(e, map))
      : arr;
  }
}
