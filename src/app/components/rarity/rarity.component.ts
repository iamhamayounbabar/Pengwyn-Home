import { Component, ViewChild, ElementRef } from '@angular/core';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-rarity',
  templateUrl: './rarity.component.html',
  styleUrls: ['./rarity.component.css']
})
export class RarityComponent {
  filteredItems: string[] = [];
  @ViewChild('chips') chips: ElementRef | undefined;

  filterItems: Filter[] = [
    { category: 'Sale', filters: ['Sale', 'For sale'] },
    { category: 'Collection', filters: ['Pengwyn OG (812)', 'Pengwyn waddle (1575)'] },
    { category: 'OG attributes', filters: ['Member NFTs', 'The ultimate Pengwyn NFT'] },
    { category: 'Waddle Attributes', filters: [] },
    { category: 'Background', filters: ['Option 1', 'Option 2', 'Option 3'] },
    { category: 'Body', filters: [] },
    { category: 'Head', filters: [] },
    { category: 'Eyes', filters: [] },
    { category: 'Glasses', filters: [] },
    { category: 'Beak', filters: [] },
    { category: 'Neck', filters: [] },
    { category: 'Clothes', filters: [] },
    { category: 'Accessory', filters: [] },
  ];

  rarityPengwyn: any = [
    {img: 'assets/images/pengwyn1.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #200', btn1:'Waddle',text:'Rank', numb:'100',value:'1000 ICX'},
    {img: 'assets/images/pengwyn2.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #300', btn1:'Waddle',text:'Rank', numb:'Councilor',value:'Not for sale'},
    {img: 'assets/images/pengwyn3.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #50', btn1:'OG',text:'Rank', numb:'100',value:'1050 ICX'},
    {img: 'assets/images/pengwyn4.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #400', btn1:'Waddle',text:'Rank', numb:'100',value:'990 ICX'},
    {img: 'assets/images/pengwyn5.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #100', btn1:'Waddle',text:'Rank', numb:'100',value:'Not for sale'},
    {img: 'assets/images/pengwyn6.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #50', btn1:'OG',text:'Rank', numb:'100',value:'990 ICX'},
    {img: 'assets/images/pengwyn1.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #200', btn1:'Waddle',text:'Rank', numb:'100',value:'1000 ICX'},
    {img: 'assets/images/pengwyn4.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #400', btn1:'Waddle',text:'Rank', numb:'100',value:'990 ICX'},
    {img: 'assets/images/pengwyn1.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #200', btn1:'Waddle',text:'Rank', numb:'100',value:'1000 ICX'},
    {img: 'assets/images/pengwyn2.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #300', btn1:'Waddle',text:'Rank', numb:'100',value:'Not for sale'},
    {img: 'assets/images/pengwyn3.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #50', btn1:'OG',text:'Rank', numb:'100',value:'1050 ICX'},
    {img: 'assets/images/pengwyn4.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #400', btn1:'Waddle',text:'Rank', numb:'100',value:'990 ICX'},
    {img: 'assets/images/pengwyn5.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #100', btn1:'Waddle',text:'Rank', numb:'100',value:'Not for sale'},
    {img: 'assets/images/pengwyn6.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #50', btn1:'OG',text:'Rank', numb:'100',value:'990 ICX'},
    {img: 'assets/images/pengwyn1.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #200', btn1:'Waddle',text:'Rank', numb:'100',value:'1000 ICX'},
    {img: 'assets/images/pengwyn4.svg', icon:'assets/images/craft-icon.svg', name:'Zombie Pengwyn #400', btn1:'Waddle',text:'Rank', numb:'100',value:'990 ICX'},
  ]

  filtersUpdated(selectedFilters: string[]){
    console.log(selectedFilters);
    this.filteredItems = selectedFilters;
  }

  addRemove(item: string){
    if(!this.filteredItems.includes(item)){
      this.filteredItems.push(item);
    }
    else{
      let index = this.filteredItems.findIndex(f => f == item);
      this.filteredItems.splice(index, 1);
    }
    this.filtersUpdated(this.filteredItems);
  }

  moveLeft(){
    if(this.chips){
      this.chips.nativeElement.scrollLeft += 20;
    }
  }

  moveRight(){
    if(this.chips){
      this.chips.nativeElement.scrollLeft -= 20;
    }
  }

}
