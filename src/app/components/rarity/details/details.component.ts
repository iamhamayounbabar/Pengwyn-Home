import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  show_up_icon1: boolean = true;
  show_up_icon2: boolean = true;

  attributes: any [] = [
    {background: 'Background', percentage:'% have this trait', option:'Option 1', value:'10%'},
    {background: 'Body', percentage:'% have this trait', option:'Option 1', value:'10%'},
    {background: 'Head', percentage:'% have this trait', option:'Option 1', value:'10%'},
    {background: 'Eyes', percentage:'% have this trait', option:'Option 1', value:'10%'},
    {background: 'Glasses', percentage:'% have this trait', option:'Option 1', value:'10%'},
    {background: 'Beak', percentage:'% have this trait', option:'Option 1', value:'10%'},
    {background: 'Neck', percentage:'% have this trait', option:'Option 1', value:'10%'},
    {background: 'Clothes', percentage:'% have this trait', option:'Option 1', value:'10%'},
    {background: 'Accessory', percentage:'% have this trait', option:'Option 1', value:'10%'},
  ]
  history: any [] = [
    {type:'Sale', from:'hx35a5.....fb8d5', to:'hx35a5.....fb8d5', price:'1200 ICX', binc:'60 ICX', date:'21 June 2023', txHash:'...565ed66'},
    {type:'Sale', from:'hx35a5.....fb8d5', to:'hx35a5.....fb8d5', price:'1200 ICX', binc:'60 ICX', date:'21 June 2023', txHash:'...565ed66'},
    {type:'Sale', from:'hx35a5.....fb8d5', to:'hx35a5.....fb8d5', price:'800 ICX', binc:'40 ICX', date:'20 June 2023', txHash:'...f6a7sf7a'},
    {type:'Sale', from:'hx35a5.....fb8d5', to:'hx35a5.....fb8d5', price:'800 ICX', binc:'40 ICX', date:'20 June 2023', txHash:'...f6a7sf7a'},
    {type:'Sale', from:'hx35a5.....fb8d5', to:'hx35a5.....fb8d5', price:'500 ICX', binc:'25 ICX', date:'13 June 2023', txHash:'...8avpb8h'},
    
  ]

  toggleIcons1() {
   this.show_up_icon1 = !this.show_up_icon1;
   }

   toggleIcons2() {
    this.show_up_icon2 = !this.show_up_icon2;
    }
}
