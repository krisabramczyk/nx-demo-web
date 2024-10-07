import {Pipe, PipeTransform} from '@angular/core';
import {simpleSort} from "@core/application/sorting";

@Pipe({
  name: 'simpleSort',
  standalone: true,
})

export class SimpleSortPipe<T extends {id: string}> implements PipeTransform {
  transform(items: T[] | null): T[] {
    return simpleSort(items || []);
  }
}
