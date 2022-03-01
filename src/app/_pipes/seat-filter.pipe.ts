import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seatFilter',
  pure: false
})
export class SeatFilterPipe implements PipeTransform {

  transform(chairs: any[]): any[] {
    if (chairs){
      return chairs.filter(chair => {
        // return Object.FK_Climate_Zone === 1;
      });
    }
    // return chairs.filter(chair => chair.FK_Climate_Zone.indexOf(filter.FK_Climate_Zone) !== -1);
  }

}
