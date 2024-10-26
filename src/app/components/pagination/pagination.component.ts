import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Output()
  next: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  back: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  jump: EventEmitter<number> = new EventEmitter<number>();
  @Input()
  totalPages: number = 10;
  @Input()
  totalRecords: number = 50;
  currentPage: number = 1;
  showingRecords: number = 5;

  btnNext(){
    if(this.currentPage < this.totalPages){
      this.currentPage++;
      this.showingRecords += 5;
      this.next.emit(this.currentPage);
    }
  }

  btnBack(){
    if(this.currentPage > 1){
      this.currentPage--;
      this.showingRecords -= 5;
      this.back.emit(this.currentPage);
    }
  }

  btnJump(jumpPage: number){
    this.currentPage = jumpPage;
    this.showingRecords *= this.currentPage;
    this.next.emit(jumpPage);
  }

  getPages(){
    if(this.currentPage >= 1 && this.currentPage < 3){
      return [1, 2, 3];
    }
    else if(this.currentPage >= 3 && this.currentPage < (this.totalPages - 1)){
      return [this.currentPage - 1, this.currentPage, this.currentPage + 1]
    }
    else if(this.currentPage >= 3 && this.currentPage < this.totalPages){
      return [this.currentPage - 2, this.currentPage - 1, this.currentPage];
    }
    else {
      return [this.currentPage - 3, this.currentPage - 2, this.currentPage - 1];
    }
  }

}
