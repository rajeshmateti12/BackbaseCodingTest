import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaceFromClass'
})
export class RemoveSpaceFromClassPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\s/g, "")
  }

}
